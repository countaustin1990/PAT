import { useState } from "react";
import './PopupCallout.css'; // Ensure you create and import this CSS file

const PopupCallout = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeCallout = () => {
    setIsVisible(false);
  };

  return (
    <div>
     
      {isVisible && (
        <div className="callout">
          <div className="callout-header">PapPay Touch Cooking Tip!</div>
          <span className="closebtn" onClick={closeCallout}>
            &times;
          </span>
          <div className="callout-container">
            <p>
              Looking for the perfect way to prepare your next meal? 
              Check out our <a href="#">latest recipes</a> and discover 
              how to make your cooking experience even more enjoyable!
              
            </p>
            <p>Call us on +2348133715097.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupCallout;
