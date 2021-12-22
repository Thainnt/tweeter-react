export default function Navigation() {
  return (
    <nav>
      <span className="nav--text">tweeter</span>

      <div className="btn btn--scroll">
        <a href="#" className="btn__text btn--borderless" title="Compose Tweet">
          {/* Compose new tweet button  */}
          <span className="btn--bold">Write</span> a new tweet
          <br />
          <i className="btn__icon fas fa-angle-double-down"></i>
        </a>
      </div>

    </nav>
  );
};