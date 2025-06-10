// import Product from "./Product";
// import Card from "./Mailbox";
// import Alert from "./Mailbox";
// import Profile from "./Profile";
// import userData from "../userData.json";


import { useState } from "react";
import { ConstupDateFeedback } from "./Options/Options";
import { Feedback } from "./Feedback/Feedback";

      
// import FriendList from "./FriendList/FriendList";
// import {  ClickCounter  } from "./submitBtn";



export default function App () {
  const [click, setClick] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const total = click.good + click.neutral + click.neutral;

  return (
    <>     
      <ConstupDateFeedback click={click} setClick={setClick} total={total} />
      {total > 0 ? (<Feedback click={click} total={total} />): (<p className="text-center text-gray-500 text-lg p-5">No feedback yet</p>)}   

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



