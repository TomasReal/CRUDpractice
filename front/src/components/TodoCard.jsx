import React from 'react';
import { Card, CardBody, Text } from '@chakra-ui/react';
import './TodoCard.css';

const TodoCard = ({ todo }) => {
    return (
        <Card className="card">
            <CardBody>
                <Text fontSize="xl" fontWeight="bold">
                    {todo.title}
                </Text>
                <Text>{todo.description || 'No description provided'}</Text>
            </CardBody>
        </Card>
    );
};

export default TodoCard;
