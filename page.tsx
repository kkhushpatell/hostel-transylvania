'use client';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';

const Home = () => {
  const [mounted, setMounted] = useState(false);

  // Ensure any client-specific logic runs after the component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return null during SSR to avoid mismatches
  }

  return (
    <div>
      <video
        className="video-background -mt-5"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/bgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>Welcome to HostelTransylvania!</h1>
      {/* Your component's content */}
    </div>
  );
};

export default Home;
