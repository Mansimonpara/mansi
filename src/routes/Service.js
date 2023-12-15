import Hero from "../component/Hero";
import Navbar from "../component/Navbar";

function Service (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg="./assets/night.jpg"
        title="Service"
        
        
        btnClass="hide"

        />
        
        </>
    
    )

}

export default Service;