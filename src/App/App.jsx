import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("saved-feedback");
    return JSON.parse(savedFeedback) ?? { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <div>
        <Description></Description>
      </div>
      <div>
        <Options
          onUpdate={updateFeedback}
          totalFeedback={totalFeedback}
          onReset={resetFeedback}
        ></Options>
      </div>
      <div>
        {totalFeedback > 0 ? (
          <Feedback
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positive={positiveFeedback}
          ></Feedback>
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}
