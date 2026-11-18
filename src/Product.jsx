// import React from 'react'

// function Product() {
//     fetch("https://dummyjson.com/products") .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   return (
//     <div>
      
//     </div>
   
//   )
// }

// export default Product
import React, { useEffect, useState } from 'react'

function Product() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products)
      })
  }, [])

  return (
   <div>

    {
        products.map((products)=>(

            <div key={products.id}>
                <h2>{products.title}</h2>

                </div>
        )
    
        )

    }
   </div> 
  )}


export default Product

