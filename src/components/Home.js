import React from 'react'
import Pizza from './Pizza'
import { useHistory } from 'react-router-dom'
import '../App.css'

export default function Home(props) {
    const history = useHistory()
    const routeToPizza = () =>{
        history.push('/pizza')
    }
return <div>
    <section className="img">
    <img src="https://d.newsweek.com/en/full/1631708/istock-national-cheese-pizza-day.jpg" alt="Pizza" /> <button id="order-pizza" onClick={routeToPizza}>Pizza?</button>
    </section>
    <div>

    </div>
</div>
}