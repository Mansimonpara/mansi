import "./TripStyles.css";
import TripData from "./TripData";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
            <TripData
            image="./assets/5.jpg"
            heading = "Trip in Indonesias"
            text= "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania, it consistys of over 17,000 islands, including Sumatra, java, ulawesi, and parts of borneo and New Guinea."
            />

            <TripData
            image="./assets/8.jpg"
            heading ="Trip in Malaysia"
            text ="Malasiya is a Southeast Asian country occupying parts of the Malay Peninsula and the island of borneo. it's known for its beaches, rainforests and mix of malay, Chinese,Indian and Eropean cultural influences."
            />

            <TripData
            image="./assets/6.jpg"
            heading ="Trip in France"
            text ="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
            />

            </div>
        </div>
    );
}

export default Trip;