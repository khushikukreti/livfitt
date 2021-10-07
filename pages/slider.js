import React from 'react'
import { useState } from 'react'
// import Slider from 'react-rangeslider'
import { Slider, RangeSlider, InputGroup, InputNumber, Row, Col } from 'rsuite';

// To include the default styles
import 'react-rangeslider/lib/index.css'
function slider() {
    var Slider = require('react-rangeslider')
    // let [ivalue,setValue]=useState(50)
    const [value, setValue] = React.useState([10, 50]);
    // let setval=(e)=>{
    //     setValue(e.target.value)
    // }
    return (
        <div>
     <Row>
      <Col md={10}>
        <RangeSlider
          progress
          style={{ marginTop: 16 }}
          value={value}
          onChange={value => {
            setValue(value);
          }}
        />
      </Col>
      <Col md={8}>
        <InputGroup>
          <InputNumber
            min={0}
            max={100}
            value={value[0]}
            onChange={nextValue => {
              const [start, end] = value;
              if (nextValue > end) {
                return;
              }
              setValue([nextValue, end]);
            }}
          />
          <InputGroup.Addon>to</InputGroup.Addon>
          <InputNumber
            min={0}
            max={100}
            value={value[1]}
            onChange={nextValue => {
              const [start, end] = value;
              if (start > nextValue) {
                return;
              }
              setValue([start, nextValue]);
            }}
          />
        </InputGroup>
      </Col>
    </Row>
  
         {/* <input type="range"  min="0" max="1000" value="50" id="myRange" onChange={setval}></input>
         <p>{ivalue}</p>
         <input type="number" min="0" max="1000" value="50" id="myRange" onChange={setval}></input> */}
        </div>
    )
}

export default slider
 