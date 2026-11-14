/** Raw project entries — kept separate so projects.js stays under the line limit. */

/** @type {import('./projects.js').Project[]} */
export const projectList = [
  {
    id: "waterkaarten",
    title: "Waterkaarten",
    blurb: "Vaarnavigatie met offline kaarten, routes en AIS.",
    description:
      "Bij The Mobile Company (part of Apadmi) werk ik aan Waterkaarten: de vaarnavigatie-app voor skippers, met offline waterkaarten, routeplanning op bootafmetingen, AIS+ en almanak-info over bruggen, sluizen en havens.",
    image: "img/waterkaarten-logo.png",
    imageAlt: "Waterkaarten app logo",
    group: "work",
    period: { start: { year: 2022, month: 8 }, end: "present" },
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
    image: "img/keurslager-logo.png",
    imageAlt: "Keurslager app logo",
    group: "work",
    period: { label: "Apadmi" },
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
    image: "img/fokker-logo.png",
    imageAlt: "Fokker Services app logo",
    group: "work",
    period: { label: "Apadmi" },
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
    image: "img/yoursafe-logo.png",
    imageAlt: "Yoursafe app logo",
    group: "work",
    period: { label: "Apadmi" },
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
    image: "img/bambook-logo.png",
    imageAlt: "Bambook app logo",
    group: "work",
    period: { label: "Apadmi" },
  },
  {
    id: "4411",
    title: "4411",
    blurb: "Android development voor de grootste parkeerapp van België.",
    description:
      "Als enige Android ontwikkelaar verantwoordelijk voor de app development van de 4411 app. De grootste parkeerapp van onze zuiderburen.",
    image: "img/4411-logo.png",
    imageAlt: "4411 app logo",
    group: "work",
    period: {
      start: { year: 2020, month: 1 },
      end: { year: 2022, month: 8 },
    },
  },
  {
    id: "flitsmeister",
    title: "Flitsmeister",
    blurb: "Ritregistratie, Flitsmeister app en FM One.",
    description:
      "Afgestudeerd op het project Ritregistratie en daarnaast gewerkt aan de Flitsmeister app, de FM One en deels tweede lijns support opgepakt.",
    image: "img/fm-logo.png",
    imageAlt: "Flitsmeister app logo",
    group: "work",
    period: {
      start: { year: 2019, month: 8 },
      end: { year: 2019, month: 12 },
    },
  },
  {
    id: "anwb-werk",
    title: "ANWB Uitbelapp",
    blurb: "Handsfree uitbellen voor de Wegenwacht.",
    description:
      "Tijdens mijn werk bij ANWB heb ik de Uitbelapp ontwikkeld. Deze app maakt het voor de Wegenwacht mogelijk om zonder de telefoon te bedienen de klant uit te bellen.",
    image: "img/ic_launcher_uitbelhdpi.png",
    imageAlt: "ANWB Uitbelapp logo",
    group: "work",
    period: {
      start: { year: 2017, month: 7 },
      end: { year: 2018, month: 4 },
    },
  },
  {
    id: "anwb-stage",
    title: "ANWB Stage",
    blurb: "Noodoproep-app voor de Wegenwacht.",
    description:
      "Een half jaar stage bij ANWB in het team DISWEG, regie op uitvoering. Het team dat applicaties maakt voor de Wegenwacht. Tijdens de stage heb ik een Android app gemaakt die het mogelijk maakt voor de Wegenwacht om een noodoproep te versturen.",
    image: "img/menoa-logo.png",
    imageAlt: "ANWB Stage app logo",
    group: "work",
    period: {
      start: { year: 2016, month: 11 },
      end: { year: 2017, month: 4 },
    },
    grade: "9",
  },
  {
    id: "pakkiepakkie",
    title: "PakkiePakkie",
    blurb: "Kenteken zoeken en sprintkans vs jouw auto.",
    description:
      "Eigen-tijd Kotlin Multiplatform app: zoek een Nederlands kenteken, vergelijk sprintkans en specs met jouw auto, en bekijk de Pakkiekans. Gebouwd met Compose Multiplatform voor Android en iOS.",
    image: "img/pakkiepakkie-logo.png",
    imageAlt: "PakkiePakkie app logo",
    group: "own",
    period: { labelKey: "ownTime" },
  },
  {
    id: "maartenmocklocation",
    title: "MaartenMockLocation",
    blurb: "Mock GPS met GPX of getekende routes.",
    description:
      "Android app die GPS mockt door een GPX of getekende route af te spelen op instelbare snelheid. Gebouwd met Jetpack Compose, Hilt, Room, MapLibre en een foreground service zodat mocking op de achtergrond doorloopt.",
    image: "img/maartenmocklocation-logo.jpg",
    imageAlt: "MaartenMockLocation app logo",
    group: "own",
    period: { labelKey: "ownTime" },
  },
  {
    id: "runaround",
    title: "RunAroundRoute",
    blurb: "Routes lopen, opslaan en anoniem delen.",
    description:
      "Voor de Minor Android Development was de praktijkopdracht het maken van een app. Deze app registreert de locatie van de gebruiker terwijl hij een route loopt. Zo kan hij de route opslaan en later terugkijken. Ook deelt de gebruiker anoniem zijn gelopen route met de andere gebruikers.",
    image: "img/RunAroundLogo.png",
    imageAlt: "RunAroundRoute app logo",
    group: "earlier",
    period: { start: { year: 2016, month: 9 } },
    grade: "6,8",
  },
  {
    id: "connectedcar",
    title: "Connected Car Onderzoek",
    blurb: "Onderzoek naar veiligheid via connected cars.",
    description:
      "In tien weken in een project van vier leden is een onderzoek uitgevoerd naar de mogelijk toegevoegde veiligheid op de weg door de ontwikkelingen op het gebied van connected cars.",
    image: "img/connectedcar.png",
    imageAlt: "Connected Car onderzoek afbeelding",
    group: "earlier",
    period: { start: { year: 2017, month: 7 } },
    grade: "6",
  },
];
