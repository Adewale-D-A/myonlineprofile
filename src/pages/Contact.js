import ContactIcons from "./ContactIcons";
import "./css/Contact.css";
import emailjs from "emailjs-com";
import NavBar from "../components/navbar";

const Contact = () => {
  const submitForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wmx3q9h",
        "template_sykzphk",
        e.target,
        "X7wqL7un78p_mFkYr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="ct-back-img">
        <div>
          <div>
            <NavBar pr="" hm="" ab="" ct="ct" />
          </div>
          <div className="contact-container-main">
            <div className="contact-txt-main">
              <span className="contact-txt">
                Want to know more about me or want us to work together on a
                project? Why don’t you leave me a message or reach out to me on
                my socials.
              </span>
            </div>
            <div className="contct-me-on">
              <div>
                <span className="con-txt-2">Contact me on:</span>
              </div>
              <div className="icon-data">
                <ContactIcons />
              </div>
            </div>
            <div className="form-data">
              <form onSubmit={submitForm}>
                <div>
                  <label>Name:</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name:"
                    className=""
                  />
                </div>
                <div>
                  <label>Contact Info:</label>
                  <br />
                  <input
                    type="text"
                    name="contact-info"
                    placeholder="Contact:"
                  />
                </div>
                <div>
                  <label>Leave a message for me:</label>
                  <br />
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Leave a message:"
                  />
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
            <div className="credits">
              <span>
                image credit to{" "}
                <a href="https://unsplash.com/@jjying?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyTex">
                  unsplash
                </a>{" "}
                and
              </span>
              <span>
                {""} icons credit to{" "}
                <a href="https://fontawesome.com/v4/icons/">fontawesome</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
