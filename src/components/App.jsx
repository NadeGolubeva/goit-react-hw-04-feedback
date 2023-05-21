import React, { useState } from 'react';
import { Feedback } from './Feedback/Feedback.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { Section } from './Section/Section.jsx';



export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const updateState = opinion => {
    if (opinion === 'good') setGood(prevState => prevState + 1);
    if (opinion === 'neutral') setNeutral(prevState => prevState + 1);
     if (opinion === 'bad') setBad(prevState => prevState + 1);
    }
  
  const totalAmount = () => {
    return  good + neutral + bad
  };

   const positivePercentageCount = () => {
    return Math.floor(
      (
        good /
        (good + neutral + bad)
    )*100 ||0)
  }

  return (
      <div   >
        <Section title="Please Leave feedback">
        <Feedback options={Object.keys({good, neutral, bad})}
          onUpdateFeedback={updateState} >
          </Feedback>
          </Section>
        {totalAmount() === 0 ? (
          <p
          style={{
          paddingLeft: 60,
            }}>
            There is no feedback yet...
          </p>
        ) : (
            <Section title="Statistics">
          <Statistics
            options={Object.keys({good, neutral, bad})}
            statistic={{good, neutral, bad}}
            amount={totalAmount()}
            positiveFeedback={positivePercentageCount}
          >
          </Statistics>
            </Section>
          )}
        
      </div>
    );
}