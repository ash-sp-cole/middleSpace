
import React, { useState } from 'react';
import './style.css';
import hoomeScreen from "../../Media/homeScreen.JPG";
import {useSpring, animated as a} from "react-spring";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DisplayBox from '../DisplayBox';

const TestSpring = ()=>{
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(10px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 5, friction: 80 }
    })
    return (
      <div onClick={() => set(state => !state)}>
        <a.div  style={{ opacity: opacity.interpolate(o => 1 - o), transform, }} ><h1> click</h1></a.div>
        <a.div  style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}><DisplayBox/></a.div>
      </div>
    )
  }


    

export default TestSpring;