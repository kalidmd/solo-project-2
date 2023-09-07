import React from 'react'

export default function Box(props: any){
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    return(
        <div 
            className="box-elements" 
            key={props.id}
            style={styles}
            onClick={props.handleClick}
            >
        </div>
    )
} 