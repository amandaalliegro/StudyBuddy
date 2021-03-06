import {
  useEffect,
  useReducer
} from 'react';

import dataReducer, { SET_USERS } from '../reducers/dataReducer';

import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    loading: true,
    //contain list of chat messages 
    messages: []
  });
  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/users',
    })
      .then(({
        data
      }) => {
        dispatch({
          type: SET_USERS,
          users: data
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    dispatch,
  };
};

export default useApplicationData;