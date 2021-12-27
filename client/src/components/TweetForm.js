import axios from "axios";
import { useState } from "react";

export default function TweetForm(props) {

  const { refreshTweets, user } = props;

  const [content, setContent] = useState('');
  const [counter, setCounter] = useState(140);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event => {
    event.preventDefault();
    const goodTweet = counter >= 0 && counter < 140;

    setShowError(true);

    if (user.id && goodTweet) {
      axios.post('/tweets', {
        user_id: user.id,
        content: content
      }).then(res => {
        refreshTweets();
      }).catch(err => {
        console.log('can not tweet with error: ',err.response.data);
      });
      reset();
    }
    
    if (!user.id) {
      alert('Please login/register to tweet');
    }
  });

  const handleInput = (event => {
    event.preventDefault();

    setContent(event.target.value);
    setCounter(140 - content.length);
  });

  const reset = () => {
    setContent('');
    setCounter(140);
    setShowError(false);
  };

  return (
    <section className="newtweet">
      <form
        className="newtweet__form"
        onSubmit={handleSubmit}
        >
        {(counter < 0 && showError) && 
        <div>
          <i className="fa fa-exclamation-triangle"></i>
          <span className="error-message">Oop, you are humming too long, let's make it shorter</span>
          </div>}
        {(counter === 140 && showError) &&
        <div>
          <i className="fa fa-exclamation-triangle"></i>
          <span className="error-message">Uhmmm, I can not hear you, let tweet something</span>
        </div>}
        <textarea
          autoFocus
          value={content}
          onChange={handleInput}
          className="form__textarea"
          name="text"
          placeholder="What are you humming about?"
        />
        <input type="submit" value="Tweet" className="form__input" />
        <span className={"form__counter" + (counter < 0 ? "--red" : "")}>{counter}</span>
      </form>
    </section>
  );
};