import React from 'react'
import Greet from './Greet'
import Weather from './Weather'
import UserStatus from './UserStatus'
import Counter from './Counter'
import TodoList from './TodoList'
import CopyClipboard from './CopyClipboard'
import BasicEffect from './BasicEffect'
import CounterEffect from './CounterEffect'
import FetchDataEffect from './FetchDataEffect'

const MainContent = () => {
  return (
	<main className='p-6 bg-blue-400 flex-1'>
		<FetchDataEffect />
	</main>
  )
}

export default MainContent
