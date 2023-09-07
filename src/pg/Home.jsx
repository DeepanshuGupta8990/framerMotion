import React, { useState } from 'react'
import { motion } from "framer-motion";
import {styled} from 'styled-components';

export default function Home() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  return (
   <Component>
    <div className={`switch ${isOn? "dd" : ""}`} onClick={toggleSwitch}>
      <motion.div className={`handle ${isOn? "handle2" : ""}`} layout transition={spring} />
    </div>
   </Component>
  )
}


const spring = {
  type: "spring",
  stiffness: 1000,
  damping: 30
};

const Component = styled.div`
  height: 92vh;
  background: linear-gradient(250deg, #7b2ff7, #f107a3);
  display: flex;
  justify-content: center;
  align-items: center;
  .switch {
  width: 160px;
  height: 100px;
  /* background-color: rgba(10, 233, 36, 0.4); */
  background: linear-gradient(250deg, #f107a3, #7b2ff7);
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
}

.dd{
  justify-content: flex-end;
}

.handle {
  width: 80px;
  height: 80px;
  background: linear-gradient(250deg, #ffffff, #b5b5bb);
  border-radius: 40px;
}
.handle2{
  background: linear-gradient(250deg, black, #2e2e2f);
}

`