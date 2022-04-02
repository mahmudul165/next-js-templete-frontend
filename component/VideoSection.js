import React from "react";

function VideoSection() {
  return (
    <section className="video-section opacity-25 bg-dark">
      <video
        controls
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        className="vid-bg"
      >
        <source src="/images/fiver gig.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

export default VideoSection;
