const Person = (props) => {
	console.log('props', props)
	return (
		<>
			{props.name} {props.number} <br />
		</>
	)
}

export default Person