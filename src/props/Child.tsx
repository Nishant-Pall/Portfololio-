interface ChildProps{
	color:string;
}

// Interfaces provide security checks, first is to ensure whether
// parent component is sending in props, and second is to verify
// that the type of the variable is as according to the interface
// object

export const Child = ({color} : ChildProps)=>{
	return <div>{color}</div>
}