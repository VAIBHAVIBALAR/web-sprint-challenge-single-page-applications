import React, { useState, useEffect } from "react";
import axios from 'axios'
import Confirm from "./Order";
import Order from './Order'
import schema from '../validation/formSchema';
import {reach} from 'yup'
import { useHistory } from "react-router-dom";

export default function Pizza(props){
    const{
        order,
        setOrder,
    } =props;
const initialFormValues ={
    Name:'',
    size:'small',
    sauce: '',
    stext: '',
    pepperoni:false,
    sausage:false,
    onions:false,
    olives:false,
    garlic:false,
    artichoke:false,
    tcheese:false,
    pineapple:false,
    echeese:false,
  }
  const initialFormErrors ={
    Name:'',
    size:'',
  }

  const history = useHistory()
  const routeToConfirm = () =>{
      history.push('/Confirm')
  }

  const[formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors) 

//   const getOrder = () =>{
//     axios.get('https://reqres.in/api/orders')
//     .then(res=>{
//       console.log(res.data.data)
//       setOrder(res.data.data)
//     })
//     .catch(err=>{
//       console.log(err)
//     })
//   }

  const postNewOrder = newOrder =>{
    console.log("1")

    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res =>{
      console.log("2")
      console.log(res.data)

      setOrder([res.data, ...order])
      routeToConfirm();
    })
    .catch(err =>{
      console.log(err)
    })
    .finally(()=>{
     // setFormValues(initialFormErrors)
    })
  }
  
  const validate = (name, value) => {
      if(name === 'Name'){
    reach(schema, name)
     .validate(value)
     .then(() => setFormErrors({...formErrors, [name]: '' }))
     .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }}
  const inputChange = (name, value) =>{
      validate(name,value)
      setFormValues({...formValues, [name]: value})
  }
  
  const formSubmit = () => {
    const newOrder = {
      Name: formValues.Name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      stext: formValues.stext.trim(),
      // 🔥 STEP 7- WHAT ABOUT HOBBIES?
      topping: ['pepperoni',
        'sausage',
        'onions', 
        'olives',
        'garlic',
        'artichoke',
        'tcheese',
        'pineapple',
        'echeese'].filter(top => formValues[top] === true)
    } 
    if(formValues.sauce == ""){
    delete formValues.sauce;
}
   postNewOrder(formValues)
   
  }
  useEffect(()=>{
  //getOrder()
  }, [])

  
    return <div>
    <Order
    values={formValues}
    change={inputChange}
    submit={formSubmit}
    errors={formErrors}
    />
    </div> 

    
}

