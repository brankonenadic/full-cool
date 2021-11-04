import { Fragment } from 'react';
import Header from '../components/sections/Header';
import Navbar from '../components/sections/Navbar';
import Footer from '../components/sections/Footer';
import Main from '../components/sections/Main'

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <Header />
            <Main />
            <Footer />
        </Fragment>
    )
}

export default Home
