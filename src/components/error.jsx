import React from "react";

const Error = () => {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      <img src="https://external-preview.redd.it/kQ3lyP2rzAF5_R_AjX2NA-TygVrm3bAK1kanFfmCm0s.png?auto=webp&s=5b7ee965629512822ff72acdd0dd69ba33e76e29"></img>
      <p className="font-semibold text-center mt-3">
        when you can’t find what you’re looking for (Error 404)
      </p>
      <div className="flex items-center justify-center">
        <a href="https://www.jianguan.me/">
          <p className="hover:underline hover:cursor-pointer">Return Home</p>
        </a>
      </div>
    </div>
  );
};

export default Error;
