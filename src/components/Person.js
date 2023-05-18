const Person = (props) => {
	console.log('props', props)
	return (
		<>
			{props.name} {props.number}  <button>delete</button> <br />
		</>
	)
}

export default Person