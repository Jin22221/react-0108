import { useState } from 'react'

function Counter2() {
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
      {/* if total 等於 true，顯示後面的值 */}
      {/* 前面的條件運算要轉為布林值，不要使用 falsy 或 truthy 判斷 */}
      {total && <p>目前 total = {total}</p>}
      {!!total && <p>目前 total = {total}</p>}
      {total > 0 && <p>目前 total = {total}</p>}
      {total !== 0 && <p>目前 total = {total}</p>}
    </>
  )
}
export default Counter2
