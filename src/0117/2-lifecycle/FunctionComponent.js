import { useEffect, useState } from 'react'

function FC() {
  const [total, setTotal] = useState(0)

  const [user, setUser] = useState({ name: 'Amy' })

  //模擬didMount
  useEffect(() => {
    console.log('模擬componentDidMount', 'total=', total) //相依性陣列中放入物件或陣列，只要有設定到state就一定會執行
    //使用Object
  }, [total])

  return (
    <>
      <h1>函式型元件</h1>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
      {console.log('render')}
    </>
  )
}
export default FC
