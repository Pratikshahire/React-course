import React from 'react'

const List = (props) => {

    const itemList = props.items;
    const category = props.category;

    // const fruits = [{id: 1, name: "apple", calories: 95},
    //                 {id: 2, name: "mango", calories: 102},
    //                 {id: 3, name: "banana", calories: 103},
    //                 {id: 4, name: "orange", calories:89}
    //                ];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); //numeric
    // fruits.sort((a, b) => b.calories - a.calories); //reverse numeric

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); //filter fruits with calories less than 100
    // const HighCalFruits = fruits.filter(fruit => fruit.calories >= 100); //filter fruits with calories greater than or equal to 100
    

    const listItems = itemList.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);


  return (
    <>
    <h2 className='list-category'>{category}</h2>
    <ul className='list-items'>{listItems}</ul>
    </>
  )
}

export default List