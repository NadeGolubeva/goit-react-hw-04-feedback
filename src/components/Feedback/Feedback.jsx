import PropTypes from 'prop-types';
import css from './Feedback.module.css'
export const Feedback = ({options, onUpdateFeedback }) => {
    
  return (
    <div className={css.Container}>
  
       <div className="Counter__controls">
   
        {options.map((name, i) => {
           return (
             <button className={css.Button}
               key={i + 1}
               type="button"
               onClick={() => { onUpdateFeedback(name) }}
             >
      {name}
        </button>
      );
           })}

  </div>
      </div>

    )}


Feedback.propTypes = {
      options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])) //масив, що містить назви елементів статистики
    .isRequired,
  onUpdateFeedback: PropTypes.func.isRequired,
    }