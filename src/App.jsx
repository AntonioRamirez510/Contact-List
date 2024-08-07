import './App.css';
import {useState} from 'react'
import './components/ContactList'
import ContactList from './components/ContactList';

const App = () => {


  return (
    <>
      <h1>Welcome!</h1>
      <ContactList/>
    </>
  )
}

export default App
