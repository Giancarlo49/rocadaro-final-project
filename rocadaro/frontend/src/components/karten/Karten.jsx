import "./Karten.scss";
import { Link } from "react-router-dom";

const Karten = () => {
  return (
    <div id="container">
      {/* HAUSHALTSWARE */}
      <Link to="/category/Haushaltswaren">
        <div className="item">
          <div className="content">
            <img src="/images/Haushaltswaren/Töpfe3.jpg" alt="" />
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

      {/* ELEKTRO */}
      <Link to="/category/Elektro">
        <div className="item">
          <div className="content">
            <img src="/images/Elektro/Laptop1.jpg" alt="" />
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

      {/* GARTEN */}
      <Link to="/category/Garten">
        <div className="item">
          <div className="content">
            <img src="/images/Garten/Werkzeug1.jpg" alt="" />
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

      {/* SCHUHE */}
      <Link to="/category/Schuhe">
        <div className="item">
          <div className="content">
            <img src="/images/Schuhe/NikeJordan.png" alt="" />
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

      {/* SCHMUCK */}
      <Link to="/category/Schmuck">
        <div className="item">
          <div className="content">
            <img src="/images/schmuck/armreif.jpg" alt="" />
            <h2>Schmuck</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/schmuck/goldring.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/schmuck/ohrringSaphir.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/schmuck/ohrringPerle.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/schmuck/ohrstecker.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/schmuck/silberring.jpg" />
            </div>
          </div>
        </div>
      </Link>

      {/* OUTDOOR */}
      <Link to="/category/Outdoor">
        <div className="item">
          <div className="content">
            <img src="/images/outdoor/backpack.jpg" alt="" />
            <h2>Outdoor</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/outdoor/fire.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/outdoor/gascooker.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/outdoor/knife.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/outdoor/shelter.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/outdoor/wandern.jpg" />
            </div>
          </div>
        </div>
      </Link>

      {/* MODE */}
      <Link to="/category/Mode">
        <div className="item">
          <div className="content">
            <img src="/images/mode/mode.jpg" alt="" />
            <h2>Mode</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/mode/anzugAsiatisch.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/mode/roterAnzugDamen.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/mode/dameEuropa.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/mode/peppigAsiatisch.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/mode/weisserAnzugHerren.jpg" />
            </div>
          </div>
        </div>
      </Link>

      {/* KINDERMODE */}
      <Link to="/category/Kindermode">
        <div className="item">
          <div className="content">
            <img src="/images/kindermode/jungeMädchen.jpg" alt="" />
            <h2>Kindermode</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/kindermode/hoseBeige.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/kindermode/hoseShirt.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/kindermode/latzhose.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/kindermode/regenjacke.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/kindermode/rotesKleid.jpg" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Karten;
