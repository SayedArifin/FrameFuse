import React, { useState } from 'react';

function Popup(props) {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 50,
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    boxShadow: '0px 3px 16px rgba(0, 0, 0, 0.1)',
    width: '90%',
    maxWidth: '600px',
    padding: '2rem',
    backgroundImage: 'linear-gradient(to bottom right,#fff , #60a5fa)'
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5,
    backgroundColor: '#000',
    zIndex: 40
  };

  const logoStyle = {
    width: '80px',
    height: 'auto',
    objectFit: 'contain'
  };

  return (
    <div>
      {isOpen && 
        <div style={popupStyle}>
          <div className="flex justify-center mb-4">
            <img src="https://th.bing.com/th/id/R.ef3b47c0aa7e723092fc35251dadbb55?rik=1lpsHdH51FGE9g&riu=http%3a%2f%2fmanarat.ac.bd%2fwp-content%2fthemes%2fmanarat%2fassets%2fimg%2ffooter-logo.png&ehk=bhlfvVtaFBjAqT0ZvsjAWb8BYMu4dmNwUghmqmcdoVw%3d&risl=&pid=ImgRaw&r=0" alt="Manarat International University" style={logoStyle} />
          </div>
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-gray-800">Under Development: Our CSE312 Project</h2>
          </div>
          <div className="text-gray-700 text-base">
Welcome to our website! Please note that this website is currently under development for our CSE312 project, and is not the final version. As such, you may encounter some bugs or issues. We kindly ask that you contact us if you notice any such issues, so that we can address them before final deployment. Thank you for your understanding and patience as we work to improve our website.
          </div>
          <div className="mt-8 flex justify-end">
            <button onClick={togglePopup} className="text-sm font-semibold text-gray-700 hover:text-gray-800 focus:outline-none focus:underline">
              Close
            </button>
          </div>
        </div>
      }
      {isOpen && <div style={overlayStyle} onClick={togglePopup}></div>}
    </div>
  );
}

export default Popup;
