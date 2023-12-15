import Hero from "../component/Hero";
import Navbar from "../component/Navbar";


function Contact (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg="./assets/2.jpg"
        title="Contact"
        
        
        btnClass="hide"

        />
        
        </>
    
    )

}

export default Contact