import "./Karten.scss";
import { Link } from "react-router-dom";

const Karten = () => {
  return (
    <div id="container">
      <Link to="/category/Haushaltswaren">
        <div className="item">
          <div className="content">
            <h2>Haushalt</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/Haushaltswaren/Sieb.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Haushaltswaren/Messer3.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Haushaltswaren/hw2.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Haushaltswaren/Kaffemühle4.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Haushaltswaren/Gewürzregal.jpg" />
            </div>
          </div>
        </div>
      </Link>
      <Link to="/category/Elektro">
        <div className="item">
          <div className="content">
            <h2>Elektro</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/Elektro/Digicam4.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Elektro/DigitalBuero.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Elektro/Elektro1.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Elektro/Handy3.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Elektro/waschmaschiene2.jpg" />
            </div>
          </div>
        </div>
      </Link>
      <Link to="/category/Garten">
        <div className="item">
          <div className="content">
            <h2>Garten</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/Garten/gartenkanne1.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Garten/Rechen.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Garten/WerkzeugTasche.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Garten/Werkzeug3.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Garten/Werkzeug1.jpg" />
            </div>
          </div>
        </div>
      </Link>
      <Link to="/category/Schuhe">
        <div className="item">
          <div className="content">
            <h2>Schuhe</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/Schuhe/Roller.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Schuhe/Tracking.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Schuhe/Lichter.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Schuhe/Nike.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/Schuhe/Stöckelschuhe.jpg" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Karten;
