import Hero from "../component/Hero";
import Navbar from "../component/Navbar";   


function About (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg="./assets/night.jpg"
        title="About"
        
        
        btnClass="hide"

        />
        </>
        
        
    
    );

}

export default About;