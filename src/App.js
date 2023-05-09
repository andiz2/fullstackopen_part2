//this is actually 2_6 + 2.7 + 2.8 + 2.9 + 2.10

import { useState, useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {

  useEffect(() => {
    console.log("effect")
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('response', response.data)
        setPersons(response.data)
      })
  }, [])

  const [persons, setPersons] = useState([])
  //   { name: 'Arto Hellas',
  //   number: '040-1234567',
  //   id: 1 }
  // ]) 

  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(persons)

  var initialList = JSON.parse(JSON.stringify(persons));

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newPerson,
      number: newNumber,
      id: persons.length + 1
    }
    console.log("persons", persons)
    console.log("newPerson", newPerson)
    console.log("nameObj", nameObject)
    

    let validPers = persons.some(el => el.name === nameObject.name)
    if(!validPers){
      console.log("el", validPers)
      setPersons(persons.concat(nameObject))
    } else {
      alert(`${nameObject.name} is already added to phonebook`)
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
    updatedList = updatedList.filter(person => person.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
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

  //console.log(persons)

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
      {console.log('persNumbers',persons)}
      {persons.map(person => 
        <Person key = {person.id} name = {person.name} number = {person.number} />)} 
      
    </div>
  )
}

export default App
