import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAppData() {
  const [state, setState] = useState( {
    tweets:[],
    users:[]
  });
  useEffect(() => {
    
    Promise.all([
      axios.get('/tweets'),
      axios.get('/users')
    ])
    .then(res => {
      setState({...state, tweets:res[0].data, users:res[1].data});
    });

  },[]);

  return { state };
};