import { useState } from 'react'

function Select() {
  const [city, setCity] = useState('')
  const area = ['高雄市', '台南市', '台北市', '桃園市']
  return (
    <>
      <section>
        <h2>下拉清單(select)</h2>
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
          }}
        >
          {/* 對應state(city)初始值的選項 */}
          <option value="">請選擇城市</option>
          {area.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
      </section>
    </>
  )
}
export default Select
