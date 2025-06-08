import Profile from "./Profile";


export default function FriendList({friends}) {
    return (
        <ul>
            {friends.map((friend) => {
                return (<li key={friend.id} >
                    <Profile
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>);
            })}

        </ul>
    );
};