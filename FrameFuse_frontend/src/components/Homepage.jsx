import React from 'react';
import './Homepage.css'

const HomePage = () => {
  return (
    <div className="container-xxl py-5 bg-primary hero-header mb-5">
      <div className="container my-5 py-5 px-lg-5">
        <div className="row g-5 py-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="text-white mb-4 animated zoomIn text-white-h1">Discover and Share Your Favorite Frames</h1>
            <p className="text-white pb-3 animated zoomIn">
              Frame Fuse is a vibrant and user-friendly public image sharing website that allows individuals to upload, showcase, and discover captivating visual content. With its sleek and intuitive interface, Frame Fuse provides a seamless platform for photographers, artists, and enthusiasts to share their work with a global community.
            </p>
            <a href="/login" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Login</a>
            <a href="https://m.me/EsN.Sayed.Arifin" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
            <p className="text-black pb-3 pu-3 animated zoomIn">(The "Contact Us" option will be moved to "Support" when development is finished.)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
