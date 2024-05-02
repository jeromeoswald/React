import React from 'react'
import './App.css'

function Post(props) {

  return (
   <div>
    <p>{props.name + " - " + props.venue}</p>
    <hr />
    <button>Like</button>
    <button>Comment</button>
   </div>
  )
}

export default Post