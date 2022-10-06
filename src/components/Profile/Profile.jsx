import PropTypes from 'prop-types';
import css  from './Profile.module.css';

export const Profile = ({ avatar, username, tag, location, stats}) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                src={avatar}
                alt={username}
                className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <Stats stats={stats} />
        </div>
    )
}

const Stats = ({ stats: {followers, views, likes} }) => {
    return (
        <ul className={css.stats}>
            <li>
            <span className={css.label}>Followers </span>
            <span className={css.quantity}>{ followers }</span>
            </li>
            <li>
            <span className={css.label}>Views </span>
            <span className={css.quantity}>{ views }</span>
            </li>
            <li>
            <span className={css.label}>Likes </span>
            <span className={css.quantity}>{ likes }</span>
            </li>
        </ul>
    )
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}

Stats.protoTypes = {
    stats: PropTypes.objectOf(
        PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }),
    )
}