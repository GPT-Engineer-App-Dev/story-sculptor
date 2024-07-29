import { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

const PlanetsPage = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-900 to-black overflow-hidden">
      <ReactConfetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        recycle={false}
        numberOfPieces={200}
      />
      <h1 className="text-4xl font-bold text-white text-center pt-8 mb-8">Solar System</h1>
      <div className="flex justify-center items-center h-[calc(100vh-8rem)]">
        <div className="relative w-80 h-80">
          <div className="absolute inset-0 rounded-full border-2 border-white opacity-20"></div>
          <div className="planet sun absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-500 rounded-full"></div>
          <Planet name="Mercury" orbitRadius={40} planetSize={4} color="bg-gray-400" orbitDuration={3} />
          <Planet name="Venus" orbitRadius={60} planetSize={6} color="bg-orange-300" orbitDuration={5} />
          <Planet name="Earth" orbitRadius={80} planetSize={8} color="bg-blue-500" orbitDuration={7} />
          <Planet name="Mars" orbitRadius={100} planetSize={6} color="bg-red-500" orbitDuration={9} />
        </div>
      </div>
    </div>
  );
};

const Planet = ({ name, orbitRadius, planetSize, color, orbitDuration }) => {
  return (
    <div className={`absolute top-1/2 left-1/2 w-${orbitRadius * 2} h-${orbitRadius * 2} -mt-${orbitRadius} -ml-${orbitRadius} rounded-full border border-white border-opacity-20 animate-spin`} style={{ animationDuration: `${orbitDuration}s` }}>
      <div className={`absolute top-0 -mt-${planetSize/2} w-${planetSize} h-${planetSize} ${color} rounded-full`} title={name}></div>
    </div>
  );
};

export default PlanetsPage;
