
export default function Profile(props) {
  const { user } = props;

  return (
    <aside>
      <div className="profile">
        <img className="profile__image" alt ="profile" src={user.avatar || "./profile-hex.png"} />
      </div>
      <br />
      <div className="profile__name">
        <h2><span className="profile--bold">{user.name || 'guest'}</span></h2>
      </div>
      <div className="user--auth">
        <i class="fas fa-user-plus"></i>
        <i class="fas fa-sign-in-alt"></i>
        <i class="fas fa-sign-out-alt"></i>
        <i class="fas fa-cog"></i>
      </div>
    </aside>
  );
};