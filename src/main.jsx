import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { HooksApp } from './HooksApp';
import './index.css';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { FormWitchCustomHook } from './02-useEffect/FormWtichCustomHook.jsx';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { Memorize } from './06-memos/Memorize';
//import { MemoHook } from './06-memos/MemoHook';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { Padre } from './07-tarea-memo/Padre';
//import './08-useReducer/intro-reducer';
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';
import { BrowserRouter } from "react-router";




createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <StrictMode>
       <MainApp />
    </StrictMode>
 </BrowserRouter>
)
