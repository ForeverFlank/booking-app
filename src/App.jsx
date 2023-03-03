import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function EmptyCell({ cell }) {
  const [bg_color, setValue] = useState('#323232');
  const [clicked, toggle] = useState(false);

  function handleClick() {
    //toggleClicked(clicked);
    if (clicked)
      setValue('#f25430');
    else
      setValue('#323232');
  }

  //toggleClicked (prevClicked => !prevClicked);

  return (
    <>
      <td class='cell'
        id={cell}
        onClick={handleClick}
        style={{ 'background-color': bg_color }}></td>
    </>
  )
}

function EmptyRow({ time }, { h }) {
  return (
    <>
      <tr class='emptyrow'>
        <td class='time'>{time}</td>
        <EmptyCell cell={h + '1'}/>
        <EmptyCell cell={h + '2'} />
        <EmptyCell cell={h + '3'} />
        <EmptyCell cell={h + '4'} />
      </tr>
    </>
  )
}

function HourRows({ hour }) {

  return (
    <>
      <EmptyRow time={hour + ':00'} h={'c' + hour + '1'} />
      <EmptyRow time='   15'        h={'c' + hour + '2'} />
      <EmptyRow time='   30'        h={'c' + hour + '3'} />
      <EmptyRow time='   45'        h={'c' + hour + '4'} />
    </>
  )
}

function Timetable() {
  return (
    <>
      <table id='timetable'>
        <tr>
          <td> </td>
          <td class='center'>1</td>
          <td class='center'>2</td>
          <td class='center'>3</td>
          <td class='center'>4</td>
        </tr>
        <HourRows hour='08' />
        <HourRows hour='09' />
        <HourRows hour='10' />
        <HourRows hour='11' />
        <HourRows hour='12' />
        <HourRows hour='13' />
        <HourRows hour='14' />
        <HourRows hour='15' />
        <HourRows hour='16' />
        <HourRows hour='17' />
        <HourRows hour='18' />
        <HourRows hour='19' />
        <HourRows hour='20' />
        <EmptyRow time='21:00' h={'c211'} />
      </table>
    </>
  )
}

function Option({ x }) {
  return (
    <>
      <option value={x}>{x}</option>
    </>
  )
}

function HoursOption() {
  var options = []
  for (var i = 8; i <= 20; i++) {
    options.push(<option value={i}>{i}</option>);
  }
  return <select class='dropdown'>{options}</select>
}

function MinutesOption() {
  return <select class='dropdown'>
    <option value='00'>00</option>
    <option value='15'>15</option>
    <option value='30'>30</option>
    <option value='45'>45</option>
  </select>
}

function InputMenu() {
  return (
    <>
      <p>Room</p>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <br></br>
      <p>Time</p>
      <div class='select-time'>
        <HoursOption />
        <p class='colon'>:</p>
        <MinutesOption />
      </div>
      <div>
        <br></br>
        <button>Book</button>
      </div>
    </>
  )
}

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div class='grid-container'>
      <div class='grid-table'>
        <Timetable />
      </div>
      <div class='grid-input'>
        <InputMenu />
      </div>
    </div>
  )
}

export default App
