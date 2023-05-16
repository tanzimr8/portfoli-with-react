import Slider from './Slider';
import About from './About';
import Works from './Works';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
const Home = ()=>{
    return(
        <>
            <Slider/>
            <About/>
            <Works/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
}
export default Home;