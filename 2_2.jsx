import Note from './components/Note'

const Header = ({ name }) => {
  return <h1>{name}</h1>
}
const Part = ({ name, exercises }) => {
  return <p>{name} {exercises}</p>
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => ( <Part key = {part.id} name = {part.name} exercises = {part.exercises}/>))}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name = {course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Total = ({ parts }) => {
  let m = 0
  parts.map(part => {
    m += part.exercises
    return null
  })
  return <p><strong>total of {m} exercises</strong></p>

}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App