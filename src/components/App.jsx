// import Product from "./Product";
// import Card from "./Mailbox";
// import Alert from "./Mailbox";
// import Profile from "./Profile";
// import userData from "../userData.json";


import { useEffect, useState } from "react";
import { Options } from "./Options/Options";
import { Feedback } from "./Feedback/Feedback";

      
// import FriendList from "./FriendList/FriendList";
// import {  ClickCounter  } from "./submitBtn";

export const initFeedback = {
  good: 0,
  neutral: 0,
  bad: 0
}

export default function App () {
  const [click, setClick] = useState(() => {
    const feedbackStorage = JSON.parse(window.localStorage.getItem("feedback"))
    return feedbackStorage ?? initFeedback;
  });
  console.log(initFeedback);
  const total = click.good + click.neutral + click.bad; 

  useEffect(() => {  
    window.localStorage.setItem('feedback', JSON.stringify(click))   
  }, [click]);

 

  

  return (
    <>     
      <Options  setClick={setClick} total={total}/>
      {total > 0 ? (<Feedback click={click} total={total} />) : (<p className="text-center text-gray-500 text-lg p-5">No feedback yet</p>)}   

      {/* <FriendList friends={friends} /> */}
      {/* <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}
    </>
  );
}



