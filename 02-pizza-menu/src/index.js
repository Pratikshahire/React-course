import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App() {
    return (
    <div className="container">
        <Header />
        <Menu />
        <Footer />

    </div>
    );
}

function Header() {

    // const style = {
    //     color: "red",
    //     fontSize: "48px",
    //     textTransform: "uppercase",
    // };

    const style = {};

    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    )
}

function Menu() {


    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {/* using && */}
            {/* {numPizzas > 0 && <ul className="pizzas">
                {pizzas.map((pizza) => (
                    <Pizza pizzaObj={pizza} key={Pizza.name} />
                ))}
            </ul>} */}

            {/* using ternary operator */}
            {numPizzas > 0 ? <ul className="pizzas">
                {pizzas.map((pizza) => (
                    <Pizza pizzaObj={pizza} key={Pizza.name} />
                ))}
            </ul> : <p>We're still working on menu, please visit later</p>}

        </main>
    )

}

function Pizza(props) {

    // if(props.pizzaObj.soldOut) return null;
    return (
        // <div className={classNames("pizza", { "sold-out": props.pizzaObj.soldOut })}> another method for conditinally rendering CSS classes, we need to install ad import the classnames library, looks more simple than the `` and $ mwthod
        <div className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                {props.pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>{props.pizzaObj.price}</span>} {/*conditionally rendering the text*/}
            </div>
        </div>
    );
}

function Footer() {
    const hour  = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // conditional rendering with multiple returns
    // if(isOpen)
    // {
    //     <Order closeHour={closeHour} />
    // }
    // else
    // {
    //     return <footer className="footer">
    //     <p>
    //     We're happy to welcome you between {openHour}:00 to {closeHour}:00.
    //     </p>
    //  </footer>
    // }


    // conditional rendering using ternary operator
    return <footer className="footer">
        {/* { new Date().toLocaleTimeString() }. We're currently open! */}

        {isOpen ? (
            <Order closeHour={closeHour} />
        ) : <p>We're happy to welcome you between {openHour}:00 to {closeHour}:00. </p>}


    </footer>
}

function Order(props) {
    return (
        <div className="order">
                <p>
                    We're open until {props.closeHour}:00. Come visit us  or order online!
                </p>
                <button className="btn">
                    Order
                </button>
            </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
); 