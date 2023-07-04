import { useState } from 'react'
import './Exam2.css'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

function Exam2() {
  // 與呈現有關必需先成為state
  const [data, setData] = useState(objArray)
  // console.log(data, 'data')

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>
      {/* ================================================================= */}
      <button
        // 1. 從目前的狀態拷貝(深拷貝/完全拷貝)出一個新的變數值(陣列/物件)
        // 2. 在新的變數值(陣列/物件)上作處理
        // 3. 設定回原本的狀態中
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          //1 //2
          //簡單的深拷貝語法
          // const cloneData = JSON.parse(JSON.stringify(data))
          // console.log(cloneData, 'clonedata')

          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      {/* ================================================================= */}
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      {/* ================================================================= */}
      <button
        onClick={() => {
          // id(數字遞增)
          const ids = data.map((v) => v.id)
          const maxId = Math.max(...ids)
          const newId = maxId + 1

          const newObj = {
            id: newId,
            text: 'xxx',
          }

          const newData = [newObj, ...data]

          setData(newData)
        }}
      >
        列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      {/* ================================================================= */}
      <button
        onClick={() => {
          const newObj = {
            // 或 +new Date()
            id: Number(new Date()),
            text: 'yyy',
          }

          const newData = [...data, newObj]

          setData(newData)
        }}
      >
        列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      {/* ================================================================= */}
      <button
        onClick={() => {
          //
          const newData = data.filter((v, i) => {
            return v.text.includes('a')
          })
          //3
          setData(newData)
        }}
      >
        尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      {/* ================================================================= */}
      <button
        onClick={() => {
          // 刪除相當於建立一個新陣列中沒有文字b的物件
          // 不是文字b的物件才能到新陣列
          const newData = data.filter((v, i) => {
            return v.text !== 'b'
          })

          setData(newData)
        }}
      >
        刪除文字為b的物件資料
      </button>
      <br />
      {/* ================================================================= */}
      <button
        onClick={() => {
          const newData = data.filter((v, i) => {
            return v.id !== 4
          })

          setData(newData)
        }}
      >
        刪除id為4的物件資料
      </button>
      <br />
      {/* ================================================================= */}
      <button
        onClick={() => {
          // 尋找 id = 2 的索引值為何
          const index = data.findIndex((v, i) => v.id === 2)
          console.log(index)
          console.log(data.slice(0, index + 1), data.slice(index + 1))
          // if 找到=>切開,插入要加入的物件,合併
          if (index !== -1) {
            const newObj = {
              id: 5,
              text: 'bbb',
            }
            const newData = [
              ...data.slice(0, index + 1),
              newObj,
              ...data.slice(index + 1),
            ]
            setData(newData)
          }
        }}
      >
        在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      {/* ================================================================= */}
      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝(深拷貝/完全拷貝)出一個新的變數值(陣列/物件)
          // 深拷貝 // newData目前還不是狀態，要等到設定回去之後
          // 可以多拷貝一層 =>陣列中的物件的語法
          // const newData = data.map((v, i) => {
          //   // 把每個物件值做淺拷貝
          //   return { ...v }
          // })
          // console.log(newData)
          // // 2. 在新的變數值(陣列/物件)上作處理
          // const index = newData.findIndex((v, i) => {
          //   return v.id === 3
          // })
          // console.log(index)
          // if (index !== -1) {
          //   newData[index]['text'] = 'cccc'
          // }
          // // 3. 設定回原本的狀態中
          // setData(newData)

          // ------精簡的寫法
          const newData = data.map((v, i) => {
            if (v.id === 3) return { ...v, text: 'cccc' }

            // id 不是 3 的話，把原本的資料展開，加到新的陣列去
            return { ...v }
          })

          setData(newData)
        }}
      >
        取代id為3的文字為cccc
      </button>
    </>
  )
}

export default Exam2
