import { ReactNode } from "react"

interface ChildrenPropShape {
	children: ReactNode
}
function ChildrenProp({children}: ChildrenPropShape) {
  return (
	<div>
	  {children}
	</div>
  )
}

export default ChildrenProp
