import { useState } from 'react'

function Exchange() {
  const [inputTWD, setInputTWD] = useState(0)
  const [inputMoney, setInputMoney] = useState(0)
  // 美金 -> 新台幣  轉換後取小數點後2位
  const convertUSDtoTWD = (money) => (money * 30.38).toFixed(2)

  // 新台幣 -> 美金  轉換後取小數點後2位
  const convertTWDtoUSD = (money) => (money / 30.38).toFixed(2)

  // 日圓 -> 新台幣
  const convertJPYtoTWD = (money) => (money / 4.25).toFixed(2)

  // 新台幣 -> 日圓
  const convertTWDtoJPY = (money) => (money * 4.25).toFixed(2)

  const currencyOptions = ['美金', '日圓']
  const [currency, setCurrency] = useState('')
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
            if (currency === '美金') {
              setInputMoney(convertTWDtoUSD(newInputTWD))
            } else {
              setInputMoney(convertTWDtoJPY(newInputTWD))
            }
          }}
        />
        <label>新台幣</label>
      </div>
      <div>
        <input
          type="number"
          value={inputMoney === 0 ? '' : inputMoney}
          onChange={(e) => {
            const newInputMoney = Number(e.target.value)
            setInputMoney(newInputMoney)
            if (currency === '美金') {
              setInputTWD(convertUSDtoTWD(newInputMoney))
            } else {
              setInputTWD(convertJPYtoTWD(newInputMoney))
            }
          }}
        />

        <select
          value={currency}
          onChange={(e) => {
            // 解決異步
            const newCurrency = e.target.value
            setCurrency(newCurrency)

            // 下拉選單改變幣種時，直接轉換目前新台幣數字為該幣種值
            if (newCurrency === '美金') {
              setInputMoney(convertTWDtoUSD(inputTWD))
            } else {
              setInputMoney(convertTWDtoJPY(inputTWD))
            }

            // 也可以全歸零
            // setInputTWD(0)
            // setInputMoney(0)
          }}
        >
          <option value="">--請選擇貨幣--</option>
          {currencyOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
      </div>
    </>
  )
}

export default Exchange
