import React from "react";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {children}
    </div>
  );
}
