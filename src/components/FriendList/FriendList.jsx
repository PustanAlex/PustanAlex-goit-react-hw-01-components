import style from './FriendList.module.css'

function FriendList({friends}) {
    return ( 
        <ul className={style.friendList}>
            {friends.map(friend => (
                <li key={friend.id} className={style.friendListItem}>
                    <span className={style.friendStatus} style={{backgroundColor: friend.isOnline ? 'green' : 'red'}}>{friend.isOnline}</span>
                    <img className={style.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={style.friendName}>{friend.name}</p>
                </li>
            ))}
        </ul>
    )
}

export default FriendList;