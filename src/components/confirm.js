import React from 'react'

function Confirm({ order }) {
  if (!order) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }
  console.log(order)
  return ( order.map(details => {
     return(
    <div className='friend container'>
      <h2>{details.Name}</h2>
      <p>Size: {details.size}</p>
      <p>Special: {details.stext}</p>


      {!!details.topping && !!details.topping.length &&
        <div>
          Toppings:
          <ul>
            {details.topping.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>)
 }))
}

export default Confirm;
