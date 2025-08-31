import React from 'react'
import room_tour_1 from "../../assets/videos/room-tour-video-1.mp4"
import room_tour_2 from "../../assets/videos/room-tour-video-2.mp4"
import "./Video.css"
   
const Video = () => {
  return (  
    <section style={{margin:'100px 0px'}} className='mx-3 video-width'>
        <h2 className='text-center my-4'>Videos</h2>
        <div style={{margin:'0px 10px'}} className="row">
          <div id='video' className="col-lg-6 col-md-6 col-sm-12 col-12 my-3 ">
              <video style={{borderRadius:'15px',}} className='border' controls >
                <source src={room_tour_2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* <iframe width="600" height="350" src="https://www.youtube.com/embed/vRL6k2DEdKs" title="Escape pricey rentals with Book My PG: Hassle-free accommodation booking" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

          </div>
            
          <div id='video' className="col-lg-6 col-md-6 col-sm-12 col-12 my-3 ">
            <video style={{borderRadius:'15px',}} className='border' controls >
              <source src={room_tour_1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
    </section>
  )
}

export default Video

        