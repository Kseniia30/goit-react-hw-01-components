import PropTypes from 'prop-types';
import css from "./Friends.module.css";

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({id, isOnline, avatar, name}) => (
                <li className={css.friendsItem} key={id}>
                    <span className={css.status} style={{backgroundColor: isOnline ? "green" : "red" }}>{isOnline}</span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.friendsName}>{ name}</p>
                </li>
            ))}
        </ul>
    )
}

FriendList.protoTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number.isRequired,
        }),
    )
}