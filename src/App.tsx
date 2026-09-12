import { Suspense } from 'react'
import './App.css'
// import Cart from './Cart'
// import Counter from './Counter'
import Users from './Users'
// import Todo from './Todo'

const userDataPromise = fetch(
  'https://jsonplaceholder.typicode.com/users'
).then(res => res.json())

function App() {

  // function handleClick(){
  //   alert("Hello, I am clicked")
  // }

  return (
    <>
     {/* <h1>Siam App</h1> */}
     {/* <Todo task="Buy groceries" time="5:00 PM" /> */}
     {/* <button className='siam' onClick={handleClick}>
      click me
     </button> */}
     {/* <Cart/>
     <Counter/> */}
     <Suspense fallback={<h1>Loading...</h1>}>
      <Users userDataPromise = {userDataPromise} />
     </Suspense>
    </>
  )
}

export default App