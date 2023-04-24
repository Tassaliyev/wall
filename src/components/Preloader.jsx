import React from 'react'


const Preloader = (props) => {
  return (
    
    <div id="preloader">
      <img class="preloader-logo" src="assets/images/logo/star.png" alt=''/>
      <div className="progress-bar"  style={{"--width": props.progress, "backgroundColor": "black", "color":"black"}} data-label="Загрузка..."></div>
    </div>
  )
}

export default Preloader