import React from "react";
import styled from "styled-components";

const Div = styled.div`
  // display:flex;
  // flex-direction:column;
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 5px black;
`;
const Body = styled.body`
  max-width: 600px;
  margin: 0 auto;
`;

const H2 = styled.h2`
  // display:flex;
  // justify-content:center;
`;

const Character = (props) => {
  console.log(props);
  return (
    <Body>
      <Div>
        <H2 className="name">Character Name: {props.name}</H2>
        <H2 className="height">Height: {props.height}</H2>
        <H2 className="mass">Weight: {props.mass}</H2>
        <H2 className="birthyear">Birthdate: {props.birthyear}</H2>
        <H2 className="gender">Gender: {props.gender}</H2>
      </Div>
    </Body>
  );
};

export default Character;
