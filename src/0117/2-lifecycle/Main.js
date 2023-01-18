import React, { useState } from 'react'

// import CC from './ClassComponent'
import FC from './FunctionComponent'

function Main() {
  const [show, setShow] = useState(true)
  return (
    <>
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? '移除' : '呈現'}
      </button>
      <hr />
      {show && <FC />}
    </>
  )
}

export default Main
