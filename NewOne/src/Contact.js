import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;
      background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
      border-radius: 10px;
      padding: 5rem 0 5rem 0;
      width: 800px;

      .contact-form {
        max-width: 50rem;
        margin: auto;
      

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            margin-left:15rem;


            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }

    .love{
      width:80%;
      height: 300px;
      justify-content: center;
      background-image: url('https://i.ibb.co/xqfdmCj/cuckis.png');
  
      background-repeat: no-repeat;
      background-size: 100% 100%;
      
      margin-left: 180px;
      margin-top: 30px;
      border-radius: 10px;
      
      
    }
    .love p{
      font-size: 40px;
      font-weight: bold;
      font-family: Georgia, 'Times New Roman', Times, serif;
      text-align: center;
      padding-top: 100px;
      margin-left: 50px;
      color:#fff;
      text-shadow: 3px 2px 2px #15bd69;
    }
   .radius{
    border-top-left-radius: calc(1rem - 1px);
    border-bottom-right-radius: calc(1rem - 1px);
   }
  `;

  return  <Wrapper>
    <h2 className="common-heading">Contact Us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.791105851!2d74.1688266149599!3d16.708456761397443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2z4KSV4KWL4KSy4KWN4KS54KS-4KSq4KWB4KSwLCDgpK7gpLngpL7gpLDgpL7gpLfgpY3gpJ_gpY3gpLA!5e0!3m2!1shi!2sin!4v1669381128827!5m2!1shi!2sin" 
    width="100%" 
    height="400"
    style={{border:0}}
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="love">
        <p className="">We would love to hear from you!</p>
    </div>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mkneavgq" method="POST" className="contact-inputs ">
          <input type="text" 
          name="username" 
          placeholder="username" 
          required 
          autoComplete="off" 
           className="radius"/>

          <input type="email" 
          name="Email" 
          placeholder="email" 
          required 
          autoComplete="off" 
          className="radius"/>

        <input type="number" 
          name="mobile-no" 
          placeholder="Mobile Number" 
          required 
          autoComplete="off" 
           className="radius"/>

          <textarea name="Message"  
          cols="30" 
          rows="10" 
          placeholder="Enter Your Message" 
          autoComplete="off" 
          required className="radius"></textarea>

          <input type="submit" value="Send" className="radius"/>
        </form>
      </div>
    </div>
    </Wrapper>;
  
};

export default Contact;
