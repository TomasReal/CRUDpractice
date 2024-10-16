import axios from 'axios';

const API_URL = 'http://localhost:3000/todos';

const getAllTodos = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching ToDos', error);
        return [];
    }
};

export default {
    getAllTodos,
};
