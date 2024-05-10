import React from "react";
import styled, { keyframes } from "styled-components";

const StyledNavbar = styled.nav`
  background-image: linear-gradient(
    260deg,
    rgb(42, 244, 152, 255) 0%,
    #3498db 100%); 
    height: 7vh;
    align-items: center;
    display: flex;
  h1{
    text-align: center;
    align-items: center;
    color: white;
    
  }
  
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>Blog de Santiago González</h1>
    </StyledNavbar>
  )
};

