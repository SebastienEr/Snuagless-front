import React, {useState} from 'react';

function PasswordCheck() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const toggleEyeIcon = () => {
      const eye = document.querySelector(".eye-close");
      const imgsrc = document.getElementById("img1").src;
      if (imgsrc.indexOf("eye-close") !== -1) {
        eye.classList.add('eye-open');
        document.getElementById("img1").src = "https://i.postimg.cc/3JHFrZ3v/eye-open.png";
      } else {
        eye.classList.remove('eye-open');
        document.getElementById("img1").src = "https://i.postimg.cc/HWMtCN1m/eye-close.png";
      }
    };
  
    const handleInputChange = (event) => {
      setPassword(event.target.value);
      textChange(event.target.value);
    };
  
    const valid = (item, validIcon, invalidIcon) => {
      const text = document.querySelector(`#${item}`);
      text.style.opacity = "1";
      const validIcons = document.querySelector(`#${item} .${validIcon}`);
      validIcons.style.opacity = '1';
      const invalidIcons = document.querySelector(`#${item} .${invalidIcon}`);
      invalidIcons.style.opacity = "0";
    };
  
    const invalid = (item, validIcon, invalidIcon) => {
      const text = document.querySelector(`#${item}`);
      text.style.opacity = "0.5";
      const validIcons = document.querySelector(`#${item} .${validIcon}`);
      validIcons.style.opacity = '0';
      const invalidIcons = document.querySelector(`#${item} .${invalidIcon}`);
      invalidIcons.style.opacity = "1";
    };
  
    const textChange = (value) => {
      if (value.match(/[A-Z]/) !== null)
        valid('capital', 'fa-check', 'fa-times');
      else
        invalid('capital', 'fa-check', 'fa-times');
  
      if (value.match(/[0-9]/) !== null)
        valid('number', 'fa-check', 'fa-times');
      else
        invalid('number', 'fa-check', 'fa-times');
  
      if (value.match(/[!@#$%^&*]/) !== null)
        valid('special-char', 'fa-check', 'fa-times');
      else
        invalid('special-char', 'fa-check', 'fa-times');
  
      if (value.length >= 8)
        valid('more-than-8', 'fa-check', 'fa-times');
      else
        invalid('more-than-8', 'fa-check', 'fa-times');
    };
    return (
        <div className="container">
          <div className="formbox">
            <div className="inner"></div>
            <div><i className="fas fa-lock"></i></div>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="myPass"
                value={password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <span className="showPass">
                <img
                  className="eye-close"
                  id="img1"
                  src="https://i.postimg.cc/HWMtCN1m/eye-close.png"
                  alt="eye"
                  onClick={() => {
                    togglePasswordVisibility();
                    toggleEyeIcon();
                  }}
                />
              </span>
            </div>
          </div>
          <div className="validator">
            <p id="capital">
              <i className="fas fa-times"></i>
              <i className="fas fa-check"></i>
              <span>Upper Case</span>
            </p>
            <p id="special-char">
              <i className="fas fa-times"></i>
              <i className="fas fa-check"></i>
              <span>Special Character</span>
            </p>
            <p id="number">
              <i className="fas fa-times"></i>
              <i className="fas fa-check"></i>
              <span>Number</span>
            </p>
            <p id="more-than-8">
              <i className="fas fa-times"></i>
              <i className="fas fa-check"></i>
              <span>More than 8 characters</span>
            </p>
          </div>
        </div>
      );
}

export default PasswordCheck;