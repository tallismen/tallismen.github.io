/** UI copy kept in one place for adaptability. */
export const copy = {
  skipLink: "Naar inhoud",
  navAriaLabel: "Hoofdnavigatie",
  menuAriaLabel: "Menu",
  nav: [
    { href: "#page-top", label: "Home" },
    { href: "#about", label: "Over mij" },
    { href: "#portfolio", label: "Projecten" },
    { href: "#contact", label: "Contact" },
  ],
  heroCta: "Bekijk projecten",
  about: {
    title: "Over mij",
    lead: "Mobile developer met een soft spot voor apps die het gewoon doen.",
    photoAlt: "Maarten Lammers",
    body: [
      "Mijn naam is Maarten Lammers, {age} jaar, afgestudeerd Informatica aan de Haagse Hogeschool in Zoetermeer. Ik woon en werk vanuit {location} en ben sinds augustus 2022 mobile developer bij The Mobile Company (part of Apadmi).",
      "Scouting, zeilen, motorrijden en programmeren zijn mijn hobby’s. Ik vind het vervelend als iets het niet doet — of het de ketting van mijn motor is of een div met te veel padding. Ik los problemen graag op.",
    ],
  },
  projects: {
    title: "Projecten",
    lead: "Werk bij Apadmi / The Mobile Company, eigen apps, en eerdere projecten.",
    dateLabel: "Datum",
    gradeLabel: "Cijfer",
    close: "Sluiten",
  },
  groups: {
    work: "Werk",
    own: "Eigen tijd",
    earlier: "Eerder",
  },
  contact: {
    title: "Contact",
    lead: "Bereikbaar via LinkedIn of de andere kanalen hieronder.",
    locationHeading: "Locatie",
    socialHeading: "Social media",
    contactHeading: "Contact",
    contactBody: "Neem contact op via een van de sociale media.",
  },
  date: {
    present: "heden",
    ownTime: "eigen tijd",
    rangeSeparator: " – ",
  },
};

/**
 * Replace `{key}` placeholders in a copy template.
 * @param {string} template
 * @param {Record<string, string | number>} values
 * @returns {string}
 */
export function fillTemplate(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    Object.prototype.hasOwnProperty.call(values, key)
      ? String(values[key])
      : `{${key}}`,
  );
}
