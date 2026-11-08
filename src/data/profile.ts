// Resume content follows the AMD Embedded Firmware Development Engineer .typ resume.
// Older project demos and lifestyle media are retained below.
import { assetPath } from "../lib/assetPath";

export type UseCase = {
  image: string;
  title: string;
  alt: string;
  width: number;
  height: number;
  source?: { label: string; href: string };
};

export type ResumeEntry = {
  name: string;
  heading?: string;
  subtitle: string;
  date: string;
  location?: string;
  logo: string;
  tags?: string[];
  skills?: { label: string; items: string }[];
  details?: string[];
  sections?: {
    title: string;
    image?: string;
    useCase?: UseCase;
    items: string[];
  }[];
};

export const portraitSettings = { zoom: 1.05, horizontal: -30, vertical: 0 };

export const profile = {
  name: "Po (Eric) Peng",
  shortName: "Po Peng",
  role: "Embedded Software Engineer",
  affiliation: "M.S. ECE · University of Washington",
  location: "Seattle, Washington",
  email: "ericpp.peng@gmail.com",
  github: "https://github.com/ericpp-peng",
  linkedin: "https://www.linkedin.com/in/po-peng/",
  resume: assetPath("/resume/Po-Eric-Peng-Resume.pdf"),
  description:
    "Po (Eric) Peng, embedded software engineer and M.S. ECE student at the University of Washington. Kernel development, embedded systems, and hardware/software integration.",
};

export const education: ResumeEntry[] = [
  {
    name: "University of Washington",
    subtitle: "M.S. in Electrical and Computer Engineering | GPA: 3.94 / 4.0",
    date: "Expected March 2027",
    location: "Seattle, WA",
    logo: assetPath("/images/UW-logo.svg"),
    tags: [
      "Parallel Computer Architecture",
      "GPU Parallel Computing",
      "Digital Systems Design with FPGAs",
    ],
  },
  {
    name: "National Taiwan University of Science and Technology",
    subtitle: "M.S. in Electrical Engineering | GPA: 3.92 / 4.3",
    date: "August 2020",
    location: "Taipei, Taiwan",
    logo: assetPath("/images/NTUST_logo.svg"),
  },
  {
    name: "Chang Gung University",
    subtitle: "B.S. in Electrical Engineering | GPA: 3.7 / 4.0",
    date: "June 2018",
    location: "Taoyuan, Taiwan",
    logo: assetPath("/images/CGU_logo.svg"),
  },
];

