import { useState } from 'react'

function Exchange() {
  const [inputTWD, setInputTWD] = useState(0)
  const [inputUSD, setInputUSD] = useState(0)
  const convertUSDtoTWD = (money) => {
    //轉換後取小數點後2位
    return (money * 30.38).toFixed(2)
  }
  const convertTWDtoUSD = (money) => {
    //轉換後取小數點後2位
    return (money / 30.38).toFixed(2)
  }
  // console.log(inputTWD)
  return (
    <>
      <h1>貨幣轉換</h1>
      <div>
        <input
          type="number"
          // 因為一開始初始值 0 會顯示在畫面上
          value={inputTWD === 0 ? '' : inputTWD}
          onChange={(e) => {
            const newInputTWD = Number(e.target.value)
            setInputTWD(newInputTWD)
            setInputUSD(convertTWDtoUSD(newInputTWD))
          }}
        />
        <label>新台幣</label>
      </div>
      <div>
        <input
          type="number"
          value={inputUSD === 0 ? '' : inputUSD}
          onChange={(e) => {
            const newInputUSD = Number(e.target.value)
            setInputUSD(newInputUSD)
            // console.log(newInputUSD)
            // 注意要用e.target.value的值，不能依賴到inputUSD最後更動的值
            setInputTWD(convertUSDtoTWD(newInputUSD))
          }}
        />
        <label>美金</label>
      </div>
    </>
  )
}

export default Exchange
