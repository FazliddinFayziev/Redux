import React from 'react'
import { actions } from '../Store';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(actions.increment())
    }

    const decriment = () => {
        dispatch(actions.decriment())
    }

    const add = () => {
        dispatch(actions.add(10))
    }
    return (
        <div className='main'>
            <div>
                <h2>Home</h2>
                <p>{counter}</p>
                <button onClick={increment}>inc</button>
                <button onClick={decriment}>dec</button>
                <button onClick={add}>Add by 10</button>
            </div>
        </div>
    )
}

export default Home