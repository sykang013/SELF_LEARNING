// import reactLogo from './assets/react.svg'
import './App.css'
import { useState, useRef } from 'react'


type TodoItemType ={
  id: string;
  data: {
    todo: string;
    isLearned: boolean;
  }
}

//type TodoListType = Array<TodoItemType>
// type TodoListType = Array<TodoItemType>;
// Typed Array : PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, data: PropTypes.shape({ todo: PropTypes.string.isRequired }) }))
// type TodoListType = Partial<TodoItemType[]>; //Partial 이라는 유틸함수를 쓰면 전체 를 ? 옵셔널로 바꿔줌
type TodoListType = TodoItemType[]; 



// const numbersArray = [2,4,7,'one']
const numbersArray: Array<number|string> = [2, 4, 7, 'one']

//fn():ReturnValueType  
function App(): JSX.Element {
  const todoInputRef = useRef<null | HTMLInputElement>(null);

  const [todoList, setTodoList] = useState<TodoListType>([
    {id: 'todo-1', data: {todo:'TypeScript 좋아??', isLearned: false}},
    {id: 'todo-2', data: {todo:'TypeScript 좋아!!', isLearned: false}},
  ]);

  const addTodo = () => {
    // 방법1. 타입 보호(type guard) if문은 null 이면 실행자체가 안되니깐
    // if (todoInputRef.current) {
    setTodoList([
      ...todoList,
      {
        id: `todo-${todoList.length + 1}`,
        data: {
          isLearned: false,
          // 방법2. 길게 쓰기 귀찮아 하는 사람들이 많이 씀
          // todo: (todoInputRef.current!).value,
          // 방법3. 좀 더 명시적인 방법
          todo: (todoInputRef.current as HTMLInputElement).value,
        }
      }
    ])
  // }
}
  
  // 아래의 e 는 event object를 얘기한다. 
  // 첫번쨰 방법: 이벤트 객체를 선언하거나
  // const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
  // 두번째 방법 : 함수의 타입을 선언하거나
  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
  }

  return <div className="App">
    {/* 편의상 label을 빼고 aria-label을 넣었다. */}
    <input type="text" aria-label="할 일" ref={todoInputRef} onChange={handleChangeInput}/>
    <button type="button" onClick={addTodo}>할 일 추가</button>
  </div>
}


export default App

// function App() {
//   //타스가 단순한 글들은 추론을 한다. 내가 여기다가 넣을 값은 숫자다! Generic 문법이라고 한다. 
//   const [count, setCount] = useState<number>(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

