import { useState } from 'react'

const Filter = ({ filterName, handleSearchChange }) => {
  return (
    <div>
      filter shown with: <input value={filterName} onChange={handleSearchChange} />
    </div>
  )
}

const PersonForm = ({ addName, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({ personShow }) => {
  return (
    <ul>
      {personShow.map(person => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ))}
    </ul>
  )
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , id :1}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setfilterName] = useState('')

  const addName = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)} else {
      const personObject = { name: newName, number: newNumber, id: persons.length + 1 }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }


  const personShow = persons.filter(person =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  )

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setfilterName(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterName={filterName} handleSearchChange={handleSearchChange}/>

      <h3>Add a new</h3>

      <PersonForm 
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons personShow={personShow} />
    </div>
  )
}

export default App