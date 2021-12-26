import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

export default function UserRegister(props) {

  const { updateUser, userProfile, refreshUsers } = props;

  const handleRegister = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    for (const val of formData.entries()) {
      data[val[0]] = val[1];
    }
    axios.post('/register', data)
      .then(res => {
        const user = res.data;
        Cookies.set('user', JSON.stringify(user));
        document.getElementById('form__register').reset();
        updateUser();
        userProfile();
        refreshUsers();
      })
      .catch(err => {
        console.log('can not sign up with error: ',err);
      });
  };

  const [ ava, setAva ] = useState('');

  const avatarSet = ["https://i.imgur.com/nlhLi3I.png","https://i.imgur.com/z5LNkkB.png","https://i.imgur.com/v0JXau2.png","https://i.imgur.com/lRUnDgU.png", "https://i.imgur.com/3GvwNBf.png", "https://i.imgur.com/73hZDYK.png","https://i.imgur.com/5fUVPRP.png","https://i.imgur.com/DVpDmdR.png","https://i.imgur.com/2WZtOD6.png", "https://i.imgur.com/ilT4JDe.png"];

  const handleClick = (event) => {
    event.preventDefault();
    setAva(event.target.src);
  };

  const avatarSelection = avatarSet.map((link, index) =>
    <img className="profile__image--select"
      key={index}
      alt="img"
      src={link}
      onClick={handleClick}
    />
  );

  return (
    <aside>
      <form id="form__register" onSubmit={handleRegister}>
        <label>Sign up</label>
        <div className="form__userline">
          <label>name:</label>
          <input
            className="form__userinput"
            type="text"
            id="name"
            name="name"
            placeholder="yours?"
            required
          />
        </div>
        <div className="form__userline">
          <label>handle:</label>
          <input
            className="form__userinput"
            type="text"
            id="handle"
            name="handle"
            placeholder="your name of choice"
            required
          />
        </div>
        <div className="form__userline">
          <label>avatar:</label>
          <input
            className="form__userinput"
            type="text"
            id="avatar"
            name="avatar"
            value={ava}
            onChange={handleClick}
            placeholder="select below"
            required
          />
        </div>
        <div className="form__userline">
          <label>email:</label>
          <input
            className="form__userinput"
            type="text"
            id="email"
            name="email"
            placeholder="your@email.address"
            required
          />
        </div>
        <div className="form__userline">
          <label>password:</label>
          <input
            className="form__userinput"
            type="text"
            id="password"
            name="password"
            placeholder="some secret pass phases?"
            required
          />
        </div>
        <div className="avatar-samples">
          {avatarSelection}
        </div>
        <input type="submit" value="sign up" className="form__input" />
        <input type="button" value="cancel" className="form__input" onClick={userProfile}/>
      </form>
    </aside>
  );
};