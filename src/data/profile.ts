// Content migrated from ../personal-website. Keep personal content in this file.
import { assetPath } from "../lib/assetPath";

export const portraitSettings = {
  zoom: 1.05,
  horizontal: -30,
  vertical: 0,
};

export const profile = {
  name: "Po Peng (Eric)",
  shortName: "Po Peng",
  role: "Embedded Software Engineer",
  affiliation: "M.S. ECE · University of Washington",
  location: "Seattle, Washington",
  email: "ericpp@uw.edu",
  personalEmail: "ericpp.peng@gmail.com",
  github: "https://github.com/ericpp-peng",
  linkedin: "https://www.linkedin.com/in/po-peng/",
  resume:
    "https://drive.google.com/file/d/1zsb_pGQGMrj_uBWThKAIpDqY7sorhUAK/view?usp=sharing",
  description:
    "Po Peng (Eric), an embedded software engineer and M.S. ECE student at the University of Washington. Embedded systems, firmware, and life beyond the screen.",
};

export const education = [
  {
    name: "University of Washington",
    subtitle: "M.S. in Electrical and Computer Engineering",
    date: "Expected June 2027",
    logo: assetPath("/images/UW-logo.svg"),
    details: ["GPA: 3.75 / 4.0"],
  },
  {
    name: "National Taiwan University of Science and Technology",
    subtitle: "M.S. in Electrical Engineering",
    date: "June 2020",
    logo: assetPath("/images/NTUST_logo.svg"),
    details: [
      "GPA: 3.92 / 4.3",
      "KDD Cup: built Python workflows for preprocessing, feature engineering, and model training on 500,000+ data points to predict transportation preferences. Achieved a weighted F1-score of 0.6884, close to the first-place score of approximately 0.7.",
      "Thesis: Analysis of Call Admission Control Schemes for Secondary Users in CRN. Proposed an access mechanism combining spectrum leasing, channel aggregation, and hand-offs to improve spectrum utilization, lower delay, and increase throughput.",
    ],
  },
  {
    name: "Chang Gung University",
    subtitle: "B.S. in Electrical Engineering",
    date: "June 2018",
    logo: assetPath("/images/CGU_logo.svg"),
    details: [
      "GPA: 3.7 / 4.0",
      "Intelligent Curtain System: first place in the communications field at the final project exhibition.",
      "Created an illumination-aware curtain system using SmartServer, Zigbee sensors, and Power Line Communication. Designed and soldered the control PCB using D flip-flops, BJTs, and RLC components, and programmed Zigbee firmware to store temperature and brightness data.",
    ],
  },
];

export const experience = [
  {
    name: "Qualcomm",
    subtitle: "Embedded Software Engineer · Internship",
    date: "June – September 2026",
    logo: assetPath("/images/qualcomm.svg"),
    // The original describes this role as incoming. Do not infer completion.
    status: "Incoming",
    details: [
      "Focus areas: embedded software, firmware development, and system-level debugging.",
    ],
  },
  {
    name: "Moxa",
    subtitle: "Embedded Software Engineer · Full-time",
    date: "June 2021 – October 2024",
    logo: assetPath("/images/MOXA-logo.svg"),
    status: "",
    details: [
      "Worked on Linux-based protocol gateways and MCU-based media converters. Protocol gateway products achieved USD 3M/year revenue with 10% year-over-year growth (2021–2024).",
      "Led modularization of the IEC 60870-5-101/104 protocol stack for MGate 5192, cutting integration time for new products by over 50%.",
      "Built a full-stack serial configuration and troubleshooting solution for MGate 5216, reducing debugging time between software R&D and clients by over 90%.",
      "Improved the RESTful library for the MGate 5000 series with an IPC-based design, reducing API maintenance and development time by 10%.",
      "Developed unit tests and Valgrind scripts integrated with GitLab CI, reaching 90% test coverage and detecting memory issues early.",
      "Co-developed the SD card backup module with the Linux kernel team and resolved issues through kernel source analysis.",
      "Led IMC-P21A-G2 Ethernet-to-fiber software development from project initiation to market launch with product, hardware, and SQA teams.",
      "Resolved sample point and RAM configuration issues for Japanese clients using the ICF-1171I CAN-to-fiber converter.",
    ],
  },
];

export const skills = [
  { label: "Languages", items: "C, Shell, Python, Verilog, HTML, JavaScript" },
  { label: "Systems", items: "Linux, TCP/IP, I2C, UART, SQLite, Makefile" },
  { label: "Tools", items: "GitLab CI/CD, Docker, Valgrind, Jira" },
];

export const projects = [
  {
    title: "Intelligent Curtain System",
    category: "Classroom",
    year: "2017",
    description:
      "An undergraduate capstone connecting embedded systems and IoT for home automation. SmartServer and Zigbee sensors adjust curtains to ambient light.",
    note: "First place · Communications capstone exhibition",
    src: assetPath(
      "/videos/lifestyle/20170525_undergraducate_capstone_curtain.mp4",
    ),
    poster: assetPath("/images/posters/curtain.jpg"),
  },
  {
    title: "FPGA LED Game",
    category: "Classroom",
    year: "2018",
    description:
      "A 2D LED dodging game implemented in Verilog on an FPGA development board.",
    note: "Verilog · FPGA · Digital design",
    src: assetPath("/videos/lifestyle/20180118_fpga.mp4"),
    poster: assetPath("/images/posters/fpga.jpg"),
  },
  {
    title: "Hsinchu × Mei-Chu Hackathon",
    category: "Hackathon",
    year: "2019",
    description:
      "A mobile app concept for collecting actual working hours and mental well-being data to raise awareness of labor conditions.",
    note: "Mobile application · Social impact",
    src: assetPath("/videos/20191026_HackMeiChu.mp4"),
    poster: assetPath("/images/posters/hackathon.jpg"),
  },
  {
    title: "FireWall",
    category: "Hackathon",
    year: "2020",
    description:
      "A fire alert system using a sensor network to support more efficient evacuation and rescue operations.",
    note: "Sensor networks · Fire safety",
    src: assetPath("/videos/lifestyle/20201011_makentu.mp4"),
    poster: assetPath("/images/posters/firewall.jpg"),
  },
];

export const snapshots = [
  {
    title: "Beneath the surface",
    description: "Diving · Balicasag Island, Philippines",
    src: assetPath("/videos/lifestyle/20240402_diving.MP4"),
    poster: assetPath("/images/posters/diving.jpg"),
  },
  {
    title: "A game with friends",
    description: "Badminton · July 2025",
    src: assetPath("/videos/lifestyle/20250711_badminton.mp4"),
    poster: assetPath("/images/posters/badminton.jpg"),
  },
  {
    title: "A little Chopin",
    description: "Piano · Fantaisie-Impromptu, Op. 66",
    src: assetPath("/videos/lifestyle/20160524_piano.mp4"),
    poster: assetPath("/images/posters/piano.jpg"),
  },
  {
    title: "A day in the snow",
    description: "Snowboarding · Echigo-Yuzawa, Japan",
    src: assetPath("/videos/lifestyle/20250225_snow.mp4"),
    poster: assetPath("/images/posters/snow.jpg"),
  },
];
