import { useState } from 'react'
function ChildB(props) {
  //子女中的內部資料
  const [cData, setCData] = useState('child B data')
  return (
    <>
      <h1>Child-B</h1>
      <button
        onClick={() => {
          props.setDataFromChild(cData)
        }}
      >
        傳送資料給Parent
      </button>
    </>
  )
}

export default ChildB
