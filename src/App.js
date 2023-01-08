import { useState } from 'react'

function App() {
  //宣告狀態用的語法
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1
        onClick={() => {
          //不可使用total++，因為相當於total += 1
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default App
