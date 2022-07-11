import axios from 'axios';
import { URL } from './env';

const url = URL + 'posts/';

const getPosts = () => {
    return axios.get(url);
}

const getPostsById = async(id) => {
    const post = await axios.get(url);
    const data = post.data;
    return data.filter(post=>post.UserId===id)
}


const todosUtil = {
    getPostsById,
    getPosts
}

export default todosUtil;