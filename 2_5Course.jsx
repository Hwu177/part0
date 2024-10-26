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
  const m = parts.reduce((s,part) => {
    return s + part.exercises}, 0)
  return <p><strong>total of {m} exercises</strong></p>
  
}


export default Course