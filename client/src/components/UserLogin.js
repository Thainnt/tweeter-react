import axios from "axios";
import Cookies from "js-cookie";

export default function UserLogin(props) {

  const { updateUser, userProfile } = props;

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
        userProfile();
      })
      .catch(err => {
        console.log('can not log in with error: ',err.response.data);
      });
  };

  return (
    <aside>
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
        <input type="button" value="cancel" className="form__input" onClick={userProfile}/>
      </form>
    </aside>
  );
};