import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import BookingDetails from './pages/BookingDetails';
import BookingForm from './components/BookingForm';
import Bookings from './pages/Bookings';
import Flights from './pages/Flights';
import Buses from './pages/Buses';
import Trains from './pages/Trains';
import Tours from './pages/Tours';
import './styles/main.css';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/search" component={SearchResults} />
                    <Route path="/flights" component={Flights} />
                    <Route path="/buses" component={Buses} />
                    <Route path="/trains" component={Trains} />
                    <Route path="/tours" component={Tours} />
                    <Route path="/booking/:id" component={BookingDetails} />
                    <Route path="/book" component={BookingForm} />
                    <Route path="/bookings" component={Bookings} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;