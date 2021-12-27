export default function Navigation(props) {
  const {setToggleTweetForm} = props;

  return (
    <nav>
      <span className="nav--text">tweeter</span>

      <div className="btn btn--scroll" onClick={() => setToggleTweetForm(prev=> !prev)}>
        <span className="btn__text btn--borderless" title="Compose Tweet">
          {/* Compose new tweet button  */}
          <span className="btn--bold">Write</span> a new tweet
          <br />
          <i className="btn__icon fas fa-angle-double-down"></i>
        </span>
      </div>

    </nav>
  );
};