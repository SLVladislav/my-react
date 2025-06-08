// export default function Mailbox ({ name, messages }) {
//     return (
//       <>
//         <p>Hello {name}</p>
//         {messages.length > 0 && (
//           <p>You have {messages.length} unread messages</p>
//         )}
//       </>
//     );
//   };
  
//   function Mailbox ({ name, unreadMessages }) {
//     return (
//       <>
//         <p>Hello {name}</p>
//         <p>
//           {unreadMessages.length > 0 ? `You have ${unreadMessages.length} unread message` : "No unread messages"}
//         </p>
//       </>
//     );
// };
  
// const Mailbox = ({ username, messages }) => {
//   return (
//     <div>
//       <p>Hello {username}</p>
//       {messages.length > 0 ? (
//         <div>
//           <p>You have {messages.length} unread messages</p>
//           <MessageList messages={messages} />
//         </div>
//       ) : (
//         <p>No unread messages</p>
//       )}
//     </div>
//   );
// };

//  export const favBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" }
// ];

// export const favBooks = [
//   { name: "JS for beginners" },
//   { name: "React basics" },
//   { name: "React Router overview" }
// ];

// export default function BookList ({books}) {
//   return (
//     <ul>
//       {books.map((book, index) => {
//         return <li key={index}>{book.name}</li>
//       })}
//     </ul>
//   )
// };
//  const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   backgroundColor: "gray",
//   color: "white",
// };

// const getBgColor = variant => {
//   switch (variant) {
//     case "info":
//       return "blue";
//     case "success":
//       return "green";
//     case "error":
//       return "red";
//     case "warning":
//       return "orange";
  
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
      
//   }
// };
// import "../components/App.css";


// export default function Alert({ children, variant, outlined, elevated }) {
//   const classNames = ["alert", variant];
//   if (outlined) {
//     classNames.push("is-outlined")
//   }
//   if (elevated) {
//     classNames.push("is-elevated")
//   }
//   return (
//     <p className={classNames.join(" ")}>{children}</p>
//   )
// };