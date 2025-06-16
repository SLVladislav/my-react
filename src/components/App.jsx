// import Product from "./Product";
// import Card from "./Mailbox";
// import Alert from "./Mailbox";
// import Profile from "./Profile";
// import userData from "../userData.json";
// import phoneBooks from "../phoneBooks"

import { useState } from "react";
import { FeedbackForm } from "./FeedbackForm/FeedbackForm";
import { AppPhoneBook } from "./Phonebook/AppPhoneBook/AppPhoneBook";
import { HttpState } from "./HTTPHooks/HttpHooks";
import { ArrayList } from "./HTTPHooks/UseMemo";
import { UseFerence } from "./HTTPHooks/UseRef";
// import { LandSwitcher } from "./LandSwitcher/LandSwitcher";
// import { LoginForm } from "./LoginForm/LoginForm";
// import { LoginForm } from "./SearchBar/SearchBar";


// import { useEffect, useState } from "react";
// import { Options } from "./Options/Options";
// import { Feedback } from "./Feedback/Feedback";

      
// import FriendList from "./FriendList/FriendList";
// import {  ClickCounter  } from "./submitBtn";

// export const initFeedback = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }



export default function App() {
  // const [arrayBooks, setArrayBooks] = useState(phoneBooks);
  // const [click, setClick] = useState(() => {
  //   const feedbackStorage = JSON.parse(window.localStorage.getItem("feedback"))
  //   return feedbackStorage ?? initFeedback;
  // });
  // console.log(initFeedback);
  // const total = click.good + click.neutral + click.bad;

  // useEffect(() => {
  //   window.localStorage.setItem('feedback', JSON.stringify(click))
  // }, [click]);

  // const handleLogin = (userData) => {
  //   console.log(userData);
    
  // }
  // const [lang, setLang] = useState("uk");

  // const [coffeeSize, setCoffeeSize] = useState("sm");

  // const handleSizeChange = (evt) => {
  //   // console.log(evt.target.value);
    
  //   setCoffeeSize(evt.target.value)
  // }
  // const [hasAccepted, setHasAceepted] = useState(false);

  // const handleChange = (evt) => {
  //   console.log(evt.target.checked);
    
  //   setHasAceepted(evt.target.checked)
  // };
 

  

  return (
    <>     
      <UseFerence />
      {/* <FeedbackForm/> */}
      {/* <LoginForm/> */}
      {/* <div>
        <label htmlFor="">
          <input type="checkbox" name="terms" checked={ hasAccepted} onChange={handleChange} />
          I accent terms and conditions
        </label>
        <button type="button" disabled={!handleChange}>Proceed</button>
      </div> */}
       {/* <h1>Select coffee size</h1>
      <label>
        <input type="radio" name="coffeeSize" value="sm" checked={coffeeSize === "sm"} onChange={handleSizeChange} />
        Small
      </label>
      <label>
        <input type="radio" name="coffeeSize" value="md" checked={coffeeSize === "md"} onChange={handleSizeChange} />
        Meduim
      </label>
      <label>
        <input type="radio" name="coffeeSize" value="lg" checked={coffeeSize === "lg"} onChange={handleSizeChange}/>
        Large
      </label> */}
      {/* <LoginForm onLogin={handleLogin} /> */}
      {/* <SearchBar />
      <p>Selected language: {lang}</p>
      <LandSwitcher/> */}
      {/* <Options  setClick={setClick} total={total}/> */}
      {/* {total > 0 ? (<Feedback click={click} total={total} />) : (<p className="text-center text-gray-500 text-lg p-5">No feedback yet</p>)}    */}

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



