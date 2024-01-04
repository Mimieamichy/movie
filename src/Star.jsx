import React from 'react'

export default function Star({rate}) {
  let stars = []
  for(let i=0; i<rate; i++){
    stars.push(
      <img 
      key={i}
      src='https://sandpack-bundler.vercel.app/img/gold-star.svg'
      alt='rating star'
      width={"20px"}
      />
    )
  }
  return (
    <div>
      {stars}

    </div>
  )
}
