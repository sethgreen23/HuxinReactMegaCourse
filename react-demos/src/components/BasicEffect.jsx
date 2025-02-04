import React, { useEffect } from 'react'

const BasicEffect = () => {
	useEffect(()=>{
		console.log('Mounted component for the first time')
	},[])
  return (
	<div>
	  
	</div>
  )
}

export default BasicEffect
