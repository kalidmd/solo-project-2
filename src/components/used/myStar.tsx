import star from "../images/star.png"
import starLarge from '../images/star-large.png'
interface T {
    isFilled: any
    handleClick: any
}

export default function myStar(props: T){
    const starIcon = props.isFilled ? starLarge: star;

    return(
        <div>
            <img 
                src={starIcon} alt="Star"
                className='card--favorite'
                onClick={props.handleClick}
            />
        </div>
    )
}