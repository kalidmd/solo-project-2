import React, { useState } from "react"
interface T {
    user: string
}

export default function Head(props: T){
    return(
        <div>
            <p>Current User: {props.user}</p>
        </div>
    )
}