import styled from "styled-components";


const Services = () => {
    return <Wrapper>

        <div className="container">
            <div><p className="serv">Services</p></div>
            <div className="grid grid-three-column">
                <div className="services-1">
                    <div className="card">
                        <img src="https://i.ibb.co/GRGQCXP/thumsup.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">No Minimum Order</h5>
                            <p className="card-text">Order in for yourself or for the group, with no restrictions on order value.</p>
                        </div>
                    </div>
                </div>

                <div className="services-1">
                    <div className="card">
                        <img src="https://i.ibb.co/F3hCVp4/live-tracking.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Live Order Tracking</h5>
                            <p className="card-text">Know where your order is at all times, from the restaurant to your doorstep.</p>
                        </div>
                    </div>
                </div>

                <div className="services-1">
                    <div className="card">
                        <img src="https://i.ibb.co/WyXR83S/delivery-boy.jpg" className="card-img-top1" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Lightning-Fast Delivery</h5>
                            <p className="card-text">Experience Foodii's superfast delivery for food delivered fresh & on time.</p>
                        </div>
                    </div>
            </div>
            </div>
        </div>

    </Wrapper>

};

const Wrapper = styled.section` 
padding: 5rem 0;
background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
    
font-family: Arial, Helvetica, sans-serif;
border-radius: 10px;
text-align: center;
.grid {
  gap: 4.8rem;
}
.services-1{
  width: auto;
  height: 42rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background: ${({ theme }) => theme.colors.bg};
  text-align: center;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}



.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color:transparent;
    background-clip: border-box;
    /* border: 1px solid black; */
    border-radius: 0.25rem;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .card-img,
  .card-img-top{
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    
  }
  
  .card-img,
  .card-img-top {
    border-top-left-radius: calc(2rem - 1px);
    border-top-right-radius: calc(2rem - 1px);
  }
  .card-img-top1{
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height:19rem;
    border-top-left-radius: calc(2rem - 1px);
    border-top-right-radius: calc(2rem - 1px);

  }
  .card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
  }

  .card-title {
    margin-bottom: 0.75rem;
    font-size: 40px;
    font-weight: bold;
    color: black;
  }


  .card-text:last-child {
    margin-bottom: 5px;
    font-size: 25px;
    color: black;
  }
  .serv{
    font-size:70px;
    margin-bottom:20px;
    color:#007bff;
  }


`;

export default Services