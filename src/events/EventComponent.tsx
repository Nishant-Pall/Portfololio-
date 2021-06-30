import React from 'react'

const EventComponent = () => {

	// we need to annotate the type of event because type inference
	// is only allowed when defining the function inline
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event);
	}

	const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
		console.log(event.clientX)
	}

	return (
		<div>
			<input onChange={onChange} />
			<div draggable onDragStart={onDragStart}>Drag me!!</div>
		</div>
	)
}

export default EventComponent
