import Cookies from "js-cookie";

export default function Profile() {
  const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : {};

  console.log(user);
  return (
    <aside>
      <div className="profile">
        <img className="profile__image" alt ="profile" src={user.avatar || "./profile-hex.png"} />
      </div>
      <br />
      <div className="profile__name">
        <h2><span className="profile--bold">{user.name || 'guest'}</span></h2>
      </div>
    </aside>
  );
};