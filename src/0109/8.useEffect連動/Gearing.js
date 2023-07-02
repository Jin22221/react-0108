import { useEffect, useState } from 'react'

function Gearing() {
  const [totalA, setTotalA] = useState(0)
  const [totalB, setTotalB] = useState(0)
  const [totalC, setTotalC] = useState(0)

  // totalA改變，改變 totalB
  useEffect(() => {
    setTotalB(totalA + 1)
  }, [totalA])

  // totalB改變，改變 totalC
  useEffect(() => {
    setTotalC(totalB + 1)
  }, [totalB])

  return (
    <>
      <h1
        onClick={() => {
          setTotalA(totalA + 1)
        }}
      >
        {totalA}
      </h1>
      <h1>{totalB}</h1>
      <h1>{totalC}</h1>
    </>
  )
}
export default Gearing
