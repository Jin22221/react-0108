import React, { useState } from 'react'
import './BMI.scss'

function BMI() {
  const handleSubmit = (e) => e.preventDefault()
  const [myHeight, setMyHeight] = useState(0)
  const [myWeight, setMyWeight] = useState(0)
  const [myBMI, setMyBMI] = useState(0)
  return (
    <>
      <form id="theForm" onSubmit={handleSubmit}>
        <fieldset>
          <h1>BMI</h1>
          <div>
            <label htmlFor="height">height</label>
            <input
              type="number"
              name="height"
              id="height"
              min={0}
              step={0.1}
              value={myHeight === 0 ? '' : myHeight}
              onChange={(e) => {
                setMyHeight(Number(e.target.value))
              }}
            />
          </div>
          <div>
            <label htmlFor="weight">weight</label>
            <input
              type="number"
              name="weight"
              id="weight"
              min={0}
              step={0.1}
              value={myWeight === 0 ? '' : myWeight}
              onChange={(e) => {
                setMyWeight(Number(e.target.value))
              }}
            />
          </div>
          <div>
            <button
              id="submit"
              onClick={() => {
                const bmi = myWeight / Math.pow(myHeight / 100, 2)
                setMyBMI(bmi)
              }}
            >
              Submit
            </button>
            <button
              className="clear"
              onClick={() => {
                setMyHeight(0)
                setMyWeight(0)
                setMyBMI(0)
              }}
            >
              clear
            </button>
          </div>
          <div id="total">{myBMI > 0 ? myBMI.toFixed(2) : ''}</div>
        </fieldset>
      </form>
    </>
  )
}

export default BMI
