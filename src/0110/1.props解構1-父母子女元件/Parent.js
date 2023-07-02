import Child from './Child'

function Parent() {
  return (
    <>
      <Child
        text="Hello你好"
        color="red"
        price={123}
        flag={true}
        foo={() => {
          alert('hello')
        }}
      />
    </>
  )
}

export default Parent
