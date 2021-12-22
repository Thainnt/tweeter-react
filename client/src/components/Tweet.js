export default function Tweet(props) {
  const { content, name, handle, avatar, created_at } = props;
  return (
    <article className="tweet">
      <header className="tweet--header">
        <img className="tweet--avatar" alt="" src={avatar} />
        <h2 className="tweet--name">{name}</h2>
        <small className="tweet--handle">{handle}</small>
      </header>

      <div className="tweet--body">
        <p>{content}</p>
      </div>

      <footer className="tweet--footer">
        <small className="footer--age">{created_at}<small>
            <span className="footer--actions">
              <a href="#"><i className="fa fa-flag"></i></a>
              <a href="#"><i className="fa fa-retweet"></i></a>
              <a href="#"><i className="fa fa-heart"></i></a>'
            </span>
          </small></small></footer>
    </article>
  );
};