import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import {FaFacebook, FaDiscord} from 'react-icons/fa'
import imgHeading from '../assets/heading.png';
import { client } from '../client'
import { gapi } from "gapi-script"
import './Login.css'

const Login = () => {
  const clientId = process.env.REACT_APP_GOOGLE_API_TOKEN;

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const navigate = useNavigate();

  const responseGoogle = (response) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    const { name, googleId, imageUrl } = response.profileObj;
    const doc = {
      _id: googleId,
      _type: "user",
      userName: name,
      image: imageUrl,
    };
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };
  
  const responseFacebook = (response) => {
    console.log(response);
    
    alert("Facebook login is currently under development. Please use Google login");
  };

  const responseDiscord = (response) => {
    alert("Discord login is currently under development. Please use Google login");
    
  };

  return ( 
    <div className="login-container">
      <div className="login-card">
       
        <div className="login-card-content">
          <img src={imgHeading} alt="imgOf LOgin" width="130px" />
          <GoogleLogin
            clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
            render={(renderProps) => (
              <button
                type="button"
                className="google-login"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <FcGoogle className="mr-4" /> Sign in with Google
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
          <button
            type="button"
            className="facebook-login"
            onClick={responseFacebook}
          >
            <FaFacebook className="mr-4" /> Sign in with Facebook
          </button>
          <button
            type="button"
            className="discord-login"
            onClick={responseDiscord}
          >
            <FaDiscord className="mr-4" /> Sign in with Discord
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;