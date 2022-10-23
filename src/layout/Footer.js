const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: dalijlasii@gmail.com</p>
        <p>T: + (216) 54 58 63 62</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/med-ali-jlassi-935b1a17a/">
            <span className="icon fab fa-linkedin-in" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/dalyjls/">
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/daly.jelassi/">
            <span className="icon fab fa-facebook" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
