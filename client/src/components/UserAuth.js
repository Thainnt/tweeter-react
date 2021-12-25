import axios from "axios";
import Cookies from "js-cookie";

export default function UserAuth(props) {

  const { updateUser, showUserAuth } = props;

  const handleRegister = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    for (const val of formData.entries()) {
      data[val[0]] = val[1];
    }
    console.log(data);
    axios.post('/register', data)
      .then(res => {
        const user = res.data;
        Cookies.set('user', JSON.stringify(user));
        document.getElementById('form__register').reset();
        updateUser();
      })
      .catch(err => {
        console.log('can not sign up with error: ',err.response.data);
      });
  };

  const handleLogIn = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    for (const val of formData.entries()) {
      data[val[0]] = val[1];
    }
    axios.post('/login', data)
      .then(res => {
        const user = res.data;
        Cookies.set('user', JSON.stringify(user));
        document.getElementById('form__login').reset();
        updateUser();
        showUserAuth();
      })
      .catch(err => {
        console.log('can not log in with error: ',err.response.data);
      });
  };

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
            placeholder="a nice picture here"
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
        <input type="submit" value="sign up" className="form__input" />
        <input type="button" value="cancel" className="form__input" onClick={showUserAuth}/>
      </form>
      <form id="form__login" onSubmit={handleLogIn}>
        <label>Log in</label>
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
        <input type="submit" value="log in" className="form__input"/>
        <input type="button" value="cancel" className="form__input" onClick={showUserAuth}/>
      </form>
    </aside>
  );
};