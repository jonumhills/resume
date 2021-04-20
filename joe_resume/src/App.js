import React,{useEffect,useState} from 'react';
import "./style.css";





const App = () => {
  const [contacts, setContacts] =  useState([]);
  useEffect(()=>{
  fetch("https://randomuser.me/api/?results=3")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setContacts(data.results);
  });},[]);

  return(
    <>
    {contacts.map(contact => (
      <ContactCard
      avatar = {contact.picture.large}
      name = {contact.name.first+" "+contact.name.last}
      email = {contact.email}
      age = {contact.dob.age}/>
    ))}
    </>
  );
}

const ContactCard = props =>  {
   const [showAge,setShowAge] = useState(true);


  return(
    <div className="contact-card">
      <img src={props.avatar}/>
      <div className="user-details">
        <p>name: {props.name}</p>
        <p>email: {props.email}</p>
        {showAge && <p>age: {props.age}</p>} 
        <button onClick={() => setShowAge(!showAge)}>Toggle age</button>
      </div>
      
    </div>
  );
  };

 
   

export default App;