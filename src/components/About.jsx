import { useAge } from "../hooks/useAge";

export default function About() {
  const age = useAge();

  return (
    <section className="section about" id="about">
      <div className="section-inner">
        <h2 className="section-title">Over mij</h2>
        <p className="section-lead">
          Mobile developer met een soft spot voor apps die het gewoon doen.
        </p>
        <div className="about-grid">
          <img
            className="about-photo"
            src="/img/maarten.jpg"
            alt="Maarten Lammers"
            width={180}
            height={180}
          />
          <div className="about-copy">
            <p>
              Mijn naam is Maarten Lammers, {age} jaar, afgestudeerd Informatica
              aan de Haagse Hogeschool in Zoetermeer. Ik woon en werk vanuit
              Zoetermeer / Zuid-Holland en ben sinds augustus 2022 mobile
              developer bij The Mobile Company (part of Apadmi).
            </p>
            <p>
              Scouting, zeilen, motorrijden en programmeren zijn mijn hobby’s. Ik
              vind het vervelend als iets het niet doet — of het de ketting van
              mijn motor is of een div met te veel padding. Ik los problemen graag
              op.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
