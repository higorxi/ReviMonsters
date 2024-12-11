import { useNavigate } from "react-router-dom";
import { LayoutBoxProps } from "../types/Components/Props/LayoutBox";
import { FaArrowLeft } from 'react-icons/fa';

export default function LayoutBox({ title, children, isStep, onStepBack }: LayoutBoxProps) {
  const navigate = useNavigate();
  
  const handleBack = () => {
    if (isStep) {
      if (onStepBack) {
        onStepBack();
      }
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white bg-opacity-20 rounded-lg p-8 w-11/12 max-w-7xl h-[800px] flex flex-col items-center justify-center text-center backdrop-filter backdrop-blur-lg shadow-lg relative">
        <button
          onClick={handleBack}
          className="absolute top-16 left-8 bg-transparent text-white p-2 rounded-full hover:bg-gray-500 hover:border-gray-100 transition duration-300"
        >
          <FaArrowLeft size={24} />
        </button>
        <h1 className="text-5xl font-bold text-yellow-500 drop-shadow-lg mb-6 pt-6">
          {title}
        </h1>
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
