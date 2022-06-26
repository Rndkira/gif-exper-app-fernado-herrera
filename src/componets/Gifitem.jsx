import React from 'react'

export const Gifitem = ({image}) => {

    const {title,url} = image
  return (
    <div className=' card'>
         
  
         <img src= {url} alt={title} />
        
    </div>
  )
}
