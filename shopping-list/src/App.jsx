import { useState } from "react";

const data = [
  {
    id: 0,
    name: "cabbage",
    quantity: 2,
    price: 12,
    image: "https://i.pravatar.cc/48?u=118836",
  },
  {
    id: 1,
    name: "brinjal",
    quantity: 2,
    price: 11,
    image: "https://i.pravatar.cc/48?u=118836",
  },
  {
    id: 2,
    name: "tomato",
    quantity: 5,
    price: 9,
    image: "https://i.pravatar.cc/48?u=118836",
  },
  {
    id: 3,
    name: "onion",
    quantity: 7,
    price: 14,
    image: "https://i.pravatar.cc/48?u=118836",
  },
  {
    id: 4,
    name: "capsicum",
    quantity: 1,
    price: 15,
    image: "https://i.pravatar.cc/48?u=118836",
  },
];

function App() {
  const [vegie, setVegie] = useState(data);
  const [selected, setSelected] = useState(null);

  function handleSelection(vegie) {
    setSelected((curr) => (curr?.id === vegie.id ? null : vegie));
  }

  function handleBack() {
    setSelected(null);
  }

  return (
    <div className="wrapper">
      <ShoppingList
        vegie={vegie}
        selected={selected}
        onSelection={handleSelection}
      />
      {selected && <Card card={selected} onHandleBack={handleBack} />}
    </div>
  );
}

function Card({ card, onHandleBack }) {
  return (
    <div className="card-div">
      <img src={card.image} alt={card.name} />
      <h3>{card.name}</h3>
      <div className="inner-div">
        <span>Price: {card.price}</span>
        <span>Quantity: {card.quantity}</span>
      </div>
      <Button onClick={onHandleBack}>Back</Button>
    </div>
  );
}

function ShoppingList({ vegie, selected, onSelection }) {
  return (
    <ul className="shopping-list">
      {vegie.map((el) => (
        <Vegetable
          vegie={el}
          selected={selected}
          onSelection={onSelection}
          key={el.id}
        />
      ))}
    </ul>
  );
}

function Button({ children, onClick }) {
  return (
    <div className="btn-div">
      <button className="btn" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

function Vegetable({ vegie, selected, onSelection }) {
  const isSelected = selected?.id === vegie.id;

  return (
    <li className="veg-list">
      <img src={vegie.image} alt={vegie.name} />
      <h3> {vegie.name}</h3>
      <Button onClick={() => onSelection(vegie)}>
        {isSelected ? "Close" : "Show More"}
      </Button>
      <div>❌</div>
    </li>
  );
}

export default App;
