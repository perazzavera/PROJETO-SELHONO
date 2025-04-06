import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sociais = () => {
  return (
    <nav className="d-flex gap-5">
      <Link to="facebook.com">
        <FaFacebookF size={20} color="#292f36" />
      </Link>
      <Link to="twitter.com">
        <FaTwitter size={20} color="#292f36" />
      </Link>
      <Link to="linkedin.com">
        <FaLinkedinIn size={20} color="#292f36" />
      </Link>
      <Link to="instagram.com">
        <FaInstagram size={20} color="#292f36" />
      </Link>
    </nav>
  );
};

export default Sociais;
