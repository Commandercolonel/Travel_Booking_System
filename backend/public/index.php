<?php
require_once '../vendor/autoload.php';

use FastRoute\RouteCollector;
use function FastRoute\simpleDispatcher;

$dispatcher = simpleDispatcher(function(RouteCollector $r) {
    $r->addRoute('GET', '/', 'HomeController@index');
    $r->addRoute('POST', '/api/bookings', 'BookingController@create');
    $r->addRoute('GET', '/api/bookings/{id}', 'BookingController@show');
    // Add more routes as needed
});

// Fetch method and URI from the server
httpMethod = $_SERVER['REQUEST_METHOD'];
uri = $_SERVER['REQUEST_URI'];

// Strip query string (?...) and decode URI
$uri = strtok($uri, '?');

$routeInfo = $dispatcher->dispatch($httpMethod, $uri);

switch ($routeInfo[0]) {
    case FastRoute\Dispatcher::NOT_FOUND:
        http_response_code(404);
        echo json_encode(['error' => 'Not Found']);
        break;
    case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
        http_response_code(405);
        echo json_encode(['error' => 'Method Not Allowed']);
        break;
    case FastRoute\Dispatcher::FOUND:
        $handler = $routeInfo[1];
        $vars = $routeInfo[2];

        // Call the appropriate controller method
        list($controller, $method) = explode('@', $handler);
        $controller = new $controller();
        echo json_encode($controller->$method($vars));
        break;
}
?>