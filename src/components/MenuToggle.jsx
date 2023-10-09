import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";

export const MenuToggle = () => {
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className="lg:hidden">
      <Hamburger color="#f3f4f6" size={20} />
    </div>
  );
};
