import { Sling as Hamburger } from "hamburger-react";

export const MenuToggle = ({setIsOpen}) => {

  return (
    <div>
      <Hamburger
        color="#f3f4f6"
        size={28.5}
        distance=""
        duration={0.8}
        onToggle={(toggled) => {
          if (toggled) {
            setIsOpen(true);
          } else {
            setIsOpen(false);
          }
        }}
      />
    </div>
  );
};
