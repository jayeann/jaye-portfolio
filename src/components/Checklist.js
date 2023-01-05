import React, { useState } from 'react';


const list = [
  "Banana",
  "Apple",
  "Orange",
  "Pineapple",
  "Watermelon",
  "Mango"
]

const Checklist = () => {
  const [cartList, setCartList] = useState([]);

  const handleCheckbox = (e) => {

    console.log(e.target.checked)

    const checkExist = cartList.some(item => e.target.id === item.productId);

    if (!checkExist) {
      setCartList(oldArray => [...oldArray, {
        'productId': e.target.id,
        'productName': e.target.value
      }])
    }

    console.log(cartList)

  }

  return (

    <div>

      <h3>Product List:</h3>
      {list.map((val, key) => {
        let uniqueKey = val.toLowerCase() + '-' + key
        return (
          <div key={key}>
            <label><input id={uniqueKey} type="checkbox" onChange={handleCheckbox} value={val} />{val}</label>
          </div>
        )
      })}

      <h4>Added to cart: {cartList.length}</h4>

    </div>
  )

}

export default Checklist;