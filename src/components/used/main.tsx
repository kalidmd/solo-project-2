import locationIcon from "../image/location.png";

interface T { 
    img: string
    alt: string
    location: string
    link: string
    title: string
    date: number | string
    description: string
}
export default function Main(props: T) {
    return(
            <div className="card">
                <img className="card--img" src={props.img} alt={props.alt} />
                
                <div className="card--contents">
                    <img className="card--contents--location-icon" src={locationIcon} alt={props.alt} />
                    <span className="card--contents--location">{props.location.toLocaleUpperCase()}</span> 
                    <span className="card--contents--link"> <a href={props.link} target="_blank" rel="noopener noreferrer" >View on Google Maps</a> </span>
                    <h1 className="card--contents--title">{props.title}</h1>
                    <p className="card--contents--date">{props.date}</p>
                    <p className="card--contents--description">{props.description}</p>
                </div>
            </div>
    )
}