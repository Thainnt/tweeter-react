import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function useAppData() {
  // const [state, setState] = useState( {
  //   tweets:[],
  //   users:[]
  // });
  const currentUser = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : {};
  const [ tweets, setTweets ] = useState([]);
  const [ users, setUsers ] = useState([]);
  const [ user, setUser ] = useState(currentUser);
  const [ userMenu, setUserMenu ] = useState('profile');
  const [ toggleTweetForm, setToggleTweetForm] = useState(true);

  const refreshTweets = () => {
    axios.get('/tweets')
      .then(response => {
        setTweets(response.data);
      })
      .catch(err => {
        console.error(err);
    });
  };

  const refreshUsers = () => {
    axios.get('/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const updateUser = () => {
    return Cookies.get('user') ? setUser(JSON.parse(Cookies.get('user'))) : setUser({});
  };

  const userLogin = () => {
    setUserMenu('login');
  }

  const userRegister = () => {
    setUserMenu('register');
  }

  const userProfile = () => {
    setUserMenu('profile');
  }

  useEffect(() => {
    refreshUsers();
    refreshTweets();
  },[]);

  // useEffect(() => {

  //   Promise.all([
  //     axios.get('/tweets'),
  //     axios.get('/users')
  //   ])
  //     .then(res => {
  //     setState({...state, tweets:res[0].data, users:res[1].data});
  //     })
  //     .catch(err => {
  //       console.error(err);
  //   });

  // },[]);

  return { tweets, users, refreshTweets, refreshUsers, user, updateUser, userMenu, userLogin, userRegister, userProfile, toggleTweetForm, setToggleTweetForm };
};