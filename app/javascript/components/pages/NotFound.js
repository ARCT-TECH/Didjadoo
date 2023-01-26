import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="video-wrapper">
        <video playsInline autoPlay muted loop>
          <source
            src="https://joy1.videvo.net/videvo_files/video/free/2020-05/large_watermarked/3d_ocean_1590675653_preview.mp4"
            type="video/mp4"
          />
        </video>
        <div className="notfound">
          Looks like you are lost at sea! Click here to join the other{" "}
          <NavLink to="/YourFriends">Didjadooers</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
