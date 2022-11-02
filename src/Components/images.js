import React from 'react'
import Individual from './Individual'

const Images = ({ images }) => {

    return images.map((image) => (
        <div>
            <Individual key={image.id} image={image} />
        </div>
    ))

}

export default Images