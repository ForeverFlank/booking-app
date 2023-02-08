import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function EmptyRow({ time }) {
  return (
    <>
      <tr class='emptyrow'>
        <td class='time'>{time}</td>
        <td class='cell'></td>
        <td class='cell'></td>
        <td class='cell'></td>
        <td class='cell'></td>
      </tr>
    </>
  )
}

function Timetable() {
  return (
    <>
      <table>
        <tr>
          <td> </td>
          <td class='center'>1</td>
          <td class='center'>2</td>
          <td class='center'>3</td>
          <td class='center'>4</td>
        </tr>
        <EmptyRow time='08:00'/>
        <EmptyRow time='     '/>
        <EmptyRow time='     '/>
        <EmptyRow time='     '/>
        <EmptyRow time='09:00'/>
        <EmptyRow time='     '/>
        <EmptyRow time='     '/>
        <EmptyRow time='     '/>
      </table>
    </>
  )
}

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
      <div>
        <Timetable />
      </div>
      <p>Hello World!</p>
    </div>
  )
}

export default App
