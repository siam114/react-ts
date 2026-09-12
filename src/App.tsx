import { Suspense } from 'react'
import './App.css'
// import Cart from './Cart'
// import Counter from './Counter'
import Users from './Users'
import Posts from './Posts'
import Todos from './Todos'
// import Todo from './Todo'

const userDataPromise = fetch(
  'https://jsonplaceholder.typicode.com/users'
).then(res => res.json())

const postDataPromise = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return data
}

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
     <Todos/> 

     <Suspense fallback={<h1>Loading...</h1>}>
      <Users userDataPromise = {userDataPromise} />
     </Suspense>

     <Suspense fallback={<h1>Loading posts...</h1>}>
      {/* <Posts postDataPromise={postDataPromise} /> */}
      <Posts postDataPromise={postDataPromise()}/>
     </Suspense>
    </>
  )
}

export default App