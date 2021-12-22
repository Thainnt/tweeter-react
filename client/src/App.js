import './App.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';
import useAppData from './hooks/useAppData';

function App() {
  const { state } = useAppData();
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
        <TweetForm />
        <TweetList tweets={state.tweets} users={state.users}/>
        <div className="round-btn">
          <i className="round-btn__icon fas fa-angle-double-up"></i>
        </div>
      </main>
    </div>
  );
}

export default App;