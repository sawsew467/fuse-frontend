import React from 'react';

const FireAnimation: React.FC = () => {
  return (
    <div className="relative h-10 w-10 mx-auto my-16">
      <div className="absolute bottom-[40%] left-1/2 w-[60%] h-[60%] transform -translate-x-1/2 rotate-[45deg]">
        <div className="absolute bottom-0 right-0 w-0 h-0 rounded-lg animate-flameodd"></div>
        <div className="absolute bottom-0 right-0 w-0 h-0 rounded-lg animate-flameodd animate-deylay-2"></div>
        <div className="absolute bottom-0 right-0 w-0 h-0 rounded-lg animate-flameeven animate-deylay-3"></div>
        <div className="absolute bottom-0 right-0 w-0 h-0 rounded-lg animate-flameeven animate-deylay-4"></div>
      </div>
    </div>
  );
};

export default FireAnimation;
