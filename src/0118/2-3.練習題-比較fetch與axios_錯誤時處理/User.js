import { useEffect, useState } from 'react'
import axios from 'axios' //引入axios 套件
import './User.css'

function User() {
  // [{
  //   "id":"1233"
  //   "name": "王曉明"
  //   "age": "23"
  // }]
  const [users, setUsers] = useState([])

  //與伺服器相連獲得資料的函示
  const getUsers = async () => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
      )

      //console.log(response.data)

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
  }, [])
  return (
    <>
      <h1>會員資料</h1>
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
              <tr>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.age}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default User
