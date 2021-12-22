import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAppData() {
  // const [state, setState] = useState( {
  //   tweets:[],
  //   users:[]
  // });

  const [ tweets, setTweets ] = useState([]);
  const [ users, setUsers ] = useState([]);

  const refreshTweets = () => {
    axios.get('/tweets')
      .then(response => {
        setTweets(response.data);
      });
  };

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

  return { tweets, users, refreshTweets };
};