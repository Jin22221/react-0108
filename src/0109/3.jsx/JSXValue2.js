function JSXValue2() {
  return (
    <>
      <h1>JSX中值與表達式範例</h1>
      <h2>Number</h2>
      {100 - 5}
      {NaN}
      <h2>String</h2>
      {'Hello'}
      <br />
      {`total=${80 - 2}`}
      <h2>Boolean</h2>
      {/* render時不呈現 */}
      {true}
      {false}
      {14433}
      <h2>null</h2>
      {null}
      <h2>undefined</h2>
      {undefined}
      <h2>array</h2>
      {[1, 2, 3, 'a']}
      <h2>object</h2>
      {/* 會造成中斷錯誤，不能直接呈現物件 */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>Function</h2>
      {/* 有警告，不呈現任何東西 */}
      {() => {}}
    </>
  )
}
export default JSXValue2
