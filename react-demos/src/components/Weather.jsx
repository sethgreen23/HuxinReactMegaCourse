import React from 'react'

const Weather = ({tempreture}) => {
  return (
	<div>
	  {tempreture <= 15 && <p>It's cold outside</p>}
	  {(tempreture > 15 && tempreture <=25) && <p>It's nice outside</p>}
	  {tempreture > 25 && <p>It's hot outside</p>}
	</div>
  )
}

export default Weather
