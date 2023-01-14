import { useRef } from 'react'

function RefsForm() {
  const inputRef = useRef(null)
  console.log(inputRef)
  return (
    <>
      <h1>refsForm</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          //使用時要用 inputRef.current 代表得到的元素實體物件參照
          inputRef.current.focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        失焦(blur)
      </button>
      <button
        onClick={() => {
          console.log(inputRef.current.value)
        }}
      >
        獲得值(console.log)
      </button>
    </>
  )
}
//key ,  ref 不是屬性
export default RefsForm
