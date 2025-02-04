import React from 'react'
import { useState } from 'react';

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState('');
	const handleAddTodo = () => {
		if (!todo) return;
		const newTodo = {
			id: new Date().getTime(),
			content: todo
		}
		setTodos([...todos, newTodo]);
		setTodo('');
	}

	const handleDeleteTodo = (id) => {
		setTodos((todos) => todos.filter((todo) => todo.id != id))
	}
	return (
		<>
			<div className="container">
				<input type="text" placeholder="Add a task" onChange={(e) => setTodo(e.target.value)} value={todo} />
				<button onClick={handleAddTodo}>Add</button>
			<ul className="todos-list">
				{todos.length > 0 && todos ? todos.map((todo, i) => (
					<li key={todo.id} className='todo' >
						<span>{i + 1}. {todo.content}</span>
						<button className="close" onClick={() => handleDeleteTodo(todo.id)}>X</button>
					</li>
				)) : <p className="todo">No todos yet</p>}
			</ul>
			</div>
		</>
	)
}

export default Todo
