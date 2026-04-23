export const personalInfo = {
  name: "Muhammad Shobri",
  title: "Mechanical Engineer | CAD & Manufacturing Specialist",
  description: "Mechanical Engineering graduate from Sampoerna University (double degree with the University of Arizona) and recipient of the SPARKS 100% Scholarship. Currently a Mechanical & Technical Engineer at SU-SPRIC, working on plastic asphalt development, data analysis, and lab equipment improvement.",
  linkedin: "https://www.linkedin.com/in/mshobri/",
  email: "m.shobri2002@gmail.com",
  phone: "+62-812-7540-1100"
};

export const aboutMe = {
  intro: "Mechanical Engineering graduate from Sampoerna University (double degree with the University of Arizona) and recipient of the SPARKS 100% Scholarship. Currently a Mechanical & Technical Engineer at SU-SPRIC, focusing on plastic asphalt development, experimental data analysis, and laboratory equipment improvement.",
  experience: "Previously gained hands-on experience at PT Astra Otoparts (Nusametal) in process development — improving assembly processes, developing automated conveyor and robotic mechanisms, and conducting leak testing analysis. Also served as a Manufacturing Laboratory Assistant, instructing students in conventional lathe, CNC milling, 3D printing, virtual welding, and resin casting.",
  goals: "Aiming to build a career in advanced manufacturing, industrial design, and robotic automation where I can apply my expertise in mechanical design, FEA, CAD/CAM, and hardware engineering.",
  education: {
    institution: "Sampoerna University & University of Arizona",
    program: "B.S. in Mechanical Engineering (Double Degree)",
    focus: "Mechanical Design, Manufacturing, and Automation"
  },
  careerGoals: {
    title: "Advanced Manufacturing Engineer",
    certification: "Targeting further CAD/CAM professional certifications",
    vision: "To lead innovative automation engineering projects."
  }
};

export const skills = [
  {
    category: 'Engineering Design',
    items: ['SolidWorks', 'SketchUp', 'Finite Element Analysis (FEA)', '3D Modeling'],
    icon: 'Code'
  },
  {
    category: 'Manufacturing',
    items: ['CNC Programming', 'Conventional Machining', 'Welding & Virtual Welding', '3D Printing', 'Resin Casting'],
    icon: 'Shield'
  },
  {
    category: 'Electronics & Software',
    items: ['Arduino Programming', 'CAM Software (G-code)', 'Data Analysis'],
    icon: 'Database'
  },
  {
    category: 'Soft Skills & Languages',
    items: ['Public Speaking', 'Leadership', 'Crisis Management', 'Community Engagement', 'English & Indonesian'],
    icon: 'User'
  }
];

export const experience = [
  {
    title: 'Mechanical & Technical Engineer',
    institution: 'SU-SPRIC (Sampoerna University - Sustainable Pavement Research and Innovation Center)',
    date: 'Nov 2025 - Present',
    achievement: 'Developing and optimizing formulations for plastic asphalt mixtures, analyzing experimental test data of asphalt specimens, and performing maintenance and modification of laboratory machines and equipment.',
  },
  {
    title: 'Product Engineer Intern - Process Development',
    institution: 'PT Astra Otoparts Divisi Nusametal',
    date: 'May 2024 - Aug 2024',
    achievement: 'Improved assembly processes in the gear oil pump-driven assembly (pin positioning, presser design, jig configuration). Developed automated conveyor and robotic systems for part handling. Conducted and analysed leak testing trial data using statistical methods.',
  },
  {
    title: 'Manufacturing Laboratory Assistant',
    institution: 'Sampoerna University',
    date: 'Jul 2023 - Dec 2023',
    achievement: 'Instructed students in operating conventional lathe, semi-CNC milling, CNC lathe, CNC mill, 3D printer, virtual welding, and resin casting. Maintained all machinery and demonstrated expertise in CAM software for G-code generation.',
  },
  {
    title: 'Student Ambassador',
    institution: 'Sampoerna University',
    date: 'Dec 2022 - Aug 2025',
    achievement: 'Engaged and fostered relationships with prospective students, provided in-depth explanations of campus programs, and conducted extensive campus tours for high school visitors.',
  },
  {
    title: 'Mentor & Head of Program (BESTS & SOfE)',
    institution: 'IMechE SUSC & Sampoerna University',
    date: 'Aug 2023 - Sep 2025',
    achievement: 'Coordinated the BESTS Student Exchange Program with the Institute of Science Tokyo — managing logistics, itinerary, and study visits. Led the Speak Out for Engineering (SOfE) competition selection process at Sampoerna University.',
  }
];

