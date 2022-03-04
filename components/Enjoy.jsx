import React from 'react'
import ReactPlayer from 'react-player/lazy'


const Enjoy = () => {
  return (
    <div
      style={{
        padding: "70px 45px",
        background: "black",
        color: "white",
        width: "100%",
      }}
    >
      <div
        style={{
          margin: "0px 79.5px",
          display: "flex",
          height:"340px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <h1 style={{ color: "white", font: "50px" }}>Enjoy on your TV.</h1>
            <h2 style={{ color: "white", font: "50px" }}>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h2>
          </div>
        </div>
<div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div style={{position: "relative", zIndex: "4",}}>
          <img
            style={{ width: "530px", height: "390px", display:"block",position: "relative", zIndex:"4" }}
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="TV"
          />
{/* <ReactPlayer url="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" /> */}
          <video
            style={{
              position: "absolute",
              top: "24%",
              left: "14%",
              width:"50%",
              zIndex: "2",
              width:"371px"
            }}
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          ></video>
        </div>
    </div>

      </div>
    </div>
  );
};

export default Enjoy;
