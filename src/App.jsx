import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function EmptyRow() {
  return (
    <>
      <tr class='emptyrow'>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
    </>
  )
}

function Timetable() {
  return (
    <>
      <table>
        <tr>
          <td>Mon</td>
          <td>Tue</td>
          <td>Wed</td>
          <td>Thr</td>
          <td>Fri</td>
        </tr>
        <EmptyRow />
        <EmptyRow />
        <EmptyRow />
      </table>
    </>
  )
}

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <Timetable />
      <p>Hello World!</p>
    </>
  )
}

export default App
