import world from '../image/world.png'

export default function Nav (){
    return (
        <div className="nav">
           <img src={world} alt="World" /> 
           <small>My Travel Jornal</small>
        </div>
    )
}