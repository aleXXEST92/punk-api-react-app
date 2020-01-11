import React from 'react'

const LikedButton = (props) =>{
    return (
    <button onClick={() =>props.button()}>Liked</button>
    )
}

export default LikedButton 