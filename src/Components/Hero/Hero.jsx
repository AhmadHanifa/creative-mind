import React, { useEffect, useRef } from 'react';

const Hero = (props) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [videoRef]);


  return (
    <div className="h-screen w-50 overflow-hidden flex relative justify-center">
      {props.img && (
        <img
          className="h-full w-full overflow-hidden"
          src={props.img}
          alt="hero"
        />
      )}

      {props.video && (
        <div className="w-screen h-screen grid">
          <video
            className="w-full h-full overflow-hidden object-cover"
            playsInline
            autoPlay
            loop
            muted
            ref={videoRef}
          >
            <source
              src={props.video}
              playsInline
              autoPlay
              loop
              muted
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <h1 className="absolute bottom-24 md:bottom-[20%] text-5xl md:text-9xl font-bold text-[#fff] text-stroke">
        {props.title}
      </h1>
    </div>
  );
};

export default Hero;
