import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { content: 'Arto Hellas' }
  ]) 
  const [newPerson, setNewPerson] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newPerson
    }
    let validPerson = persons.filter(person => person.content !== nameObject.content)
    console.log(validPerson)
    console.log('persons', persons)
    console.log('nameObject content', nameObject.content)
    setPersons(persons.concat(nameObject))
    console.log('after if valid', validPerson)
    console.log('after if persons', persons)
    setNewPerson('')
  }

  const handlePersonChange = (event) => {
    setNewPerson(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addPerson}>
        <div>
          name: <input value = {newPerson}
          onChange = {handlePersonChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <Person key = {person.content} content = {person.content} />)}
    </div>
  )
}

export default App