export const experience: ResumeEntry[] = [
  {
    name: "Qualcomm",
    heading: "Embedded Software Engineer",
    subtitle: "Qualcomm · Internship",
    date: "June – September 2026",
    location: "San Diego, CA",
    logo: assetPath("/images/qualcomm.svg"),
    skills: [
      { label: "Languages", items: "C" },
      {
        label: "Technologies & Tools",
        items: "UEFI, EDK II, UART, timer interrupts, GitHub CI/CD",
      },
    ],
    details: [
      "**Developed** the **first UEFI prototype** on a new architecture using **C**, integrating platform-specific **UART** support, implementing **timer interrupt** support, and debugging boot flow to reach the UEFI interactive shell.",
      "**Contributed** to open-sourcing downstream **EDK II** firmware by aligning **CI/CD** with 100% of upstream **GitHub** checks and resolving all resulting failures.",
    ],
  },
  {
    name: "Moxa",
    heading: "Embedded Software Engineer",
    subtitle: "Moxa · R&D",
    date: "June 2021 – October 2024",
    location: "Taipei, Taiwan",
    logo: assetPath("/images/MOXA-logo.svg"),
    skills: [
      { label: "Languages", items: "C" },
      {
        label: "Technologies & Tools",
        items:
          "Embedded Linux, TCP/IP, Ethernet, CAN, IPC, GitLab CI/CD, Valgrind, Coverity",
      },
    ],
    sections: [
      {
        title: "Protocol Gateways (Embedded Linux)",
        image: assetPath("/images/protocol_gateway.png"),
        useCase: {
          image: assetPath("/images/mgate_use_case.jpg"),
          title: "Electric Power Industry",
          alt: "Protocol gateway use case connecting SCADA, RTUs, meters, and relays in the electric power industry",
          width: 3000,
          height: 2028,
          source: {
            label: "ipc2u.com",
            href: "https://ipc2u.com/news/product-news/mgate-5119-t-iec-61850-gateway-for-power-engineering/",
          },
        },
        items: [
          "**Led** cross-functional development of [MGate 5192](https://www.moxa.com/en/products/industrial-edge-connectivity/protocol-gateways/modbus-tcp-gateways/mgate-5192-series)’s **reusable Linux-based C protocol stack** and backend, implementing socket communication and packet handling to cut new-product integration from **3 months to 1 month**.",
          "**Built** a proprietary CAN protocol module from scratch and evaluated **multithreaded transmission strategies** across multiple ports, analyzing race conditions, mutex contention, and transaction-scanning overhead.",
          "**Improved** an MGate 5000 RESTful library using **IPC**, reducing API development time by **20%**.",
          "**Designed** an SD card backup module and resolved firmware issues through **Linux kernel analysis**.",
          "**Established** automated testing pipelines with Valgrind and Coverity analysis in **GitLab CI/CD**.",
        ],
      },
      {
        title: "Media Converters (MCUs)",
        image: assetPath("/images/media_converter.png"),
        useCase: {
          image: assetPath("/images/converter_use_case.svg"),
          title: "Subway Station",
          alt: "Media converter use case in a subway station",
          width: 2926,
          height: 787,
        },
        items: [
          "**Led** MCU firmware development in **C** for an [Ethernet-to-fiber converter](https://www.moxa.com/en/products/industrial-network-infrastructure/ethernet-media-converters/ethernet-to-fiber-media-converters/imc-p21a-g2-series) from kickoff to market launch, coordinating with hardware, product, and SQA teams.",
          "**Resolved** customer communication issues on a [CAN-to-fiber converter](https://www.moxa.com/en/products/industrial-edge-connectivity/serial-converters/fieldbus-to-fiber-converters/icf-1171i-series) by tuning the CAN FD sample point and correcting **RAM configuration errors** affecting high-speed transmission.",
        ],
      },
    ],
  },
];

export const mentoring: ResumeEntry[] = [
  {
    name: "University of Washington",
    heading: "FIRST Robotics Mentor",
    subtitle: "University of Washington",
    date: "September – December 2025",
    location: "Seattle, WA",
    logo: assetPath("/images/UW-logo.svg"),
    details: [
      "**Mentored** students in electronics, sensors, wiring, and software framework design, emphasizing **PID control**, Java programming, and computer vision.",
    ],
  },
];

export const skills = [
  { label: "Languages", items: "C/C++, Python, Bash, Verilog" },
  {
    label: "Embedded Systems",
    items:
      "Embedded Linux, RTOS (μC/OS-II, Zephyr), MCU firmware, ARM, UEFI/EDK II, bootloaders",
  },
  {
    label: "Interfaces & Protocols",
    items: "I2C, UART, TCP/IP, Ethernet, CAN, Modbus",
  },
  {
    label: "Development Tools",
    items:
      "Git, Makefile, GitLab CI/CD, GitHub, TRACE32, Valgrind, Coverity, Docker",
  },
];

export const resumeProjects = [
  {
    title: "Parallel Computing on a 2,000-Core RISC-V System",
    date: "January – March 2026",
    category: "Classroom",
    details: [
      "Optimized **C++** kernels through architecture-aware parallelization and latency hiding.",
      "Managed explicit data movement and synchronization without cache coherence, using **cycle-accurate simulation** to identify compute, memory, and NoC bottlenecks.",
    ],
    tags: ["C++", "RISC-V", "Parallel computing"],
  },
  {
    title: "Embedded Sensing Capstone — UW SEAL",
    date: "January – June 2026",
    category: "Classroom",
    details: [
      "Built an **ESP32** sensing system with on-device signal processing, ML inference, and **LoRa** communication for industrial gas leak detection.",
    ],
    tags: ["ESP32", "Signal processing", "ML inference", "LoRa"],
  },
  {
    title: "RTOS Implementation",
    date: "September 2018 – January 2019",
    category: "Classroom",
    details: [
      "Modified the **μC/OS-II RTOS** kernel to implement and evaluate scheduling algorithms.",
    ],
    tags: ["μC/OS-II", "Scheduling"],
  },
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
    title: "Piano performance",
    description: "Fantaisie-Impromptu, Op. 66 (Chopin)",
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
