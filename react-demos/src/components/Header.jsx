import React from 'react'

const Header = () => {
	return (
		<header className=" p-6 bg-cyan-500">
			<div className="flex justify-between container mx-auto">

			<h1 className='text-xl font-bold'>Welcome too my website</h1>
			<nav className='flex gap-4'>
				<a href="#">Home</a>
				<a href="#">About</a>
				<a href="#">Contact</a>
			</nav>
			</div>
		</header>
	)
}

export default Header
