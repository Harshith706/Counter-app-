import './index.css'
import {useState} from 'react'

const Counter = () => {
    const[count, setCount] = useState(0)

    const onIncrease = () => {
        setCount(preCount => preCount + 1)
    }

    const onDecrease = () => {
        setCount(preCount => preCount - 1)
    }
 
    const onReset = () => {
        setCount(0)
    }   

    return(
        <div className="app">
  

    {/* Glass Card */}
    <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>

        <div className="button-group">
            <button className="button increase" onClick={onIncrease}>
                Increase
            </button>
            <button className="button decrease" onClick={onDecrease}>
                Decrease
            </button>
            <button className="button reset" onClick={onReset}>
                Reset
            </button>
        </div>
    </div>
</div>

    )
}
export default Counter