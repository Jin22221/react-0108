import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              //處理數量count屬性的增加
              const newProducts = products.map((v, i) => {
                if (v.id === product.id) {
                  return { ...v, count: v.count + 1 }
                } else {
                  return { ...v }
                }
              })
              setProducts(newProducts)
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              // 預期:目前商品數量是1了，再按下去會變 0 -> 即刪除它
              if (product.count === 1) {
                // 1, 2
                const newProducts = products.filter((v, i) => {
                  return v.id !== product.id
                })

                setProducts(newProducts)

                return // 跳出函式，下面的程式碼不會再執行
              }
              // console.log(product.id)

              const newProducts = products.map((v, i) => {
                if (v.id === product.id) {
                  console.log(v.name, v.count)
                  return { ...v, count: v.count - 1 }
                } else {
                  return { ...v }
                }
              })

              setProducts(newProducts)
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ShoppingCart
