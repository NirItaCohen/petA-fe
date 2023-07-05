import React from "react";

function ActionCard({ action }) {
  const renderActionCard = () => {
    if (action === "about") {
      return (
        <>
          <img
            src="https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg"
            alt="about lal"
          />
          <div className="content">
            <h2>About LAL</h2>
            {/* <p>About Let The Animals live orgenization</p> */}
          </div>
        </>
      );
    } else {
      return (
        <>
          <img
            src="https://images.dog.ceo/breeds/springer-english/n02102040_835.jpg"
            alt="adopt pet"
          />
          <div className="content">
            <h2>Ready to adopt?</h2>
            {/* <p>Click here and fint your new best friend!</p> */}
          </div>
        </>
      );
    }
  };

  return (
    <div className="wrapper">
      <div className="single-item">{renderActionCard()}</div>
    </div>
  );
}

export default ActionCard;
