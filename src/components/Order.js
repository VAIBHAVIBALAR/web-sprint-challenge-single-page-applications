import React from "react"

export default function Order(props){
    const {
        values,
        submit,
        change,
        errors,
      } = props

      const onSubmit = evt => {
        evt.preventDefault()
        submit()

      }
      const onChange = evt =>{
        const {name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    return <form id="pizza-form" onSubmit={onSubmit}>
        <h1>Build Your Own Pizza</h1>
        <img src="https://thecozycook.com/wp-content/uploads/2018/12/Pizza-Hut-Personal-Pan-Pizza-700x897.gif" alt="image"/>
        <h3>Build Your Own Pizza</h3>
        <label>Name:
             <div>{errors.Name}</div> 
            <input name='Name' id="name-input" type="text" onChange={onChange} defaultValue={values?.Name}/>
        </label>
        <label>Choice of Size
           <select name="size" id="size-dropdown" onChange={onChange} defaultValue={values?.size.trim()}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>   
            <option value="large">Large</option>   
           </select>
        </label>
        <label>Choice of Sauce</label>
        <label>Original Red
            <input
            name="sauce"
            type="radio"
            value="originalred"
            onChange={onChange}
            checked={values?.sauce === 'originalred'}/>
        </label>
        <label>Garlic Ranch
            <input
            name="sauce"
            type="radio"
            value="garlicranch"
            onChange={onChange}
            checked={values?.sauce === 'garlicranch'}/>
        </label>
        <label>BBQ Sauce
            <input
            name="sauce"
            type="radio"
            value="bbqsauce"
            onChange={onChange}
            checked={values?.sauce === 'bbqsauce'}/>
        </label>
        <label>Spinach Alfredo
            <input
            name="sauce"
            type="radio"
            value="spinachalfredo"
            onChange={onChange}
            checked={values?.sauce === 'spinachalfredo'}/>
        </label>
        <label>Add toppings</label>
        <label>Pepperoni
            <input
            name="pepperoni"
            type="checkbox"
            value="pepperoni"
            onChange={onChange}
            checked={values?.pepperoni}/>
        </label>
        <label>Sausage
            <input
            name="sausage"
            type="checkbox"
            value="sausage"
            onChange={onChange}
            checked={values?.sausage}/>
        </label>
        <label>Onions
            <input
            name="onions"
            type="checkbox"
            value="onions"
            onChange={onChange}
            checked={values?.onions}/>
        </label>
        <label>Black Olives
            <input
            name="olives"
            type="checkbox"
            value="blackolives"
            onChange={onChange}
            checked={values?.blackolives}/>
        </label>
        <label>Roasted Garlic
            <input
            name="garlic"
            type="checkbox"
            value="roastedgarlic"
            onChange={onChange}
            checked={values?.roastedgarlic}/>
        </label>
        <label>Artichoke Hearts
            <input
            name="artichoke"
            type="checkbox"
            value="artichokehearts"
            onChange={onChange}
            checked={values?.artichokehearts}/>
        </label>
        <label>Three cheese
            <input
            name="tcheese"
            type="checkbox"
            value="threecheese"
            onChange={onChange}
            checked={values?.threecheese}/>
        </label>
        <label>Pineapple
            <input
            name="pineapple"
            type="checkbox"
            value="pineapple"
            onChange={onChange}
            checked={values?.pineapple}/>
        </label>
        <label>Extra Cheese
            <input
            name="echeese"
            type="checkbox"
            value="extracheese"
            onChange={onChange}
            checked={values?.extracheese}/>
        </label>
        <label>Choice of Substitute</label>
        <label>Anything else you'd like to add?
            <input
            id="special-text"
            type="text"
            name="stext"
            onChange={onChange}

            defaultValue={values?.stext}
            />
        </label>
        <label>

        </label>
        <button id="order-button" type="submit">Add to Order</button>
    </form>
}