import { useState, useEffect } from 'react';
import Todoservice from '../services/Todoservice';
import TodoCard from './TodoCard';
import { SimpleGrid } from '@chakra-ui/react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await Todoservice.getAllTodos();
                setTodos(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching ToDos', error);
            }
        };
        fetchTodos();
    }, []);

    if (loading) return <div>Loading...</div>;
    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
            {todos && todos.length > 0 ? (
                todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
            ) : (
                <div>No todos available</div>
            )}
        </SimpleGrid>
    );
};

export default TodoList;
