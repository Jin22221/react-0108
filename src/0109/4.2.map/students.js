export const data = [
  { id: 107001, name: '張佳蓉', age: 21 },
  { id: 107002, name: '楊智云', age: 20 },
  { id: 107003, name: '陳語合', age: 19 },
  { id: 107004, name: '林世名', age: 22 },
  { id: 107005, name: '張建彰', age: 21 },
  { id: 107006, name: '黃國瑄', age: 20 },
  { id: 107007, name: '徐昶意', age: 18 },
  { id: 107008, name: '賴靖瑞', age: 19 },
  { id: 107009, name: '宋紀仲', age: 22 },
]

function Student() {
  return (
    <>
      <h1>學生資料範例2(map)</h1>
      <ul>
        {/* key值的選擇
            1. 資料來自資料庫，優先使用資料庫中的key(主鍵/外鍵)當key值
            2. 資料並非來自資料庫，可在資料初始化時使用uuid或nanoid等函式庫產生key值，注意*不要*寫在元件的return(即render)中
            3. 資料為靜態資料(意指在應用程式執行中完全不會更動)時，才能使用索引值當key值
         */}
        {data.map((v, i) => {
          return (
            <li key={v.id}>
              {v.name} / {v.age} 歲
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default Student
