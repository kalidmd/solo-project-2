//import React, {useState} from 'react';
//import ocean from '../images/ocean.jpg';
// import MyStar from './myStar';
//import Count from '../components/count'
import { useState } from "react"
//import Box from "./Box"
//import Boxes from "./boxes"

export default function Example(){

                    //onClick Event
    // <div className='ocean'>
    //     <img src={ocean} alt="ocean" />
    //     <button>Click Me</button>
    // </div>
                    // VANILA JS INSTANCE TO STATE
    // let timeOfDay: string
    // let date = new Date() ;
    // let hour = date.getHours();
    // let minutes = date.getMinutes();
    // console.log(hour);

    // if(hour >= 4 && hour < 12){
    //     timeOfDay = 'morning'
    // } else if(hour >= 12 && hour < 17){
    //     timeOfDay = 'afternoon'
    // } else if(hour >= 17 && hour <= 20){
    //     timeOfDay = 'evening'
    // }else {
    //     timeOfDay = 'night'
    // }

    // function greeting(name: string){ 
    //        return `Good ${timeOfDay} ${name}`;
    // }

    // console.log(greeting('Kalid'));
    
                    // COUONTER
    // let [value, setValue] = useState(0)
    // console.log(value);

    // function increament(){
    //    return(setValue(prevValue => prevValue + 1))
        
    // }
    // function decreament(){

    //     return setValue(preValue => preValue - 1)
    // }
    // <div className='counter'>
    //     <div className="counter--value">
    //         <p>{value}</p>
    //     <button onClick={decreament} className="decreament btn">-</button>
    //     <button onClick={increament} className="increament btn">+</button>
    //     </div>
    // </div>
            //  STATE USING TERNARY OPERATOR
    // if(isGoingOut = true) {
        //     answer = "Yes"
        // }else{
            //     answer = "No"
            // }

    // const [isGoingOut, setIsGoingOut] = useState(true);
    // console.log("is Going Out: " + isGoingOut);
    // console.log("is Not Going Out: " + !isGoingOut);
    
    // function handleClick() {
    //     setIsGoingOut(prevState => !prevState)
    // }

    // <div className='state'>
    //     <h1 className="state--title">Do I feel like going out tonight?</h1>
    //     <div onClick={handleClick} className="state--value">
    //         <h1>{isGoingOut ? "Yes" : "No"}</h1>
    //     </div>
    // </div>

                    //STATE USING OBJ CARD
    // const [contact, setContact] = useState({
    //    firstName: "John",
    //    lastName: "Doe",
    //    phone: "+1 (719) 555-1212",
    //    email: "itsmyrealname@example.com",
    //    isFavorite: false
    // }
    // )
    // let starIcon = contact.isFavorite? starLarge: star;
    // function toogleFav(){
    //     setContact(prevContact=>{
    //         return{
    //             ...prevContact, isFavorite: !prevContact.isFavorite
    //         }
    //     })
    // }
    // <main>
    //     <article className="card">
    //         <img src={ocean} alt="Jhon Doe" className='card--image' />
    //         <div className="card--info">
    //             <img 
    //                 src={starIcon} alt="Star"
    //                 className='card--favorite'
    //                 onClick={toogleFav}
    //             />
    //             <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
    //             <p className="card--contact">{contact.phone}</p>
    //             <p className="card--contact">{contact.email}</p>
    //         </div>
    //     </article>
    // </main>
 
         
                // STATE IS IMPORTANAT
    // const [result, setResult] = useState(true)
    // let stateText = result? "Yes": "No"

    // function changeState(){
    //     setResult(prevResult=>!prevResult)
    // }
    //     <div className="state">
    //         <h1 className="state--title">Is state important to know?</h1>
    //         <div onClick={changeState} className="state--value">
    //             <h1>{stateText}</h1>
    //         </div>
    //     </div>

            // RENDER THING STATE TO UI USING ARRAY
    // const [thing, setThing] = useState([""])
    
    // const thingEl = thing.map(things=>{ 
    //     return(
    //         <p key={things} className='things'>{things}</p>
    //     )
    // })
    // function addItem(){
    //     setThing(prevThing => { 
    //         return [...prevThing, 
    //         `Thing ${thing.length}`]       
    //         })
    //     console.log(thing);    
    // }
        
    // <div className='green-btn'>
    //     <button onClick={addItem} >Add Item</button>
    //         {thingEl}
    // </div>

                        // COUONTER
    // const [count, setCounter] = useState(0)

    // function add(){
    //     setCounter(prevCounter=> prevCounter + 1)
    // }
    // function sub(){
    //     if (count > 0) {
    //         setCounter(prevCounter=> prevCounter - 1)   
    //     }
    // }      
   
    // <div className='counter'>
    //     <div className="counter--value">
    //         <button onClick={sub} className="decreament btn">-</button>
    //         <Count
    //             number={count}
    //         />
    //         <button onClick={add} className="increament btn">+</button>
    //     </div>
    // </div>
             //STATE USING OBJ CARD    
    // const [contact, setContact] = useState({
    //     firstName: "John",
    //     lastName: "Doe",
    //     phone: "+1 (719) 555-1212",
    //     email: "itsmyrealname@example.com",
    //     isFavorite: false
    // })
    

    // function toogleFav(){
    //     setContact(prevState=> ({
    //         ...prevState,
    //         isFavorite: !prevState.isFavorite
    //     }))
    // }
    // <main>
    //     <article className="card">
    //         <img src={ocean} alt="Jhon Doe" className='card--image' />
    //         <div className="card--info">
    //             {/* <MyStar
    //                 isFilled={contact.isFavorite}
    //                 handleClick={toogleFav}
    //             /> */}
    //             <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
    //             <p className="card--contact">{contact.phone}</p>
    //             <p className="card--contact">{contact.email}</p>
    //         </div>
    //     </article>
    // </main>
                            // TOOGLE USING IF STATEMENT IN BOX EXAMPLE
    // function toogle(id: number){
    //     setSquared(prevSquare=> {
    //         const newSquare = []
    //         for(let i = 0; i < prevSquare.length; i++){
    //             const currentSquare = prevSquare[i]
    //             if (currentSquare.id === id){
    //                 const updateSquare = {
    //                     ...currentSquare, 
    //                     on: !currentSquare.on
    //                 }
    //             newSquare.push(updateSquare)
    //             } else{
    //                 newSquare.push(currentSquare)
    //             }
    //         }
    //         return newSquare
            
    //     })      
    // }

                        // BOXES
    // const [squares, setSquared] = useState(Boxes)

    // function toogle(id: number){
    //     setSquared(prevSquares=>{
    //         return(
    //             prevSquares.map(square=>{
    //                 return(
    //                     square.id === id ? {
    //                         ...square, 
    //                         on: !square.on
    //                     } : square
    //                 )
    //             })
    //         )
    //     })
    // }

    // const squareEl = squares.map(square=>(
    //         <Box
    //             key={square.id}
    //             on={square.on}
    //             handleClick={()=>toogle(square.id)}
    //         />
    // ))

    //     <main className="box">
    //        <h1>Boxes will go here</h1>
    //        <div className="box--container">
    //            {squareEl}
    //        </div>
    //     </main>
            //  UNREAD MESSAGES

    // const [messages, setMessages] = useState(["A"])
    // let display: any

    // if(messages.length === 0){
    //     display = "You're all cought up!"
    // }else if(messages.length > 0){
    //     const pronoun = messages.length === 1 ? "message" : "messages" 
    //     display = `You've ${messages.length} ${pronoun}.`
    // }
    // <div>
    //         {
    //             messages.length === 0 ?
    //             <h1>You're all cought up!</h1> :
    //             <h1>You've {messages.length} {messages.length > 1 ? "messages": "message"}.</h1>

    //         }
    // </div>

    // const [formData, setFormData] = useState(
    //     {firstName: "", lastName: "", email: ""})
    
    // console.log(formData);
    

    // function handleChange(event: any){  
    // setFormData(prevFormData=>{
    //     return(
    //         {...prevFormData, 
    //         [event.target.name]: event.target.value}
    //     )
    // })
    // }
                    // FORM EXAMPLE
    // const [formData , setFormData] = useState({
    //     firstName: "",
    //     lastName: "", 
    //     email: "", 
    //     comments: "",
    //     isFriendly: false,
    //     employement: "",
    //     favColor: ""
    // })
    // console.log(formData.favColor);
    
    
    // function handleChange(event: any){
    //     let {name, value, checked, type} = event.target
         
    //     return(
    //         setFormData(prevData=>{
    //             return(
    //                 {
    //                     ...prevData,   
    //                     [name]: type === "checkbox" ? checked :value
    //                 }
    //             )
    //         })
    //     )
    // }
    // function handleSubmit(event: any) {
    //     event.preventDefault()
    //     console.log(formData);
    // }
    // <form onSubmit={handleSubmit} className="form">
    //             <input 
    //                 type="text" 
    //                 placeholder="First Name"
    //                 onChange={handleChange}  
    //                 name="firstName"  
    //                 value={formData.firstName}
    //             />
    //             <input 
    //                 type="text" 
    //                 placeholder="Last Name"
    //                 onChange={handleChange}   
    //                 name="lastName" 
    //                 value={formData.lastName}
    //             />
    //             <input 
    //                 type="email" 
    //                 placeholder="Email"
    //                 onChange={handleChange}   
    //                 name=  "email" 
    //                 value={formData.email}
    //             />
    //             <textarea
    //                 placeholder="Comments."
    //                 onChange={handleChange} 
    //                 name="comments" 
    //                 value={formData.comments}
    //             />
    //             <div>
    //                 <input 
    //                     type="checkbox" 
    //                     id="isFriendly"
    //                     name="isFriendly"
    //                     checked={formData.isFriendly}
    //                     onChange={handleChange}
    //                 />
    //                 <label className="label" htmlFor="isFriendly">Are You Friendly?</label>
    //                 <br />
    //             </div>

    //             <fieldset>
    //                 <legend>Current Employment status</legend>

    //                 <input 
    //                     type="radio" 
    //                     id="unemployed" 
    //                     name="employement"
    //                     value="unemployed"
    //                     checked={formData.employement === "unemployed"}
    //                     onChange={handleChange}
    //                 />
    //                 <label htmlFor="unemployed">Unemployed</label>
    //                 <br />

    //                 <input 
    //                     type="radio" 
    //                     id="part-time"
    //                     name="employement"
    //                     value="part-time"
    //                     checked={formData.employement === "part-time"}
    //                     onChange={handleChange}
    //                 />
    //                 <label htmlFor="part-time">Part-time</label>
    //                 <br />

    //                 <input 
    //                     type="radio" 
    //                     id="full-time"
    //                     name="employement"
    //                     value="full-time"
    //                     checked={formData.employement === "full-time"}
    //                     onChange={handleChange}
    //                 />
    //                 <label htmlFor="full-time">Full-time</label>
    //             </fieldset>

    //             <label htmlFor="favColor">What is Your Favorite Color?</label>
    //             <select 
    //                 name="favColor" 
    //                 id="favColor" 
    //                 onChange={handleChange}
    //                 value={formData.favColor}    
    //             >
    //                 <option value="Choose">Choose</option>
    //                 <option value="red">Red</option>
    //                 <option value="Orange">Orange</option>
    //                 <option value="Yellow">Yellow</option>
    //                 <option value="Green">Green</option>
    //                 <option value="Blue">Blue</option>
    //                 <option value="Indigo">Indigo</option>
    //                 <option value="Violet">Violet</option>
    //             </select>
    //             <button>Submit</button>
    //         </form>
                            // FORM WITH PASSWORD
    // const [formData, setFormData] = useState(
    //     {
    //         email: "",
    //         password: "",
    //         confirmPassword: "",
    //         isNewsletter: false
    //     }
    // )
    // function handleChange(event: any) {
    //     let {name, value, checked, type} = event.target;        
    //     setFormData(prevData => ({
    //         ...prevData,
    //         [name]: type === "checkbox"? checked : value
    //     }))
    // }

    // function submitChange(event: any) {
    //     event.preventDefault()
    //     if (formData.password === formData.confirmPassword){
    //         console.log("Succssfully Signed Up");
    //         console.log(formData);
    //     }
    //     else {
    //         console.log("Password do not match!");
    //         return
    //     }  
    //     if (formData.isNewsletter === true){
    //         console.log("Thanks for signing up for our newsletter!")
    //     }
    // }

    // <div onSubmit={submitChange} className="form-container">
    //         <form >
    //             <input
    //                 type="email" 
    //                 name="email"
    //                 value={formData.email}
    //                 placeholder="Email"
    //                 onChange={handleChange}
    //             />  
    //             <br />
    //             <br />
    //             <input 
    //                 type="password" 
    //                 name="password"
    //                 value={formData.password}
    //                 placeholder="Password"
    //                 onChange={handleChange}
    //             />  
    //             <br />
    //             <br />
    //             <input 
    //                 type="password" 
    //                 name="confirmPassword"
    //                 value={formData.confirmPassword}
    //                 placeholder="Confirm Password"
    //                 onChange={handleChange}
    //             />  
    //             <br />
    //             <br />
    //             <input 
    //                 type="checkbox"
    //                 id="isNewsletter" 
    //                 name="isNewsletter"
    //                 checked={formData.isNewsletter}
    //                 onChange={handleChange}
    //             />
    //             <label htmlFor="isNewsletter">i want to join the newsletter</label>
    //             <br />
    //             <br />
    //             <button className="submit-btn">Sign Up</button>
    //         </form>     
    //     </div>

    const [starWarsData, setStarWarsData] = useState({})
    console.log(starWarsData);
    
        fetch("https://swapi.dev/api/people/1")
                .then(res => res.json())
                .then(data => setStarWarsData(data))
    return (
        <div>
                <pre>{JSON.stringify(starWarsData, null, 2)}</pre>     
        </div>
    )
}