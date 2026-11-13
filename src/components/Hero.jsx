export default function Hero() {
  return (
    <header className="hero" id="page-top">
      <div className="hero-inner" id="maincontent" tabIndex={-1}>
        <img
          className="hero-logo"
          src="/img/designlamaLogov3Klein.png"
          alt=""
          width={140}
          height={140}
        />
        <h1>DesignLama</h1>
        <p className="hero-tagline">Mobile developer</p>
        <a className="hero-cta" href="#portfolio">
          Bekijk projecten
        </a>
      </div>
    </header>
  );
}
