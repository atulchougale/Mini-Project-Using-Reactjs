import React from 'react'
import styled from 'styled-components';
import { Button } from "../styles/Button";
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
   
  return <Wrapper>
    <div className="container">
    <div className="grid grid-two-column">
        <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>FOODII</h1>
                <p className="hung">Are You Hungry ?</p>
                <p className="p2">Don't Wait !!!</p>
                <p className="p2">Let Start To Order Food Now !</p>
            <NavLink>
                <Button>CHECKOUT MENU</Button>
            </NavLink>
        </div>
        {/* our homepage image */}
        <div className="hero-section-image">
            <figure>
                <img src="https://i.postimg.cc/tRn8f1Vb/Picsart-22-11-25-18-13-47-750.gif"
                 alt="hero-section-photos" 
                 className='image-style' 
                 />
            </figure>
        </div>
    </div>
    </div>
  </Wrapper>;
    
  
};

const Wrapper = styled.section`
  padding: 12rem 0;
  img {
    min-width: 40rem;
    height: 43rem;
    border-radius: 10px;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
      font-family:Algerian ;
      color:rgb(233, 117, 22);
    }
    .intro-data {
      margin-bottom: 5px;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
      border-radius: 10px;

    }
  }
  .img-style {
    width: 100%;
    height: auto;
    
  }
  .hung{
    color: rgb(212, 233, 22);
    font-size: 50px;
    font-family:Bodoni MT Black ;
  }
  .p2{
    color: blue;
    font-size: 30px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection