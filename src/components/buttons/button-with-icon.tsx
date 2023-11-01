import React from "react";

interface ButtonProps {
  icons: JSX.Element;
  handleSelect: (val: string) => void;
  name: string;
}

const ButtonWithIcon = ({ icons, handleSelect, name }: ButtonProps) => {
  const handleClick = (val: string) => {
    handleSelect && handleSelect(name);
  };
  return (
    <button value={name} onClick={() => handleClick(name)} className="h-6 w-6">
      {icons}
    </button>
  );
};

export default ButtonWithIcon;
