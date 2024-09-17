import { useState } from 'react'

const Statistics = ({ good, neutral, bad, total, average, percentage } ) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average {average}</p>
      <p>positive : {percentage} %</p>
    </div>
  )

}
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

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        percentage={percentage}
      />
    </div>
  )
}




export default App