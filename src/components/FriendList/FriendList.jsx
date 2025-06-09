import Profile from "../Profile/Profile";


export default function FriendList({friends}) {
    return (
        <ul className="flex flex-wrap gap-4 justify-center p-4 bg-gray-100 rounded-xl">
        {friends.map((friend) => (
          <li
            key={friend.id}
            className="w-full sm:w-64 md:w-60 lg:w-56"
          >
            <Profile
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    );
};