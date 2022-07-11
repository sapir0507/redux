import axios from 'axios';
import { URL } from './env';

const url = URL + 'todos/';

const getTodos = () => {
    return axios.get(url);
}

const getTodoById = async(id) => {
    const todo = await axios.get(url);
    const data = todo.data;
    return data.filter(todo=>todo.userId===id)
}


const todosUtil = {
    getTodoById,
    getTodos
}

export default todosUtil;