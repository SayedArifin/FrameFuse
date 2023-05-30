import React from 'react';
import { HashLoader } from 'react-spinners';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="loader">
      <HashLoader color="#0000FF" />
    </div>
  );
};

export default Spinner;
