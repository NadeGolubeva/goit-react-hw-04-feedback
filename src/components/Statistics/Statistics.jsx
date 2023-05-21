
import PropTypes from 'prop-types';
import css from './Statistics.module.css'
export const Statistics = ({ options, statistic, amount, positiveFeedback}) => {
    return (
        <div className={css.Container}>
             
            {options.map((name, i) => { 
                return (
                    <p className={css.Point} key={i}>
                        {name} : 
                        <span>{statistic[name]}</span>
                    </p>
                )}
            )}
            <p className={css.Point}>
                Total: 
                { amount}
            </p> 
            <p className={css.Point}> Positive feedback: 
                {positiveFeedback()}%</p>           
        </div>

    )
}

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])) //масив, що містить назви елементів статистики
    .isRequired,
  statistic: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  amount: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.func.isRequired, 
};
