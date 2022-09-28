import React from "react";
import "./VideoFooter.css";
import ReactTypingEffect from "react-typing-effect";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <ReactTypingEffect
            className="ticker"
            text={[
              "Home of All Trending Dances.",
              "Latest music in real time.",
            ]}
          />
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://seeklogo.com/images/B/bmw-flat-logo-89716C05E6-seeklogo.com.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
