import React from "react";

interface LayoutBoxProps {
  title: string;
  children: React.ReactNode;
}

export default function LayoutBox({ title, children }: LayoutBoxProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="bg-black bg-opacity-50 rounded-lg p-8 w-11/12 max-w-5xl h-[600px] flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-yellow-500 drop-shadow-md mb-6 pt-6">
          {title}
        </h1>
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
