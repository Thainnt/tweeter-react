import axios from "axios";
import { useState } from "react";

export default function TweetForm(props) {

  const { refreshTweets } = props;

  const [content, setContent] = useState('');
  const [counter, setCounter] = useState(140);

  const handleSubmit = (event => {
    event.preventDefault();

    axios.post('/tweets', {
      user_id: 1,
      content: content
    }).then(res => {
      refreshTweets();
    }).catch(err => {
      console.log('can not tweet with error: ',err.response.data);
    });
    reset();
  });

  const handleInput = (event => {
    event.preventDefault();

    setContent(event.target.value);
    setCounter(140 - content.length);
  })

  const reset = () => {
    setContent('');
    setCounter(140);
  };

  return (
    <section className="newtweet">
      <form
        className="newtweet__form"
        onSubmit={handleSubmit}
        >
        <textarea
          value={content}
          onChange={handleInput}
          className="form__textarea"
          name="text"
          placeholder="What are you humming about?"
        />
        <input type="submit" value="Tweet" className="form__input" />
        <span className="form__counter">{counter}</span>
      </form>
    </section>
  );
};