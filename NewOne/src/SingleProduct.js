import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./Context/ProductContext";
import PageNavigation from "./components/PageNavigation";
import {Container} from "./styles/Container";
import FormatPrice from "./Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Rating from "./components/Rating";
import AddToCart from "./components/AddToCart";

const API="https://6381eefa9842ca8d3c9d0014.mockapi.io/foodiis"

const SingleProduct=()=>{
  const { getSingleProduct, isSingleLoading, singleProduct } =useProductContext();
  
  const { id } = useParams();

  const{
    id: alias,
    name,
    category,
    price,
    quantity,
    rating,
    image,

  }=singleProduct;


    

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }


  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product image */}
          <div className="product-images">
            <img src={image} alt="product images " />
          </div>
          {/* product data */}
          <div className="product-data">
            <h2>{name}</h2>
            <Rating rating={rating} />
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={Number(price)+100} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
              <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Fastest Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Minutes Delivery</p>
              </div>

              

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>Fresh Food </p>
              </div>
              </div>
              <div className="product-data-info">
              <p>
                Available:
                <span> {quantity > 0 ? "In Stock" : "Not Available"}</span>
              </p>
             
              <p>
                Category :<span> {category} </span>
              </p>
            </div>
            <hr />
            {quantity > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    background-size: cover;
    object-fit: contain;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius:1rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
