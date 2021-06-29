import {ChildAsFc} from './Child'

// If we use opening and closing tags in a react component
// the content inside is automatically passed as the children
// prop, this will give error if we did this in Child component
// because the interface doesn't know about the children prop
// whereas ChildAsFc, knows because we're using React.FunctionComponent
const Parent= ()=>{
	return <ChildAsFc color="red" onClick={()=>console.log("Clicked")}>
    This is default children prop
        </ChildAsFc>
}

export default Parent
