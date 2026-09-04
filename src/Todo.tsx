interface TodoPropsProps {
    task: string;
    time?: string;
}

// function Todo(props: TodoPropsProps){
//     return (
//           <li>Do this work : {props.task} at {props.time}</li>
//     )
// }

function Todo({task,time}: TodoPropsProps){
    return (
          <li>Do this work : {task} by {time}</li>
          
    )
}

// function Todo({task,time}){
//     return (
//           <li>Do this work : {task} by {time}</li>
//     )
// }

export default Todo