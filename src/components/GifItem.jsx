import React from 'react'

export const GifItem = ( {id, title, url} ) => { // como le mandamos con el spread los props lo desestructuramos aqui arriba
  return (
    <div key={id} className="card">
        <p>{title}</p>
        <img src={url} alt={title} />
    </div>
  )
}
