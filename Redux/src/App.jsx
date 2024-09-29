import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Component/AddTodo';
import ShowTodo from './Component/ShowTodo';

function App()
{
  return (
    <>
    <AddTodo/>
    <ShowTodo/>
    </>
  );
}

export default App
