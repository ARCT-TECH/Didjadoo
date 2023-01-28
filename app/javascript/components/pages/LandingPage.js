import React from "react";
import { Button, UncontrolledCarousel } from "reactstrap";
import YourFriends from "./YourFriends";
import didjatest from "../../../assets/images/didjatest.png";
import UncontrolledExample from "./UncontrolledExample";

const LandingPage = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
  users,
}) => {
  return (
    <>
      {!logged_in && (
        <>   
          <div className="video-wrapper">
           <video playsInline autoPlay muted loop>
          <source
           src="https://vod-progressive.akamaized.net/exp=1674876191~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2851%2F11%2F289258217%2F1094756916.mp4~hmac=7607cfb210da905ca734cb554c230fd75006b0f24d154bd00040d314060abe98/vimeo-prod-skyfire-std-us/01/2851/11/289258217/1094756916.mp4?download=1&filename=Pexels+Videos+1409899.mp4"
           type="video/mp4"
          />
        </video>

      
             <div className="landing-page-main">
              <p>Have you ever completed a New Year's Resolution goal? 🤔</p> 
              <p>If not, Didjadoo is the app for YOU! Didjadoo helps you
                track your goals and provides motivation and accountability along
                the way. Your friends can cheer you on as you complete tasks related
                to achieving your goals!</p>
                <div className="home-buttons">
                    <a href={new_user_route}>
                  <Button variant="secondary">Join For Free!</Button>
                    </a>
                </div>
            </div>
        { /* div below holds the entire carousel, best manipulated with margins and or padding. Want to manipulate the entire contianer of the carousel not just pictures  */ }
        {/* <div className="img">
            <UncontrolledExample />
        </div> */}
        </div>
        </>
    
      )}

      <div className="home-main">
        {logged_in && <YourFriends users={users} />}
      </div>
    </>
  );
};

export default LandingPage;