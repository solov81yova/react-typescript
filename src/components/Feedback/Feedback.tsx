import { FeedbackProps } from "./types";

import Button from "components/Button/Button";

import "./styles.css";


function Feedback({
  likes,
  onLike,
  dislikes,
  onDislike,
  resetResults,
}: FeedbackProps) {
  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          <Button name="Like" onClick={onLike} />
          <p className="count">{likes}</p>
        </div>
        <div className="buttonwithcount-container">
          <Button name="Dislike" onClick={onDislike} />
          <p className="count">{dislikes}</p>
        </div>
      </div>
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  );
}

export default Feedback;
