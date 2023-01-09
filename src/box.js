import React from 'react'

function Box(props) {
  const [on, setOn] = React.useState(props.on)
  const style = {
    backgroundColor: on ? "black" : "white"
  }
  let prevOn

  function toggle() {
    setOn(prevOn = !prevOn)
  }
  return (
    <div style={style} className=" h-20 w-20 inline-block  border-2 border-black border-box mr-3" onClick={props.toggle}></div>
  )
}

export default Box