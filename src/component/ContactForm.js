import "./ContactFormStyles.css";

function ContactForm(){
    return(
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form>
             <input placeholder="Name"/>
             <input placeholder="Email"/>
             <input placeholder="Subject"/>
            <textarea placeholder="Measage" rows="4"></textarea>             
            <button>Send Measage</button>
            </form>
        </div>
    )
}
export default ContactForm;