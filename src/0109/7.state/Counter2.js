import { useState } from 'react'

function Counter2() {
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1
        onClick={() => {
          const newTotal = total + 1
          console.log(`before call setTotal, total = ${total}`)
          setTotal(newTotal)
          console.log(`after call setTotal, total = ${newTotal}`)
        }}
      >
        {total}
      </h1>
    </>
  )
}
export default Counter2
