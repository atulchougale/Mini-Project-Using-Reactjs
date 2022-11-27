import React from 'react'
import styled from 'styled-components';
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';
import { useProductContext } from './Context/ProductContext';


const About = () => {
const {myName}=useProductContext();

  return <Wrapper> {myName}
  <div className="container">
  <div className="grid grid-two-column">
      <div className="hero-section-data">
          <p className="intro-data hung">Welcome to</p>
          <h2>Who are FOODII ?</h2>
              
              <p className="p2">Launched in 2022, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. 
                        Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants.
                        On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. 
                        We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.
                    </p>
              
          <NavLink>
              <Button>CHECKOUT MENU</Button>
          </NavLink>
      </div>
      {/* our homepage image */}
      <div className="hero-section-image">
          <figure>
              <img src="https://i.postimg.cc/85RXpvdf/Picsart-22-11-25-18-17-57-647.jpg"
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
  min-width: 30rem;
  height: 35rem;
  border-radius: 10px;
}
.hero-section-data {
  p {
    margin: 2rem 0;
  }
  h2 {
    text-transform: capitalize;
    font-weight: bold;
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
  font-size: 30px;
  font-family:Bodoni MT Black ;
}
.p2{
  color: #111213 ;
  font-size: 18px;
  font-weight:bold;
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

export default About