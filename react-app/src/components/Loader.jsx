import { useState, useEffect } from 'react';

const Loader = ({ onComplete }) => {
  const [phase, setPhase] = useState('loading'); // loading -> reveal -> done

  useEffect(() => {
    // Phase 1: Show loader for a moment
    const revealTimer = setTimeout(() => {
      setPhase('reveal');
    }, 1800);

    // Phase 2: Slide away and signal completion
    const completeTimer = setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, 2600);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className={`loader-screen ${phase === 'reveal' ? 'loader-exit' : ''}`}>
      <div className="loader-content">
        <div className="loader-name">
          <span className="loader-letter" style={{ animationDelay: '0s' }}>S</span>
          <span className="loader-letter" style={{ animationDelay: '0.08s' }}>I</span>
          <span className="loader-letter" style={{ animationDelay: '0.16s' }}>A</span>
          <span className="loader-letter" style={{ animationDelay: '0.24s' }}>M</span>
        </div>
        <div className="loader-bar">
          <div className="loader-bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
