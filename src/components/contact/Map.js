const Map = () => {
  return (
    <div className="map_wrap w-full float-left clear-both h-auto mb-[50px]">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.5989299364164!2d14.3410396741557!3d10.61049748952839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x111d9faa2cee032f%3A0x14d6050d60ae2a49!2sStudio%20Seldjam!5e0!3m2!1sfr!2scm!4v1692442043946!5m2!1sfr!2scm" 
            width="600" 
            height="450" 
            style={{border: 0}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade" 
          />
          <a href="https://fmovies-online.net">fmovies</a>
          <br />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".mapouter{position:relative;text-align:right;height:355px;width:100%;}",
            }}
          />
          <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".gmap_canvas {overflow:hidden;background:none!important;height:355px;width:100%;}",
            }}
          />
        </div>
      </div>
      {/* Get your API here https://www.embedgooglemap.net */}
    </div>
  );
};
export default Map;
