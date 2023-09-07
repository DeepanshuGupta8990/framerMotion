import React from "react";
import { motion, useScroll } from "framer-motion";
import { styled } from "styled-components";
import Lorem from "../component/Lorem";

export default function About() {
  const { scrollYProgress } = useScroll();
  return (
    <Container>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <h1>
        <code>useScroll</code> demo
      </h1>
      <Lorem/>
    </Container>
  );
}

const Container = styled.div`
  .progress-bar {
    position: fixed;
    top: 46px;
    left: 0;
    right: 0;
    height: 10px;
    /* background: red; */
    background: linear-gradient(250deg, #7b2ff7, #f107a3);
    transform-origin: 0%;
  }
  
`;
