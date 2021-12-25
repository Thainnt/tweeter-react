import axios from "axios";
import Cookies from "js-cookie";

export default function Profile(props) {
  const { user, updateUser, showUserAuth } = props;

  const handleLogOut = (event) => {
    event.preventDefault();
    Cookies.remove('user');
    axios.post('/logout')
      .then(res =>{
        updateUser();
      })
  };

  return (
    <aside>
      <div className="profile">
        <img className="profile__image" alt ="profile" src={user.avatar || "./profile-hex.png"} />
      </div>
      <br />
      <div className="profile__name">
        <h2><span className="profile--bold">{user.name || 'guest'}</span></h2>
      </div>
      { user.id ? 
        (<div className="user--auth">
          <i className="fas fa-sign-out-alt" onClick={handleLogOut}></i>
          <i className="fas fa-cog"></i>
        </div>) : 
        (<div className="user--auth">
          <i className="fas fa-user-plus" onClick={showUserAuth}></i>
          <i className="fas fa-sign-in-alt" onClick={showUserAuth}></i>
        </div>)
      }
    </aside>
  );
};