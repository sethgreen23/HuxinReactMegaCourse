import React from 'react'
import { createPortal } from 'react-dom'
const Popup = ({copied}) => {
	return createPortal (
		<section>
			{copied && <p className='p-2 absolute bottom-3 bg-violet-400'>Copied to the clipboard</p>}
		</section>
		,
		document.querySelector('#popup')
	)
}

export default Popup
