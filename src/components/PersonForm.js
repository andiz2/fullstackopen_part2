const PersonForm = (props) => {
	return (
		<div>
			<form onSubmit = {props.addPerson}>
		        <div>
		          name: <input value = {props.newPerson}
		          onChange = {props.handlePersonChange}
		          />
		        </div>
		        <div>
		          number: <input value = {props.newNumber}
		          onChange = {props.handleNumberChange}
		          />
		        </div>
		        <div>
		          <button type="submit">add</button>
		        </div>
		      </form>
		</div>
	)
}

export default PersonForm;
