import { useState } from 'react'
import './App.css'
import List from './List'

function App() {

  const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "mango", calories: 102},
                    {id: 3, name: "banana", calories: 103},
                    {id: 4, name: "orange", calories:89}
                   ];

  const vegetables = [{id: 5, name: "potato", calories: 50},
                      {id: 6, name: "celery", calories: 102},
                      {id: 7, name: "carrots", calories: 23},
                      {id: 8, name: "corn", calories:63}
                     ];

  return (
    <>
      <List items={fruits} category="Fruits"/>
      <List items={vegetables} category="Vegetables" />
    </>
  )
}

export default App
