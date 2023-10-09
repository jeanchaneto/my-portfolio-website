import { Sling as Hamburger } from "hamburger-react";

export const MenuToggle = ({setOpenMenu}) => {

  return (
    <div className="lg:hidden">
      <Hamburger
        color="#f3f4f6"
        size={20}
        duration={0.8}
        onToggle={(toggled) => {
          if (toggled) {
            setOpenMenu(true);
          } else {
            setOpenMenu(false);
          }
        }}
      />
    </div>
  );
};
