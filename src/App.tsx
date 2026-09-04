import './App.css'
// import Todo from './Todo'

function App() {

  function handleClick(){
    alert("Hello, I am clicked")
  }

  return (
    <>
     <h1>Siam App</h1>
     {/* <Todo task="Buy groceries" time="5:00 PM" /> */}
     <button className='siam' onClick={handleClick}>
      click me
     </button>
    </>
  )
}

export default App