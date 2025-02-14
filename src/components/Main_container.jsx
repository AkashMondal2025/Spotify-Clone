import React from "react";

function Main_container() {
  return (
    <div className="main-container">
      <div className="sticky-nav-bar">
        <div className="sticky-icon">
          <img src="./backward_icon.png" />
          <img src="./forward_icon.png" />
        </div>
        {/* <div className="sticky-badge">
          <button className="Badge">Explore Premium</button>
          <button
            className="Badge"
            style={{ marginTop: "0", backgroundColor: "#000", color: "#fff" }}
          >
            <i
              className="fa-regular fa-circle-down"
              style={{ marginRight: "6px" }}
            ></i>
            Install App
          </button>
          <i className="fa-regular fa-user"></i>
        </div> */}
      </div>
      <div className="cards">
        <div className="cards-row">
          <div className="card">
            <img src="./card1img.jpeg" />
          </div>
        </div>
        <div className="cards-row">
          <div className="card">
            <img src="./card2img.jpeg" />
          </div>
          <div className="card">
            <img src="./card3img.jpeg" />
          </div>
          <div className="card">
            <img src="./card4img.jpeg" />
          </div>
          <div className="card">
            <img src="./card5img.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_container;
