import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import PropTypes from 'prop-types';
import css  from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title ? <h2 className={css.title}>Upload stats</h2> : false}

            <ul className={css.statList} id="statList">
                {stats.map(stat => (
                    <li className={css.item} key={stat.id}>
                        <span className={css.label}>{stat.label} </span>
                        <span className={css.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
    </section>
    );
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number.isRequired,
        }),
    )
}
