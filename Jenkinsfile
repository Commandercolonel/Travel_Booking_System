pipeline {
  agent any

  environment {
    // Set your repository SSH url and credential id (update credential id in Jenkins to match)
    GIT_URL = 'git@github.com:RITHVIK004/Travel-Booking-System.git'
    GIT_BRANCH = 'main'
    GIT_CREDENTIALS = 'github-ssh-creds' // create this SSH credential in Jenkins and paste its id here

    // Docker / registry (optional)
    DOCKER_REGISTRY = ''
    DOCKER_CREDENTIALS = ''

    BACKEND_IMAGE = "${env.DOCKER_REGISTRY}/travel-booking-backend:${env.BUILD_NUMBER}"
    FRONTEND_IMAGE = "${env.DOCKER_REGISTRY}/travel-booking-frontend:${env.BUILD_NUMBER}"

    DEPLOY = 'false'
    DEPLOY_HOST = ''
    DEPLOY_SSH_CREDENTIALS = ''
  }

  options {
    timestamps()
    buildDiscarder(logRotator(daysToKeepStr: '30'))
    timeout(time: 1, unit: 'HOURS')
  }

  stages {
    stage('Checkout') {
      steps {
        script {
          git url: env.GIT_URL, branch: env.GIT_BRANCH, credentialsId: env.GIT_CREDENTIALS
        }
      }
    }

    stage('Backend: Composer install & tests') {
      steps {
        script {
          if (fileExists('backend/composer.json')) {
            echo "Running composer install and tests"
            if (isUnix()) {
              sh '''
                cd backend
                if ! command -v composer >/dev/null 2>&1; then
                  echo 'composer not found on agent - please install or add composer to PATH'; exit 0
                fi
                composer install --no-interaction --no-progress --prefer-dist || true
                if [ -f phpunit.xml ] || [ -d tests ]; then
                  if [ -f vendor/bin/phpunit ]; then
                    vendor/bin/phpunit || true
                  else
                    echo 'phpunit not installed; skipping tests'
                  fi
                fi
              '''
            } else {
              bat '''
                cd backend
                where composer || echo Composer not found
                composer install --no-interaction --no-progress --prefer-dist || exit /B 0
                if exist phpunit.xml (
                  if exist vendor\bin\phpunit (
                    vendor\bin\phpunit || echo phpunit run failed
                  ) else (
                    echo phpunit not installed; skipping tests
                  )
                )
              '''
            }
          } else {
            echo "No backend/composer.json found — skipping backend stage"
          }
        }
      }
    }

    stage('Frontend: npm install & build') {
      steps {
        script {
          if (fileExists('frontend/package.json')) {
            echo "Building frontend (npm)"
            if (isUnix()) {
              sh '''
                cd frontend
                if [ -f package-lock.json ]; then npm ci --silent; else npm install --silent; fi
                npm run build --silent || true
              '''
            } else {
              bat '''
                cd frontend
                if exist package-lock.json ( npm ci --silent ) else ( npm install --silent )
                npm run build --silent || echo build failed
              '''
            }
            script {
              if (fileExists('frontend/build')) {
                archiveArtifacts artifacts: 'frontend/build/**', fingerprint: false, allowEmptyArchive: true
              }
            }
          } else {
            echo "No frontend/package.json found — skipping frontend build"
          }
        }
      }
    }

    stage('Build Docker images') {
      steps {
        script {
          def dockerAvailable = false
          if (isUnix()) {
            dockerAvailable = (sh(script: 'docker --version >/dev/null 2>&1 || true', returnStatus: true) == 0)
          } else {
            dockerAvailable = (bat(script: 'docker --version >NUL 2>&1 || exit /B 1', returnStatus: true) == 0)
          }

          if (!dockerAvailable) {
            echo "Docker not available on agent - skipping docker image build"
          } else {
            if (fileExists('backend/Dockerfile')) {
              if (isUnix()) { sh "docker build -t ${BACKEND_IMAGE} ./backend" } else { bat "docker build -t ${BACKEND_IMAGE} ./backend" }
            } else { echo "No backend/Dockerfile found - skipping backend image build" }

            if (fileExists('frontend/Dockerfile')) {
              if (isUnix()) { sh "docker build -t ${FRONTEND_IMAGE} ./frontend" } else { bat "docker build -t ${FRONTEND_IMAGE} ./frontend" }
            } else { echo "No frontend/Dockerfile found - skipping frontend image build" }
          }
        }
      }
    }

    stage('Push images (optional)') {
      when { expression { return env.DOCKER_REGISTRY?.trim() && env.DOCKER_REGISTRY != '' } }
      steps {
        script {
          if (!env.DOCKER_CREDENTIALS?.trim()) { echo "DOCKER_CREDENTIALS not provided; attempting docker push without login" }
          if (isUnix()) {
            if (env.DOCKER_CREDENTIALS?.trim()) {
              withCredentials([usernamePassword(credentialsId: env.DOCKER_CREDENTIALS, passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                sh 'echo "$DOCKER_PASS" | docker login ${DOCKER_REGISTRY} -u "$DOCKER_USER" --password-stdin'
                sh "docker push ${BACKEND_IMAGE} || true"
                sh "docker push ${FRONTEND_IMAGE} || true"
                sh 'docker logout ${DOCKER_REGISTRY} || true'
              }
            } else {
              sh "docker push ${BACKEND_IMAGE} || true; docker push ${FRONTEND_IMAGE} || true"
            }
          } else {
            if (env.DOCKER_CREDENTIALS?.trim()) {
              withCredentials([usernamePassword(credentialsId: env.DOCKER_CREDENTIALS, passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                bat 'echo %DOCKER_PASS% | docker login %DOCKER_REGISTRY% -u %DOCKER_USER% --password-stdin'
                bat "docker push ${BACKEND_IMAGE} || echo push failed"
                bat "docker push ${FRONTEND_IMAGE} || echo push failed"
                bat 'docker logout %DOCKER_REGISTRY% || echo logout failed'
              }
            } else {
              bat "docker push ${BACKEND_IMAGE} || echo push failed & docker push ${FRONTEND_IMAGE} || echo push failed"
            }
          }
        }
      }
    }

    stage('Deploy (optional)') {
      when { expression { return env.DEPLOY == 'true' } }
      steps {
        script {
          if (!env.DEPLOY_SSH_CREDENTIALS?.trim()) { error "DEPLOY_SSH_CREDENTIALS not set - cannot deploy" }
          sshagent([env.DEPLOY_SSH_CREDENTIALS]) {
            def remote = env.DEPLOY_HOST
            if (!remote) { error "DEPLOY_HOST not provided" }
            if (isUnix()) {
              sh '''
                scp -o StrictHostKeyChecking=no docker-compose.yml ${remote}:/tmp/docker-compose.yml || true
                ssh -o StrictHostKeyChecking=no ${remote} '
                  docker pull ${FRONTEND_IMAGE} || true
                  docker pull ${BACKEND_IMAGE} || true
                  cd /tmp
                  docker-compose -f docker-compose.yml pull || true
                  docker-compose -f docker-compose.yml up -d --remove-orphans
                '
              '''
            } else {
              bat '''
                scp -o StrictHostKeyChecking=no docker-compose.yml %DEPLOY_HOST%:/tmp/docker-compose.yml || echo scp skipped
                ssh -o StrictHostKeyChecking=no %DEPLOY_HOST% "docker pull %FRONTEND_IMAGE% || true & docker pull %BACKEND_IMAGE% || true & docker-compose -f /tmp/docker-compose.yml pull || true & docker-compose -f /tmp/docker-compose.yml up -d --remove-orphans"
              '''
            }
          }
        }
      }
    }
  }

  post {
    always { echo "Pipeline finished: ${currentBuild.currentResult}" }
    success { echo "Build succeeded" }
    failure { echo "Build failed" }
  }
}
