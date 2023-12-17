import Destination from "../component/Destination";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Trip from "../component/Trip";
import Footer from "../component/Footer";


function Home (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero"
        heroImg="./assets/12.jpg"
        title="Your Jouney Your Story"
        text="Choose Your Fvaourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"

        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    
    );

}

export default Home;