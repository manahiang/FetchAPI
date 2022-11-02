import React from 'react'

function Individual({image}) {
  return (
    <div>
        <div className="container">
        <img src={image.urls.small} alt="unsplash images"/>
        </div>
    </div>
  )
}

export default Individual