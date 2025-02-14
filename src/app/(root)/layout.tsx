import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>layout for about</h1>
      {children}
    </div>
  );
};

export default layout;

//we use () for file if we want to organize layouts for different pages but dont want to change our ROOT /
//it is only /about not /root/abotu
