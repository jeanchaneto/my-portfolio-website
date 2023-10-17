import { Sling as Hamburger } from "hamburger-react";

export const MenuToggle = ({isOpen, setIsOpen}) => {

  return (
    <div>
      <Hamburger
        color="#f3f4f6"
        size={28.5}
        distance=""
        duration={0.8}
        toggled={isOpen} toggle={()=>{ isOpen ? setIsOpen(false) : setIsOpen(true)  }}
      />
    </div>
  );
};
