import { NavigationWrapper } from "./header.style";
import logoImg from "../../../assets/Images/truemedslogosvglong.svg";
import { GrLogout } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@redux/slices/auth.slice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <NavigationWrapper>
      <div className="header_content">
        <div className="logo_container">
          <img src={logoImg} alt="logo" className="logo" />
        </div>
      </div>
      <GrLogout className="pointer" size={30} onClick={() => userLogout()} />
    </NavigationWrapper>
  );
};

export default Header;
