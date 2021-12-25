import axios from "axios";
import Cookies from "js-cookie";

export default function UserAuth() {

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
        console.log(Cookies.get('user'));
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
    console.log(data);
    axios.post('/login', data)
      .then(res => {
        const user = res.data;
        Cookies.set('user', JSON.stringify(user));
        console.log(Cookies.get('user'));
      })
      .catch(err => {
        console.log('can not log in with error: ',err.response.data);
      });
  };


  return (
    <aside>
      <div className="user--auth">
        <i class="fas fa-user-plus"></i>
        <i class="fas fa-sign-in-alt"></i>
        <i class="fas fa-sign-out-alt"></i>
        <i class="fas fa-cog"></i>
      </div>
      <form className="register" onSubmit={handleRegister}>
        <label>Sign up</label>
        <div className="form__userline">
          <label for="name">name:</label>
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
          <label for="handle">handle:</label>
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
          <label for="avatar">avatar:</label>
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
          <label for="email">email:</label>
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
          <label for="password">password:</label>
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
      </form>
      <form className="register" onSubmit={handleLogIn}>
        <label>Log in</label>
        <div className="form__userline">
          <label for="email">email:</label>
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
          <label for="password">password:</label>
          <input
            className="form__userinput"
            type="text"
            id="password"
            name="password"
            placeholder="some secret pass phases?"
            required
          />
        </div>
        <input type="submit" value="log in" className="form__input" />
      </form>
    </aside>
  );
};