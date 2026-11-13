/** @typedef {'work' | 'own' | 'earlier'} ProjectGroup */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} blurb
 * @property {string} description
 * @property {string} image
 * @property {ProjectGroup} group
 * @property {string} [date]
 * @property {string} [grade]
 * @property {{ label: string, href: string }[]} [links]
 */

/** @type {Project[]} */
export const projects = [
  {
    id: "waterkaarten",
    title: "Waterkaarten",
    blurb: "Vaarnavigatie met offline kaarten, routes en AIS.",
    description:
      "Bij The Mobile Company (part of Apadmi) werk ik aan Waterkaarten: de vaarnavigatie-app voor skippers, met offline waterkaarten, routeplanning op bootafmetingen, AIS+ en almanak-info over bruggen, sluizen en havens.",
    image: "/img/waterkaarten-logo.png",
    group: "work",
    date: "augustus 2022 – heden",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=nl.anwb.android.anwbwaterkaarten",
      },
      {
        label: "Apadmi case",
        href: "https://www.apadmi.com/work/waterkaarten/",
      },
    ],
  },
  {
    id: "keurslager",
    title: "Keurslager",
    blurb: "Loyalty-app met spaarkaart, recepten en store locator.",
    description:
      "Bij Apadmi gewerkt aan de Keurslager loyalty-app: digitale spaarkaart, realtime punten, recepten, cadeaushop en store locator voor het landelijke netwerk van zelfstandige keurslagers.",
    image: "/img/keurslager-logo.png",
    group: "work",
    date: "Apadmi",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=nl.keurslager.app",
      },
      {
        label: "Apadmi case",
        href: "https://www.apadmi.com/work/keurslager/",
      },
    ],
  },
  {
    id: "fokker",
    title: "Fokker Services",
    blurb: "Offline parts- en stock-app voor aviation repair teams.",
    description:
      "Bij Apadmi gewerkt aan de Fokker Services app: onderdelen zoeken en bestellen, stock en repair-flows, inclusief offline gebruik voor mechanics op de hangarvloer.",
    image: "/img/fokker-logo.png",
    group: "work",
    date: "Apadmi",
    links: [
      {
        label: "Apadmi case",
        href: "https://www.apadmi.com/work/fokker-services/",
      },
    ],
  },
  {
    id: "yoursafe",
    title: "Yoursafe",
    blurb: "Fintech-app voor veilige accounts, KYC en betalingen.",
    description:
      "Bij Apadmi gewerkt aan de Yoursafe app: digitaal bankieren met focus op privacy, onboarding met KYC, betalingen en accountbeheer voor een Electronic Money Institution.",
    image: "/img/yoursafe-logo.png",
    group: "work",
    date: "Apadmi",
    links: [
      {
        label: "Apadmi case",
        href: "https://www.apadmi.com/work/yoursafe/",
      },
    ],
  },
  {
    id: "bambook",
    title: "Bambook",
    blurb: "Scanner-app voor Bambook-producten en accounts.",
    description:
      "Bij Apadmi gewerkt aan de Bambook Scanner: Android-app om producten te scannen en te koppelen aan Bambook-accounts, inclusief premium/billing-flows.",
    image: "/img/bambook-logo.png",
    group: "work",
    date: "Apadmi",
  },
  {
    id: "4411",
    title: "4411",
    blurb: "Android development voor de grootste parkeerapp van België.",
    description:
      "Als enige Android ontwikkelaar verantwoordelijk voor de app development van de 4411 app. De grootste parkeerapp van onze zuiderburen.",
    image: "/img/4411-logo.png",
    group: "work",
    date: "januari 2020 – augustus 2022",
  },
  {
    id: "flitsmeister",
    title: "Flitsmeister",
    blurb: "Ritregistratie, Flitsmeister app en FM One.",
    description:
      "Afgestudeerd op het project Ritregistratie en daarnaast gewerkt aan de Flitsmeister app, de FM One en deels tweede lijns support opgepakt.",
    image: "/img/fm-logo.png",
    group: "work",
    date: "augustus 2019 – december 2019",
  },
  {
    id: "anwb-werk",
    title: "ANWB Uitbelapp",
    blurb: "Handsfree uitbellen voor de Wegenwacht.",
    description:
      "Tijdens mijn werk bij ANWB heb ik de Uitbelapp ontwikkeld. Deze app maakt het voor de Wegenwacht mogelijk om zonder de telefoon te bedienen de klant uit te bellen.",
    image: "/img/ic_launcher_uitbelhdpi.png",
    group: "work",
    date: "juli 2017 – april 2018",
  },
  {
    id: "anwb-stage",
    title: "ANWB Stage",
    blurb: "Noodoproep-app voor de Wegenwacht.",
    description:
      "Een half jaar stage bij ANWB in het team DISWEG, regie op uitvoering. Het team dat applicaties maakt voor de Wegenwacht. Tijdens de stage heb ik een Android app gemaakt die het mogelijk maakt voor de Wegenwacht om een noodoproep te versturen.",
    image: "/img/menoa-logo.png",
    group: "work",
    date: "november 2016 – april 2017",
    grade: "9",
  },
  {
    id: "pakkiepakkie",
    title: "PakkiePakkie",
    blurb: "Kenteken zoeken en sprintkans vs jouw auto.",
    description:
      "Eigen-tijd Kotlin Multiplatform app: zoek een Nederlands kenteken, vergelijk sprintkans en specs met jouw auto, en bekijk de Pakkiekans. Gebouwd met Compose Multiplatform voor Android en iOS.",
    image: "/img/pakkiepakkie-logo.png",
    group: "own",
    date: "eigen tijd",
  },
  {
    id: "maartenmocklocation",
    title: "MaartenMockLocation",
    blurb: "Mock GPS met GPX of getekende routes.",
    description:
      "Android app die GPS mockt door een GPX of getekende route af te spelen op instelbare snelheid. Gebouwd met Jetpack Compose, Hilt, Room, MapLibre en een foreground service zodat mocking op de achtergrond doorloopt.",
    image: "/img/maartenmocklocation-logo.jpg",
    group: "own",
    date: "eigen tijd",
  },
  {
    id: "runaround",
    title: "RunAroundRoute",
    blurb: "Routes lopen, opslaan en anoniem delen.",
    description:
      "Voor de Minor Android Development was de praktijkopdracht het maken van een app. Deze app registreert de locatie van de gebruiker terwijl hij een route loopt. Zo kan hij de route opslaan en later terugkijken. Ook deelt de gebruiker anoniem zijn gelopen route met de andere gebruikers.",
    image: "/img/RunAroundLogo.png",
    group: "earlier",
    date: "september 2016",
    grade: "6,8",
  },
  {
    id: "connectedcar",
    title: "Connected Car Onderzoek",
    blurb: "Onderzoek naar veiligheid via connected cars.",
    description:
      "In tien weken in een project van vier leden is een onderzoek uitgevoerd naar de mogelijk toegevoegde veiligheid op de weg door de ontwikkelingen op het gebied van connected cars.",
    image: "/img/connectedcar.png",
    group: "earlier",
    date: "juli 2017",
    grade: "6",
  },
];

export const groupLabels = {
  work: "Werk",
  own: "Eigen tijd",
  earlier: "Eerder",
};

export const groupOrder = ["work", "own", "earlier"];
