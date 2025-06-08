// export default function Profile({ name, tag, location, avatar, stats}) {
//   const { followers, views, likes } = stats;
//   return (
//     <div>
//       <div className="p-6">
//         <img
//           className="w-24 h-24 mx-auto rounded-full mb-4"
//           src={avatar}
//           alt="User avatar"
//         />
//         <p className="text-xl font-semobold">{name}</p>
//         <p className="text-gray-500">@{tag}</p>
//         <p className="text-gray-500">{location}</p>
//       </div>

//       <ul className="grid grid-cols-3 gap-3 bg-gray-100 border-t text-sm text-gray-700">
//         <li className="col-span grid grid-cols-subgrid p-4 w-0 border-r last:border-r-0">
//           <span className="font-semibold">Followers</span>
//           <span>{followers}</span>
//         </li>
//         <li className="col-span grid grid-cols-subgrid p-4 w-0 border-r last:border-r-0">
//           <span className="font-semibold">Views</span>
//           <span>{views}</span>
//         </li>
//         <li className="col-span grid grid-cols-subgrid p-4 w-0">
//           <span className="font-semibold">Likes</span>
//           <span>{likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
//   };

export default function Profile({avatar, name, isOnline}) {
  return (
    <div className="">
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={`w-3 h-3 rounded-full ${
          isOnline ? "bg-green-500" : "bg-red-400"
        }`}
        title={isOnline ? "Online" : "Offline"}></p>
    </div>
  );
}