import React from 'react';
import { useQuery } from 'convex/react';
import { api } from '../api';

function MyComponent() {
    const tasks = useQuery(api.getTasks);

    return (
        <div>
            {tasks && tasks.map(task => (
                <div key={task.id}>{task.text}</div>
            ))}
        </div>
    );
}

export default MyComponent;