import React, { useState } from "react";
import { Paper } from "@mui/material";
import image from "../../assets/clip.png";
import image2 from "../../assets/times.png";
import "./Share.css";;
const Share = () => {
  const [showCard, setShowCard] = useState(true);
  const [dataText, setDataText] = useState("choose image");
  const [show, setShow] = useState(false)
  const [success, setSuccess] = useState(false)
  
  const handleClick = (e) => {
    setDataText(e.target.files[0].name);
    setShow(true)
  }
  const displayCard = () => {
    setShowCard(false);
  };

  const handleRemove = () => {
    setDataText("choose image")
    setShow(false)
  }

const displaySuccess = () => {
  setSuccess(true)
  }
 
  return (
    <>
      {showCard && (
        <div className="share__container">
          <div className="share__card">
            <Paper className="card">
              {success ? (
                <div className="card2">
                  <span className="ellipse">
                    <p>🎉</p>
                  </span>
                  <h2>
                    Thank you for <br /> sharing your story!
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button onClick={displayCard}>close</button>
                </div>
              ) : (
                <>
                  <aside className="title">
                    <h2> Share your amazing story!</h2>
                    <span onClick={displayCard}>&times;</span>
                  </aside>
                  <form>
                    <label>Upload your Picture</label>
                    <span className="file" data-text={dataText}>
                      <img
                        src={show ? image2 : image}
                        onClick={handleRemove}
                        style={{
                          width: "20px",
                          height: "20px",
                          marginTop: "5.5em",
                          marginLeft: "24em",
                          position: "absolute",
                          zIndex: "1000",
                          cursor: "pointer",
                        }}
                      />
                      <input type="file" onChange={handleClick} />
                    </span>
                    <aside className="name">
                      <span>
                        <label>firstname</label>
                        <input type="text" />
                      </span>
                      <span>
                        <label> last name</label>
                        <input type="text" />
                      </span>
                    </aside>
                    <label> Share your story</label>
                    <textarea className="textarea1" />

                    <section className="checkbox">
                      <label className="title">
                        What did you interact with Vasiti as?
                      </label>
                      <aside>
                        <span class="radio-item">
                          <input
                            type="radio"
                            id="customer"
                            name="ritem"
                            value="ropt1"
                          />
                          <label for="customer">customer </label>
                        </span>

                        <span class="radio-item">
                          <input
                            type="radio"
                            id="vendor"
                            name="ritem"
                            value="ropt2"
                          />
                          <label for="vendor">vendor</label>
                        </span>
                      </aside>
                    </section>
                    <label>City or Higher Institution (for Students)</label>
                    <textarea className="textarea2" placeholder="optional" />
                    <button onClick={displaySuccess}>Share your story</button>
                  </form>
                </>
              )}
            </Paper>
          </div>
        </div>
      )}
    </>
  );
};

export default Share;

