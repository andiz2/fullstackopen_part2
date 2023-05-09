//this is actually 2_6 + 2.7 + 2.8 + 2.9 + 2.10

import { useState } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { content: 'Arto Hellas',
    number: '040-1234567',
    id: 1 }
  ]) 

  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(persons)

  var initialList = JSON.parse(JSON.stringify(persons));

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newPerson,
      number: newNumber,
      id: persons.length + 1
    }
    console.log("persons", persons)
    console.log("newPerson", newPerson)
    console.log("nameObj", nameObject)
    

    let validPers = persons.some(el => el.content === nameObject.content)
    if(!validPers){
      console.log("el", validPers)
      setPersons(persons.concat(nameObject))
    } else {
      alert(`${nameObject.content} is already added to phonebook`)
    }
    setNewPerson('')
    setNewNumber('')
  }



  const handlePersonChange = (event) => {
    setNewPerson(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const filterPerson = (event) => {
    const query = event.target.value
    var updatedList = [...persons]
    updatedList = updatedList.filter(person => person.content.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    setShowAll(updatedList)
    setPersons(updatedList)
    console.log("ShowAll", showAll)
    if(query === ''){
      setShowAll(initialList)
      setPersons(initialList)
    }
    console.log('truee?', query=== '')
    console.log('initialList', initialList)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter showAll = {showAll}
      filterPerson = {filterPerson}
      />      

      <h2>add a new </h2>
      <PersonForm addPerson = {addPerson}
       newPerson = {newPerson} 
       handlePersonChange = {handlePersonChange} 
       newNumber = {newNumber}
        handleNumberChange = {handleNumberChange}/>

      <h2>Numbers</h2>
      {persons.map(person => 
        <Person key = {person.content} content = {person.content} number = {person.number} />)} 
      
    </div>
  )
}

export default App
