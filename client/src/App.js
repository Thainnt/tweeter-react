import './App.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';
import useAppData from './hooks/useAppData';

function App() {
  const { tweets, users, refreshTweets, refreshUsers, user, updateUser, userMenu, userLogin, userRegister, userProfile, toggleTweetForm, setToggleTweetForm } = useAppData();

  return (
    <div className="App">
      <Navigation setToggleTweetForm={setToggleTweetForm}/>
      { userMenu === 'profile' ? <Profile user={user} updateUser={updateUser} userLogin={userLogin} userRegister={userRegister} /> : null }
      { userMenu === 'login' ? <UserLogin updateUser={updateUser} userProfile={userProfile} /> : null }
      { userMenu === 'register' ? <UserRegister updateUser={updateUser} userProfile={userProfile} refreshUsers={refreshUsers}/> : null }
      <main className="container">
        {toggleTweetForm && <TweetForm refreshTweets={refreshTweets} user={user} />
        }
        <TweetList 
          tweets={tweets}
          users={users}
        />
        <div className="round-btn">
          <i className="round-btn__icon fas fa-angle-double-up"></i>
        </div>
      </main>
    </div>
  );
}

export default App;