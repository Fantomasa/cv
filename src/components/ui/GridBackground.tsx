import React from "react";

export function GridBackground() {
  return (
    <div className="absolute top-0 left-0 h-screen w-full bg-black-100  bg-grid-white/[0.2] flex items-center justify-center -z-5">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
