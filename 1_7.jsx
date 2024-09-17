import { useState } from 'react'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const titlegod = () => setGood(good + 1)

  const titleneutral = () => setNeutral(neutral + 1)
  const titlebad = () => setBad(bad + 1)
  const total = good + neutral + bad
  const average = (good - bad) / total
  const percentage  = (good / total) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={titlegod}>good</button>
      <button onClick={titlebad}>bad</button>
      <button onClick={titleneutral}>neutral</button>

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>      
      <p>all {bad + good + neutral}</p>
      <p>average {average}</p>
      <p>positive {percentage} %</p>
    </div>
  )
}




export default App