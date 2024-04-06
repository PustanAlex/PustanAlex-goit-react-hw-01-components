import style from './Profile.module.css'

function Profile({username, tag, location, avatar, stats}){

    return (
        <div className={style.profile}>
            <div className={style.description}>
                <img
                src= {avatar}
                alt="User avatar"
                className={style.avatar}
                />
                <h3 className={style.name}>{username}</h3>
                <p className={style.tag}>@{tag}</p>
                <p className={style.location}>{location}</p>
            </div>

            <ul className={style.stats}>
                <li>
                <span className={style.label}>Followers</span>
                <b className={style.quantity}>{stats.followers}</b>
                </li>
                <li>
                <span className={style.label}>Views</span>
                <b className={style.quantity}>{stats.views}</b>
                </li>
                <li>
                <span className={style.label}>Likes</span>
                <b className={style.quantity}>{stats.likes}</b>
                </li>
            </ul>
        </div>
    )
}

export default Profile;