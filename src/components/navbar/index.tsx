import { Link } from "react-router-dom";
import { url } from "../../router/routes";
import { NavbarSC, UlSC, LiSC } from "./styled";

const Navbar = () => {
  return (
    <NavbarSC>
      <UlSC>
        <LiSC>
          <Link to={url.home}>inicio</Link>
        </LiSC>
        <LiSC>
          <Link to={url.products.list}>productos</Link>
        </LiSC>
        <LiSC>
          <Link to={url.vendors.list}>vendedores</Link>
        </LiSC>
      </UlSC>
    </NavbarSC>
  );
};

export default Navbar;
