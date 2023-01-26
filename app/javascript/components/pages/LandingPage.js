import React from "react";
import { Button, UncontrolledCarousel } from "reactstrap";
import YourFriends from "./YourFriends";
import "./LandingPage.css";
import didjatest from "../../../assets/images/didjatest.png";
import kangaroo from "../../../assets/images/kangaroo.png"
import UncontrolledExample from "./UncontrolledExample";




const LandingPage = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
  users,
}) => {
  console.log("Logged In:", logged_in);
  console.log("Current User:", current_user);
  console.log("New User: ", new_user_route);
  console.log("Sign In", sign_in_route);
  console.log("Sign Out:", sign_out_route);
  return (
    <>
      {!logged_in && (
        <>   
          <div className="video-wrapper">
           <video playsInline autoPlay muted loop>
          <source
           src="https://vod-progressive.akamaized.net/exp=1674757737~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2851%2F11%2F289258217%2F1094756916.mp4~hmac=23abc9c7b32d3fe1dee738ea0e89efab0cbe0a9f3823404688b1107c2cfa3748/vimeo-prod-skyfire-std-us/01/2851/11/289258217/1094756916.mp4?download=1&filename=Pexels+Videos+1409899.mp4"
           type="video/mp4"
          />
        </video>

      
             <div className="landing-page-main">
              <p>Are you meeting your New Year's Resolution goals?</p> 
              <p>Didjadoo helps you
                track your goals and provides motivation and accountability along
                the way. Your friends can cheer you on as you complete tasks related
                to achieving your goals!</p>
                <div className="home-buttons">
                    <a href={new_user_route}>
                  <Button variant="secondary">Join For Free!</Button>
                    </a>
                </div>
            </div>
        </div>
          <img  
              alt="didjatest"
              className="didjatest"
              src={didjatest}
            />
            <UncontrolledExample />
        
        </>
    
      )}

      <div className="home-main">
        {logged_in && <YourFriends users={users} />}
      </div>
    </>
  );
};

export default LandingPage;