import React from 'react';
import Head from './Head';
import ContentWrap from './ContentWrap';
import styled from "styled-components";

const Background = styled.div`
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    background: white;
    border: 2px solid black;
    border-radius: 15px;
    margin-top: 10px;
`;


function Body() {
    return (
      <Background>
        <Head />
        <ContentWrap />
      </Background>
    );
  }
  
  export default Body;