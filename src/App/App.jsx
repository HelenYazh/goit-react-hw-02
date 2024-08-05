import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    console.log(feedbackType);
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  return (
    <>
      <div>
        <Description></Description>
      </div>
      <div>
        <Options onUpdate={updateFeedback} option="good">
          Good
        </Options>
        <Options onUpdate={updateFeedback} option="neutral">
          Neutral
        </Options>
        <Options onUpdate={updateFeedback} option="bad">
          Bad
        </Options>
      </div>
      <div>
        {totalFeedback > 0 ? (
          <Feedback
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
          ></Feedback>
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}
