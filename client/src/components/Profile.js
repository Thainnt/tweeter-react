export default function Profile() {
  return (
    <aside>
      <div className="profile">
        <img className="profile__image" alt ="profile" src="./profile-hex.png" />
      </div>
      <br />
      <div className="profile__name">
        <h2><span className="profile--bold">Amy</span> Mansell</h2>
      </div>
    </aside>
  );
};