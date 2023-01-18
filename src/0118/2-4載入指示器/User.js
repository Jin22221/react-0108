import { useEffect, useState } from 'react'

//需先安裝 `yarn add axios`
import axios from 'axios'

import './User.css'

function User() {
  // [{
  //   "id": "107004",
  //   "name": "林世名",
  //   "age": "23"
  // }]
  const [users, setUsers] = useState([])

  // 載入指示器用
  const [isLoading, setIsLoading] = useState(true)

  // 與伺服器相連獲得資料的函式
  const getUsers = async () => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
      )

      console.log(response.data)

      // 設定到state中
      // 這裡要確保要設定到state的資料類型是符合一致的
      // 例如此處的陣列類型
      if (Array.isArray(response.data)) {
        setUsers(response.data)
      }

      /* 單純用fetch api*/
      /* ================================ */
      // const response = await fetch('https://my-json-server.typicode.com/eyesofkids/json-fake-data/users')
      //
      // const data = await response.json()
      //
      // if (Array.isArray(response.data)) {
      //   setUsers(data)
      // }
      //
      /* ============================== */
      /* 單純用fetch */
    } catch (e) {
      console.log(e)
    }
  }

  // didMount
  useEffect(() => {
    // 向伺服器要求資料
    getUsers()

    // 設定2秒後關閉載入指示動畫
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const loader = (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )

  const display = (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>年齡</th>
        </tr>
      </thead>
      <tbody>
        {users.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.age}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  return (
    <>
      <h1>會員資料</h1>
      {isLoading ? loader : display}
    </>
  )
}

export default User
