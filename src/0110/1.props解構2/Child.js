// 在函式傳入值時就解構
function Child({ text, color, foo }) {
  return (
    <>
      <div>文字: {text}</div>
      <div>顏色: {color}</div>
      <button onClick={foo}>按我</button>
    </>
  )
}

export default Child
