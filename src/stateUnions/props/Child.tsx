interface ChildProps{
	color:string;
  onClick: () => void;
}

// Interfaces provide security checks, first is to ensure whether
// parent component is sending in props, and second is to verify
// that the type of the variable is as according to the interface
// object

// Downside: TS doesn't understand that we're defining a
// REACT component, so it thanks that Child doesn't have properties
// like propTypes, displayName, defaultProps, contextTypes
// which are optional properties provided by react components
export const Child = ({color, onClick} : ChildProps)=>{
	return <div>
  {color}
    <button onClick={onClick}>Click me</button>
    </div>
}

// React.FunctionComponent
// Another way of writing a react component, this
// let's TS know we're exporting a react component
//
// Another upside is that we don't need to specify the children prop
// from parent component inside an interface
export const ChildAsFc: React.FC<ChildProps> = ({color, onClick, children}) =>{
	return <div>
    {color}
    {children}
    <button onClick={onClick}>Click Me</button>
    </div>
}
