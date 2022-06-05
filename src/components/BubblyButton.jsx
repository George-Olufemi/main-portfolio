import React from 'react'
import ReactBubblyEffectButton from "react-bubbly-effect-button";

const onClick = () => {
  console.log('Clicked')
}

const BubblyButton = () => {
  return <ReactBubblyEffectButton text="Proceed" color='#fff' bgColor='rgba(37, 99, 235)' onClick={onClick} />
}

export default BubblyButton;