import React from 'react';
import Nav from './Nav'
import styled from "styled-components";


const HeadBackground = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: black;
    border-bottom: 2px solid grey;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const Title = styled.h1`
    font-size: 3rem;
    color: lime;
`;



function Head() {
    return (
      <HeadBackground>
        <Title>Digital Salt</Title>
        <Nav />
      </HeadBackground>
    );
  }
  
  export default Head;