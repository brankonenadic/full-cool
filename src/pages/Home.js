import { Fragment } from 'react';
import Header from '../components/sections/Header';
import Navbar from '../components/sections/Navbar';
import Footer from '../components/sections/Footer';
import Main from '../components/sections/Main'
import Contact from '../components/sections/Contact';

const Home = (props) => {
    return (
        <Fragment>
            <Navbar onClick={props.onShow} />
            <Header />
            <Main />
            <Contact />
            <Footer />
        </Fragment>
    )
}

export default Home
