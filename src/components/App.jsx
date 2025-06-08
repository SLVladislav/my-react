// import Product from "./Product";
// import Card from "./Mailbox";
// import Alert from "./Mailbox";
// import Profile from "./Profile";
// import userData from "../userData.json";
      
import FriendList from "./FriendList";
const friends = [
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
    name: "Mango",
    isOnline: true,
    id: 1812
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/616/616438.png",
    name: "Kiwi",
    isOnline: false,
    id: 1137
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
    name: "Ajax",
    isOnline: true,
    id: 1213
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
    name: "Jay",
    isOnline: true,
    id: 1714
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
    name: "Poly",
    isOnline: false,
    id: 1284
  }
];


export default function App() {
  // const user = userData[0];
  return (
    <>
      <FriendList friends={friends} />
      {/* <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}
      {/* <h1>Best selling</h1> */}
      {/* <h1>Books of the week</h1> */}
      {/* <Alert variant="info">Please update your email!</Alert>
      <Alert variant="error">There was an error during transaction!</Alert>
      <Alert variant="success">Payment received, thank you for your purchase!</Alert>
      <Alert variant="warning">Payment received, thank you for your purchase!</Alert> */}      
      {/* <Product
        name="Tacos Wiht Line"
        // imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      /> */}
      {/* <Card>
      <h1>Card title</h1>
      <p>Text between opening and closing tag</p>
      </Card> */}

    </>
  );
}



