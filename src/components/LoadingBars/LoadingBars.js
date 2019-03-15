import React from 'react';
import Loader from 'react-loader-spinner';
import './LoadingBars.css';

const LoadingBars = () => {
  return (
    <div className="bars">
      <Loader
        className="loader"
        type="Bars"
        color="black"
        height={60}
        width={80}
      />
    </div>
  );
};

export default LoadingBars;
