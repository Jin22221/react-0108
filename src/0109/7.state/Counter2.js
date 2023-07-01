import { useState } from 'react'

function Counter2() {
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1
        onClick={() => {
          console.log(`before call setTotal, total = ${total}`)
          setTotal(total + 1)
          console.log(`after call setTotal, total = ${total}`)
        }}
      >
        {total}
      </h1>
    </>
  )
}
export default Counter2
