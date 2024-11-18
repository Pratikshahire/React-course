import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div classname="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img classname="avatar" src="pic1.jpeg" alt="John Doe"></img>
}

function Intro() {
  return (
    <div>
      <h1>John Doe</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </div>
  )
}

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill skill='React' emoji='💪' color="blue" /> 
      <Skill skill='HTML+CSS' emoji='💪' color="orange" /> 
      <Skill skill='JavaScript' emoji='💪' color="yellow" /> 
      <Skill skill='Web design' emoji='💪' color="orangered" /> 
    </div>
  )
}

function Skill(props) {
  return (
    <div classname="skill" style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

