import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div>
        <FaFacebook className="icon facebook" />
        <FaTwitter className="icon twitter" />
        <FaInstagram className="icon instagram" />
      </div>
      <p>&copy; Copyright Ping. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
