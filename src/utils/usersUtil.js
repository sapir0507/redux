import axios from 'axios';
import { URL } from './env';

const url = URL + 'users/';

const getUsers = () => {
    return axios.get(url);
}

const getUserById = async(id) => {
    const users = await axios.get(url);
    const data = users.data;
    return data.filter(user=>user.id===id)
}

const getUserData = async(id) => {
   const user = getUserById(id);
   return {
    id: user.id,
    name: user.name,
    email: user.email,
    address: user.address
   }
}

const usersUtil = {
    getUserById,
    getUserData,
    getUsers
}

export default usersUtil;