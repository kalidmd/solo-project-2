interface propsType {
   number: number 
}

export default function Count(props: propsType){
    return(
        <div className="counter--count">
            <h2>{props.number}</h2>
        </div>
    )
}