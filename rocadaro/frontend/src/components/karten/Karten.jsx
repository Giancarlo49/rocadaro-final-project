import "./Karten.scss";




const Karten = () => {
  return (
    <div id="container">
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
      
    </div>
    
  );
};

export default Karten;



