import { Fragment } from 'react';
import Header from '../components/sections/Header';
import Navbar from '../components/sections/Navbar';
import Footer from '../components/sections/Footer';

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <Header />
            <h1>HOME PAGE</h1>
            <Footer />
        </Fragment>
    )
}

export default Home
