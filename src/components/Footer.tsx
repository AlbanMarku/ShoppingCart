import logo from '../../public/imgs/logo.png';

function Footer() {
  return (
    <div className="Footer">
      <strong>AlbanMarku</strong>
      <a href="https://github.com/AlbanMarku">
        <img className="floating" src={logo} alt="git Logo" />
      </a>
    </div>
  );
}

export default Footer;
