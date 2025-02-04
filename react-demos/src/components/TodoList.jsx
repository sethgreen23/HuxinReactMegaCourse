import React, { useState } from 'react'

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");
	const handleTodoChange = (event) => {
		setTodo(event.target.value);
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (todo.trim() === '') return;
		setTodos(prev => [...prev, todo]);
		setTodo('')
	}
	return (
		<div className='max-w-sm'>
			<form onSubmit={handleSubmit} className='mb-4 flex flex-col space-y-3'>
				<label htmlFor="todo" className='font-bold p-2 bg-white '>Todo</label>
				<input className='py-3 px-4 focus:outline-none border border-violet-400 rounded rounded-lg' type="text" value={todo} onChange={handleTodoChange} />
				<button className='bg-violet-500 p-3 flex justify-center items-center' type="submit">Add</button>
			</form>

			<div className="flex flex-col bg-white rounded rounded-xl p-6 space-y-2">
				{todos.length > 0 ? (
					todos.map((todo, index) => (
						<p key={index} className='bg-violet-400 p-2 rounded rounded-lg'>{todo}</p>
					))
					
				)
			: <p className='bg-violet-400 p-2 rounded rounded-lg'>No todos</p>}
			</div>
		</div>
	)
}

export default TodoList
