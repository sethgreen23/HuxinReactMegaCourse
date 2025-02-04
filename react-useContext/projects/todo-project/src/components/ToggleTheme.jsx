import  { useState } from 'react'

const ToggleTheme = () => {
	const [backgroundColor, setBackgroundColor] = useState('white');
	const [textColor, setTextColor] = useState('#000000');
	const [buttonStyle, setButtonStyle] = useState({
		backgroundColor: 'white',
		color: '#000000',
		border: '2px solid #000000'
	})
	const [theme, setTheme] = useState('light');
	const handleTheme = () => {
		if (theme === 'light') {
			setBackgroundColor('black');
			setTextColor('#FFD700');
			setButtonStyle({
				backgroundColor: 'black',
				color: '#FFD700',
				border: '2px solid #FFD700'
			})
			setTheme('dark');
		} else {
			setBackgroundColor('white');
			setTextColor('#000000');
			setButtonStyle({
				backgroundColor: 'white',
				color: '#000000',
				border: '2px solid #000000'
			})
			setTheme('light');
		}
	}
	return (
		<div>
			<button onClick={handleTheme} style={{...buttonStyle}}>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</button>
			<section style={{backgroundColor, color: textColor}} className="content">
				<h1>Welcome to React</h1>
			</section>
		</div>
	)
}

export default ToggleTheme
