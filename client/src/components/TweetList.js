import Tweet from "./Tweet";

export default function TweetList(props) {
  const {tweets, users} = props;

  const tweetList = tweets.map((tweet) => {
    const owner = users.find(user => user.id === tweet.user_id);
    return (
      <Tweet
        key={tweet.id}
        name={owner.name}
        handle={owner.handle}
        avatar={owner.avatar}
        content={tweet.content}
        created_at={tweet.created_at}
      />
    );
  });
  return (
    <section class="tweets">
      {tweetList}
    </section>
  );
}