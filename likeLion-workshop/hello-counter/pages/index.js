import React from "react"

//createContext도 리액트에서 꺼내쓴 함수
const CounterContext = React.createContext(null)

//값을 쏴주는 역할을 하는 프로바이더 
const CounterContextProvider = (props) => { //props로 칠드런 받아야함
  const [value, setState] = React.useState(0)
  const minus = () => setState(value - 1)
  const plus = () => setState(value + 1)
  const context = { value, minus, plus }

  return (
    <CounterContext.Provider value={context}>
      {props.children}
    </CounterContext.Provider>
  )
}

const MinusButton = (props) => {
  return <button onClick={props.onClick}>-</button>
}
const PlusButton = (props) => {
  return <button onClick={props.onClick}>+</button> 
}
const Viewer = (props) => {
  const context = React.useContext(CounterContext)
  return <span>{props.children}</span>
}

const Counter = () => {
  return (
    <CounterContextProvider>
      <MinusButton />
      <Viewer />
      <PlusButton />
    </CounterContextProvider>
  )
}

const Home = () => {
  return <Counter />
}

export default Home