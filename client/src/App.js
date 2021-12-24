import './App.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';
import UserAuth from './components/UserAuth';
import useAppData from './hooks/useAppData';

function App() {
  const { tweets, users, refreshTweets } = useAppData();
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <UserAuth />
      <main className="container">
        <TweetForm refreshTweets={refreshTweets} />
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