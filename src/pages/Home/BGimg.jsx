import React from "react";

function BGimg() {
  return (
    <div className="banner">
      <div
        className="banner-img shadow-lg "
        style={{
          height: "93vh",
          backgroundImage:
            "url(https://cdn2.thecatapi.com/images/kjKxmn3Ob.jpg)", //cat
        }}
      ></div>
      <div
        className="banner-img shadow-lg "
        style={{
          height: "93vh",

          backgroundImage:
            "url(https://images.dog.ceo/breeds/pitbull/pitbull_dog.jpg)", //dog
        }}
      ></div>
      <div
        className="banner-img shadow-lg "
        style={{
          height: "93vh",

          backgroundImage:
            "url(https://cdn2.thecatapi.com/images/SCHe-SekW.jpg)", //cat
        }}
      ></div>
      <div
        className="banner-img shadow-lg "
        style={{
          height: "93vh",

          backgroundImage:
            "url(https://images.dog.ceo/breeds/mastiff-bull/n02108422_4945.jpg)", //dog
        }}
      ></div>
    </div>
  );
}

export default BGimg;
