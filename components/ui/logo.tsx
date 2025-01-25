import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center flex-col -space-y-2">
      <span className="text-xl font-extrabold text-primary tracking-wide">WorkSpace</span>
      <div className="flex items-center gap-1">
        <span className="w-8 h-[1px] bg-primary"></span>
      <span className="text-xl font-extrabold text-primary">Nepal</span>
      <span className="w-8 h-[1px] bg-primary"></span>
      </div>
      
    </div>
  );
};

export default Logo;
