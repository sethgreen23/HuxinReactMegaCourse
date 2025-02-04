import React, { useState } from 'react'
import Popup from './Popup';

const CopyClipboard = () => {
	const [inputValue, setInputValue] = useState('');
	const [copied, setCopied] = useState(false);
	const handleCopy = () => {
		navigator.clipboard.writeText(inputValue).then(() =>{
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
			setInputValue("")
		});
		
	}
	return (
		<>
			<div>
				<input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
				<button className='bg-violet-500 p-2 ml-2' onClick={handleCopy}>Copy</button>
			</div>
			<Popup copied={copied} />
		</>

	)
}

export default CopyClipboard
