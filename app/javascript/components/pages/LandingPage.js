import React from "react"
import { Button } from "reactstrap"
import YourFriends from "./YourFriends"

const LandingPage = ({logged_in, current_user, new_user_route, sign_in_route, sign_out_route }) => {
  console.log("Logged In:", logged_in) 
  console.log("Current User:", current_user) 
  console.log("New User: ",new_user_route) 
  console.log("Sign In", sign_in_route)
  console.log("Sign Out:", sign_out_route);
  return (
 <>
  {!logged_in &&
  <>
  <div>Didjadoo</div>
  <div className="landing-page-main">
    Are you meeting your New Year's Resolution goals? Didjadoo helps you track your goals and provides motivation and accountability along the way. Your friends can cheer you on as you complete tasks related to achieving your goals! 
  </div>
  
  <div className='home-buttons'>
    <a href={sign_in_route}><Button variant='secondary'>Sign In </Button></a>
    <a href={new_user_route}><Button variant='secondary'>Sign Up </Button></a>
  </div>
  </>
  }

    <div className="home-main">
   {logged_in && <YourFriends /> }
   </div>
    </>
  
  )
}





export default LandingPage;