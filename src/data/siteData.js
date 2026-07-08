// Central place for GS Travels brand/contact data.
// Update here once client supplies logo, social URLs, GST number, etc.

export const company = {
  name: "GS Travels",
  founded: 2016,
  owner: "S. Ganesh",
  taglines: [
    "Your Trusted Travel Partner Since 2016",
    "Comfort. Reliability. Every Mile.",
    "Every Journey, Made Easy.",
  ], // TODO: client to pick/approve final tagline
  phones: ["9943011410", "9944799600"],
  whatsapp: "919944799600",
  email: "newgstravels9600@gmail.com",
  addresses: {
    headOffice: {
      label: "Head Office",
      region: "Gummidipoondi, Tamil Nadu",
      lines: [
        "No. 772, Kovil Street, Thervazhi (PO)",
        "Gummidipoondi – 601201, Tamil Nadu",
      ],
      full: "No. 772, Kovil Street, Thervazhi (PO), Gummidipoondi – 601201, Tamil Nadu",
    },
    branchOffice: {
      label: "Branch Office",
      region: "Tada, Andhra Pradesh",
      lines: [
        "No. 01, NH 16, GNT Road, Karur Mitta Village",
        "Karur Post, Tada, Nellore Dist – 524401, Andhra Pradesh",
      ],
      full: "No. 01, NH 16, GNT Road, Karur Mitta Village, Karur Post, Tada, Nellore Dist – 524401, Andhra Pradesh",
    },
  },
  social: {
    facebook: "#", // TODO: add social URL
    instagram: "#", // TODO: add social URL
    youtube: "#", // TODO: add social URL
  },
};

export const telLink = (num) => `tel:+91${num}`;
export const waLink = (num = company.whatsapp, text = "") =>
  `https://wa.me/${num}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
export const mailLink = (addr = company.email) => `mailto:${addr}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Fleet", to: "/fleet" },
  { label: "Contact", to: "/contact" },
];

export const serviceAreas = [
  "Gummidipoondi",
  "Chennai",
  "Bangalore",
  "Tada",
  "Sullurpeta",
  "Andhra Pradesh",
  "All over Tamil Nadu",
];

export const stats = [
  { value: "9+", label: "Years of Service", sub: "Since 2016" },
  { value: "5", label: "Core Service Types" },
  { value: "5+", label: "Vehicle Categories" },
  { value: "7+", label: "Cities & Regions Covered" },
];

export const services = [
  {
    number: "01",
    slug: "tours-travels",
    icon: "MapPinned",
    title: "Tours & Travels",
    short:
      "Curated travel packages for families, groups, and pilgrimages across Tamil Nadu and beyond.",
    long:
      "Custom holiday and pilgrimage packages, family trips, and group tours to destinations across Tamil Nadu and neighboring states. Includes itinerary planning and comfortable multi-day travel.",
  },
  {
    number: "02",
    slug: "corporate-travel",
    icon: "Building2",
    title: "Corporate Travel",
    short:
      "Reliable daily staff transport and business trip solutions for companies.",
    long:
      "Daily employee pickup/drop, business meeting transport, and contract-based company vehicle solutions with flexible shift timing support.",
  },
  {
    number: "03",
    slug: "self-drive",
    icon: "Car",
    title: "Self Drive",
    short:
      "Rent-and-drive vehicles for customers who prefer to travel independently.",
    long:
      "Rent-and-drive vehicles for customers who want the flexibility of driving themselves, ideal for short trips and local errands.",
  },
  {
    number: "04",
    slug: "airport-pickup-drop",
    icon: "PlaneTakeoff",
    title: "Airport Pickup & Drop",
    short:
      "Timely, comfortable transfers to and from Chennai and Bangalore airports.",
    long:
      "Reliable, timely transfers to and from Chennai and Bangalore airports, with tracking-friendly scheduling for flight timings.",
  },
  {
    number: "05",
    slug: "cab-vehicle-rental",
    icon: "Bus",
    title: "Cab & Vehicle Rental",
    short:
      "On-demand cars, vans, tempo travellers, mini buses, and tour buses.",
    long:
      "On-demand cars, vans, tempo travellers, mini buses, and tour buses for any group size — corporate, family, or event travel.",
  },
  {
    number: "06",
    slug: "outstation-round-trips",
    icon: "Route",
    title: "Outstation & Local Trips",
    short:
      "Point-to-point and round-trip travel for any distance, any occasion.",
    long:
      "Long-distance and multi-city round trips with experienced outstation drivers, alongside point-to-point local travel for any occasion.",
  },
];

export const vehicles = [
  {
    category: "Cars",
    capacity: "4 Pax",
    description:
      "Sedans/hatchbacks for local trips, airport transfers, and self-drive.",
  },
  {
    category: "Tempo Traveller",
    capacity: "12+1 Pax",
    description: "Group travel and corporate staff commute.",
  },
  {
    category: "Mini Bus",
    capacity: "17–20 Pax*",
    description: "Mid-size group and corporate shuttle.",
  },
  {
    category: "Tour Bus",
    capacity: "35–50 Pax*",
    description: "Large-group tours and outstation trips.",
  },
  {
    category: "Vans",
    capacity: "Flexible",
    description: "Flexible small-group and luggage-friendly transport.",
  },
];

export const whyChooseUs = [
  {
    icon: "CalendarCheck2",
    title: "Since 2016",
    description: "Established experience serving the region.",
  },
  {
    icon: "Bus",
    title: "Wide Vehicle Range",
    description: "From cars to tour buses, for any group size.",
  },
  {
    icon: "Briefcase",
    title: "Corporate + Personal Expertise",
    description: "Equally at home with daily commutes and family trips.",
  },
  {
    icon: "MapPin",
    title: "Two Operating Bases",
    description: "Gummidipoondi (TN) & Tada (AP) for faster regional coverage.",
  },
  {
    icon: "ShieldCheck",
    title: "Experienced, Verified Drivers",
    description: "Safety and comfort on every trip.",
  },
  {
    icon: "Clock",
    title: "24/7 Availability",
    description: "Round-the-clock service whenever you need us.",
  },
];

export const serviceTypeOptions = [
  "Tours & Travels",
  "Corporate Travel",
  "Self Drive",
  "Airport Pickup & Drop",
  "Cab & Vehicle Rental",
  "Other",
];
