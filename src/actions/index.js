import axios from 'axios';
const lame = require('../../lame.js')

const API_KEY = lame.APIkey
export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
console.log('hlwjeflkjwef');

export function fetchPosts() {
  console.log('helloojoj');
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  };
}