export const projects = [
  {
    id: "harmonic_drive",
    title: "Harmonic Gear Drive",
    year: "January - June 2025",
    description: "A fully engineered harmonic drive gear system developed as a high-precision actuator for collaborative robotic applications. The model includes two complete design iterations, each achieving smooth functional performance with minimal backlash. The system is optimized for a NEMA 17 stepper motor and provides a 1:24 reduction ratio, making it suitable for compact robotic arm joints requiring accurate motion transmission.",
    technologies: ["NEMA 17 Stepper", "Gear Design", "Precision Mechanics", "SolidWorks"],
    highlights: ["1:24 Reduction Ratio", "Minimal Backlash", "Two Design Iterations"],
    images: [
      "/assets/harmonic_drive/Design 1/Assembly/312f447b02144b9383a41a0b46d5c831.jpg",
      "/assets/harmonic_drive/Design 1/Assembly/b1594b64083e4c69866f313fea9acc2f.jpg",
      "/assets/harmonic_drive/Design 2/Assembly/5c7aa2cae1dd42658891ed3fa6565284.jpg",
      "/assets/harmonic_drive/Design 2/Assembly/c750f58d6c714b1789e6dffca432380b.jpg"
    ]
  },
  {
    id: "conveyor",
    title: "Conveyor",
    year: "January 2025",
    description: "A small-scale conveyor designed with an adjustable roller-holder mechanism to enable accurate belt tension control. The conveyor integrates a stepper motor mounted beneath the frame and utilizes a custom-designed pulley-belt transmission system, including a self-designed pulley wheel. The design emphasizes practicality, rigidity, and smooth operational efficiency for light industrial handling tasks.",
    technologies: ["Stepper Motor", "Pulley-Belt System", "Mechanical Design", "SolidWorks"],
    highlights: ["Adjustable roller-holder mechanism", "Custom-designed pulley wheel", "Self-designed transmission system"],
    images: [
      "/assets/conveyor/Assembly/058a20e96c8b4acab892aa04b6271733.jpg",
      "/assets/conveyor/Assembly/a4a47a2d25534b708a738ad055aaae86.jpg",
      "/assets/conveyor/Parts/171823f9568d482ca4c3878708f2d758.jpg",
      "/assets/conveyor/Parts/8be9869e36fe4721843df9223231f44f.jpg"
    ]
  },
  {
    id: "dof_robotic",
    title: "3+1 DOF Desktop Robotic Arm",
    year: "June - July 2025",
    description: "A fully engineered 3+1 degree-of-freedom robotic arm created as a capstone project for industrial-oriented applications. All mechanical components were designed with precise tolerances to ensure rigidity and repeatability. The system operates using stepper motors paired with pulley-belt transmissions on all axes. The arm's architecture emphasizes low-cost manufacturing, compact design, and high functional reliability, making it suitable for prototyping, educational use, and small-scale automation environments.",
    technologies: ["Stepper Motors", "Pulley Transmission", "Robotics", "SolidWorks"],
    highlights: ["Lifts up to 150g of load", "Low-cost educational tool", "Capstone research project"],
    images: [
      "/assets/dof_robotic/Assembly/Screenshot 2025-06-29 230316.png",
      "/assets/dof_robotic/Assembly/Screenshot 2025-06-29 230335.png",
      "/assets/dof_robotic/Assembly/Screenshot 2025-06-29 230414.png",
      "/assets/dof_robotic/Parts/Screenshot 2025-06-29 215206.png",
      "/assets/dof_robotic/Parts/Screenshot 2025-06-29 220016.png"
    ]
  },
  {
    id: "crane_claw",
    title: "Crane Claw-Integrated Walking Aids",
    year: "January 2024 - April 2025",
    description: "A novel walking aid with an integrated crane claw mechanism designed to assist elderly individuals in retrieving objects from the floor, enhancing independence and reducing fall risks. The project includes the design of the electrical housing, battery storage, and the claw actuation mechanism utilizing a cable winch mechanism and PLA material. Safety and durability were ensured through comprehensive stress and fatigue analyses. This research was published with DOI: 10.5614/joki.2025.17.1.3.",
    technologies: ["CAD", "PLA 3D Printing", "Cable Winch Mechanism", "Stress & Fatigue Analysis"],
    highlights: ["Published Paper (DOI: 10.5614/joki.2025.17.1.3)", "Integration with walking aids for elderly", "Comprehensive stress analysis"],
    images: [
      "/assets/crane_claw/Project 1_[Photo Name].png",
      "/assets/crane_claw/WhatsApp Image 2025-08-10 at 22.46.50.jpeg",
      "/assets/crane_claw/WhatsApp Image 2025-08-10 at 22.48.42.jpeg",
      "/assets/crane_claw/WhatsApp Image 2025-08-10 at 22.50.01.jpeg",
      "/assets/crane_claw/WhatsApp Image 2025-08-10 at 23.05.10.jpeg",
      "/assets/crane_claw/WhatsApp Image 2025-08-10 at 23.05.47.jpeg"
    ]
  },
  {
    id: "otoparts_sorting",
    title: "Gear Oil Driven Plate Sorting Mechanism",
    year: "May - August 2024",
    description: "A multi-stage plate-sorting mechanism developed during an internship at PT Astra Otoparts Divisi Nusametal to enhance the handling of small metal plates used in Gear Oil Driven assembly. Early concepts (Designs 1-2) featured a semi-manual magazine system actuated pneumatically. Later iterations (Designs 3-5) transitioned to a fully automated vibratory-based system, incorporating a slider mechanism with a 0.3 mm separation plate for precise sorting. The advanced designs integrated directly with the assembly of the gear, enabling a fully automated workflow aimed at reducing human error and improving manufacturing efficiency.",
    technologies: ["Pneumatics", "Automation", "Vibratory Feeder", "SolidWorks"],
    highlights: ["5 Design Iterations", "0.3mm Precision Sorting", "Fully Automated Workflow"],
    images: [
      "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 1/Assembly/WhatsApp Image 2025-08-11 at 01.25.36.jpeg",
      "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 2/Assembly/WhatsApp Image 2025-08-11 at 16.33.12.jpeg",
      "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 3/Assembly/WhatsApp Image 2025-08-11 at 16.33.37.jpeg",
      "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 4/Assembly/WhatsApp Image 2025-08-11 at 16.33.54.jpeg",
      "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 5/Assembly/WhatsApp Image 2025-08-11 at 16.34.11.jpeg"
    ]
  },
  {
    id: "otoparts_frame",
    title: "Oil Separator Assembly Machine's Frame",
    year: "June 2024",
    description: "A redesigned structural frame for the Oil Separator Assembly Machine created during the internship at PT Astra Otoparts. The new configuration introduces a dedicated under-machine passageway to allow maintenance personnel easier and safer access, improving serviceability without compromising structural integrity or machine performance.",
    technologies: ["Structural Design", "Ergonomics", "SolidWorks"],
    highlights: ["Improved maintenance access", "Maintained structural integrity", "Ergonomic redesign"],
    images: [
      "/assets/otoparts/Oil separator Assembly machine frame/WhatsApp Image 2025-12-06 at 16.32.49_cc5f2e26.jpg",
      "/assets/otoparts/Oil separator Assembly machine frame/WhatsApp Image 2025-12-06 at 16.33.11_016353fe.jpg"
    ]
  },
  {
    id: "thermometer",
    title: "2-in-1 Portable Thermometer Case",
    year: "April 2024",
    description: "A custom enclosure designed for a university project involving a portable thermometer equipped with two temperature-sensing technologies: a thermocouple and an infrared sensor. The case provides functional component integration, user-friendly handling, and structural protection for the internal electronics.",
    technologies: ["Enclosure Design", "Thermocouple", "Infrared Sensor", "SolidWorks"],
    highlights: ["Dual-sensor integration", "Ergonomic handling", "Protective electronics housing"],
    images: [
      "/assets/thermometer/Assembly/WhatsApp Image 2025-12-06 at 15.49.15_cc8abce2.jpg",
      "/assets/thermometer/Parts/WhatsApp Image 2025-08-10 at 23.43.02.jpeg",
      "/assets/thermometer/Parts/WhatsApp Image 2025-08-10 at 23.44.19.jpeg"
    ]
  }
];
