import React,{useReducer} from 'react';
import './App.css';
import ComponentA from './usereducer+context/ComponentA';
import ComponentB from './usereducer+context/ComponentB';
import ComponentC from './usereducer+context/ComponentC';
// import CounterThree from './useReducer/CounterThree';
// import CounterTwo from './useReducer/CounterTwo'
// import CounterOne from './useReducer/CounterOne';
// import ComponentC from '../src/useContext/ComponentC'


// export const UserContext = React.createContext()
// export const ChannetContext = React.createContext()



export const CountContext= React.createContext()

const initialState = 0

const reducer =(state,action)=>{
  switch(action){
    case "increase":
      return state + 1

    case 'decrease':
      return state - 1

    case 'reset':
      return initialState

      default:
        return state
  }
}



function App() {
    const[count,dispatch]=useReducer(reducer,initialState)





  return (
    <div>
      {/* <UserContext.Provider value={'mayowa'}>
        <ChannetContext.Provider value={'CodeEVOLUTION'}>
          <ComponentC />
        </ChannetContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne /> */}

      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}

      <CountContext.Provider
        value={
          {
            countState: count,
            countDispatch: dispatch
          }
        }>


        {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>

    </div>
  );
}

export default App;
