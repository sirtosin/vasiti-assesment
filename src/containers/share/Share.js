import React from "react";
import { Paper } from "@mui/material";
import image from "../../assets/clip.png";
import "./Share.css";
const Share = () => {
  return (
    <div className="share__container">
      <div className="share__card">
        <Paper className="card">
          <aside className="title">
            <h2> Share your amazing story!</h2>
            <span>&times;</span>
          </aside>
          <form>
            <label>Upload your Picture</label>
            <span className="file">
              <p>choose image</p>
              <img src={image} />
              <input type="file" />
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

            <aside className="checkbox">
              <label className="title">
                What did you interact with Vasiti as?
              </label>
              <span>
                <div class="radio-item">
                  <input
                    type="radio"
                    id="customer"
                    name="ritem"
                    value="ropt1"
                  />
                  <label for="customer">customer</label>
                </div>

                <div class="radio-item">
                  <input type="radio" id="vendor" name="ritem" value="ropt2" />
                  <label for="vendor"> vendor</label>
                </div>
              </span>
            </aside>
            <label>City or Higher Institution (for Students)</label>
            <textarea className="textarea2" />
            <button>Share your story</button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default Share;
