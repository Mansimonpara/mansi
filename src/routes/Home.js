import Hero from "../component/Hero";
import Navbar from "../component/Navbar";


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
        </>
    
    );

}

export default Home;