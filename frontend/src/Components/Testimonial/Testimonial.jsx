import React from 'react';
import boy_avatar from '../../assets/svg folder/boy avatar.svg';
import girl_avatar from '../../assets/svg folder/girl avatar.svg';
import "./Testimonial.css"

const Testimonial = () => { 
  return (
    <div className='my-5 testimonial-width'>
      <h2 className='text-center mb-4'>Testimonial</h2>
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="bg-dark" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" className="bg-dark" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" className="bg-dark active" aria-current="true" aria-label="Slide 3"></button>
        </div>  

        <div className="carousel-inner">
          <div className="carousel-item">
            <svg  className="bd-placeholder-img testimonial-svg-height" width="100%"  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
              <rect width="100%" height="100%" fill="#C2B5FF"></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption text-dark text-center mx-auto">
              <img style={{height:'50px',width:'50px',marginBottom:'10px'}} src={girl_avatar} alt="boy-avatar" />
              <p>🥰 A fantastic platform for PG hunting — simple, fast, and reliable.
              I found my ideal place without any hassle. Truly impressed! 🙌</p>

              </div>
            </div> 
          </div>

          <div className="carousel-item active">
            <svg className="bd-placeholder-img testimonial-svg-height" width="100%"  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
              <rect width="100%" height="100%" fill="#C2B5FF"></rect>
            </svg>

            <div className="container">
              <div className="carousel-caption text-dark text-center">
                  <img style={{height:'50px',width:'50px',marginBottom:'10px'}} src={boy_avatar} alt="boy-avatar" />
                  <p>🌟 This website made finding the perfect PG so easy and stress-free!
                  I'm truly happy with the experience 😊</p>
                
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <svg className="bd-placeholder-img testimonial-svg-height" width="100%"  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
              <rect width="100%" height="100%" fill="#C2B5FF"></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption text-dark text-center">
              <img style={{height:'40px',width:'40px',marginBottom:'10px'}} src={boy_avatar} alt="boy-avatar" />
              <p>🌟 This site is a blessing for PG seekers!
              Smooth experience, detailed listings — I couldn't be happier! 🏡💛</p>
               
            
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
