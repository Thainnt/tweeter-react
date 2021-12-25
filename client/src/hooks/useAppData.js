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
  const [ toggleMenu, setToggleMenu ] = useState(false);

  const refreshTweets = () => {
    axios.get('/tweets')
      .then(response => {
        setTweets(response.data);
      });
  };

  const updateUser = () => {
    setUser(JSON.parse(Cookies.get('user')));
  };

  const showUserAuth = () => {
    setToggleMenu(!toggleMenu);
  }

  useEffect(() => {

    axios.get('/users')
      .then(res => {
      setUsers(res.data);
      })
      .catch(err => {
        console.error(err);
    });

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

  return { tweets, users, refreshTweets, user, updateUser, toggleMenu, showUserAuth };
};