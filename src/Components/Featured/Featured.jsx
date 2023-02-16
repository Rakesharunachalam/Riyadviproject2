import React from 'react'
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured">
    <div className="featuredItem">
      <img
        src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_230,q_auto,w_305/v1/filestore/kajs9zbplxyq1qqde75jp19g22iz_69300792.jpg"
        alt=""
        className="featuredImg"
      />
      <div className="featuredTitles">
        <h1>ECR Resorts</h1>
        <h2>123 properties</h2>
      </div>
    </div>
    <div className="featuredItem">
        <img
          src="http://cdn.brigadegroup.com/articles/images/16318592786144324ed714f.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>OMR Hotels</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandchola-chennai/images/overview/overview-desktop/exterior-dusk.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Guindy</h1>
          <h2>54 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured