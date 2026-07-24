export const personalInfo = {
  name: "Muhammad Shobri",
  title: "Mechanical Engineer | Drafter Engineer (2D/3D)",
  description: "Mechanical Engineering graduate from Sampoerna University (double degree with the University of Arizona) and recipient of the SPARKS 100% Scholarship. Currently a Mechanical & Technical Engineer at SU-SPRIC, working on plastic asphalt development, data analysis, and lab equipment improvement.",
  linkedin: "https://www.linkedin.com/in/mshobri/",
  email: "m.shobri2002@gmail.com",
  phone: "+62-812-7540-1100",
  whatsapp: "https://wa.me/6281275401100"
};

export const aboutMe = {
  intro: "Mechanical Engineering graduate from Sampoerna University (double degree with the University of Arizona) and recipient of the SPARKS 100% Scholarship. Currently a Mechanical & Technical Engineer at SU-SPRIC, focusing on plastic asphalt development, experimental data analysis, and laboratory equipment improvement.",
  experience: "Previously gained hands-on experience at PT Astra Otoparts (Nusametal) in process development — leveraging AutoCAD and SolidWorks to redesign assembly tooling, jigs, and fixtures, developing automated conveyor mechanisms, and conducting leak testing analysis. Also served as a Manufacturing Laboratory Assistant, instructing students in conventional lathe, CNC milling, 3D printing, virtual welding, and resin casting.",
  goals: "Aiming to build a career in advanced manufacturing, industrial design, and robotic automation where I can apply my expertise in mechanical design, FEA, CAD/CAM, and hardware engineering.",
  education: {
    institution: "Sampoerna University | University of Arizona",
    program: "Bachelor of Engineering | Bachelor of Science in Mechanical Engineering",
    focus: "Mechanical Design, Manufacturing, and Automation"
  },
  careerGoals: {
    title: "Advanced Manufacturing Engineer",
    certification: "Targeting further CAD/CAM professional certifications.",
    vision: "To become a skilled engineer in manufacturing, specializing in drafting, while continuously learning and growing into higher-impact roles."
  }
};

export const skills = [
  {
    category: 'Engineering Design',
    items: ['AutoCAD', 'SolidWorks', '3D Modeling', 'SketchUp', 'Finite Element Analysis (FEA)', 'Onshape'],
    icon: 'Code'
  },
  {
    category: 'Manufacturing',
    items: ['CNC Programming and Machining', 'Conventional Machining', 'Welding & Virtual Welding', '3D Printing', 'Resin Casting'],
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
    skills: ['Plastic Asphalt', 'Data Analysis', 'Lab Equipment Maintenance']
  },
  {
    title: 'Product Engineer Intern - Process Development',
    institution: 'PT Astra Otoparts Divisi Nusametal',
    date: 'May 2024 - Aug 2024',
    achievement: 'Monitored workflows and orchestrated Root Cause Analysis (Fishbone & Why-Why) to resolve line bottlenecks, implement Kaizen (continuous improvement) initiatives, and execute PDCA cycles for maximum reliability. Conducted Six Sigma trial analysis using Excel and MATLAB (mean, standard deviation, Normal Distribution, LCL/UCL) to evaluate machine stability, protect OEE, and eliminate quality claims from clients like AHM. Leveraging AutoCAD and SolidWorks, redesigned assembly line tooling, jigs, and fixtures, engineering custom Pokayoke (sensor) repositioning, magnetic pressers, and access frames to minimise cycle times and improve REBA scores. Managed Cross-Functional Collaboration to execute Dandori (setup changeover) procedures, handle high-volume line updates, and perform precision CNC Milling setups and machine repairs.',
    skills: ['AutoCAD', 'SolidWorks', 'Root Cause Analysis', 'Kaizen / PDCA', 'Six Sigma', 'CNC Milling', 'Pokayoke', 'Tooling & Jigs']
  },
  {
    title: 'Manufacturing Laboratory Assistant',
    institution: 'Sampoerna University',
    date: 'Jul 2023 - Dec 2023',
    achievement: 'Provided hands-on training and technical guidance to 35+ engineering students in manufacturing laboratory courses, covering conventional machining, CNC machining, additive manufacturing, virtual welding, and resin casting processes. Assessed and reviewed 100+ laboratory reports and practical assignments, ensuring compliance with course requirements while supporting students\' understanding of manufacturing principles and processes. Collaborated with faculty members to maintain laboratory equipment and deliver CAM training, including G-code generation and CNC programming, ensuring safe and effective laboratory operations.',
    skills: ['CAM (G-code)', 'CNC Machining', 'Conventional Machining', '3D Printing', 'Resin Casting']
  },
  {
    title: 'Student Ambassador',
    institution: 'Sampoerna University',
    date: 'Dec 2022 - Aug 2025',
    achievement: 'Engaged with and guided 200+ prospective students, parents, and visitors, fostering meaningful relationships and providing support throughout university events, campus visits, and admissions activities. Delivered detailed presentations on academic programs, scholarships, and campus opportunities, helping prospective students make informed educational decisions aligned with their interests and goals. Conducted large-scale campus tours for groups of prospective students, showcasing academic facilities, laboratories, and student life while ensuring an informative and engaging campus experience.',
    skills: ['Public Speaking', 'Presentation', 'Campus Leadership', 'Event Facilitation']
  }
];

export const projects = [
  {
    id: "harmonic_drive",
    title: "Harmonic Gear Drive",
    year: "January - June 2025",
    description: "A fully engineered harmonic drive gear system developed as a high-precision actuator for collaborative robotic applications. The model includes two complete design iterations, each achieving smooth functional performance with minimal backlash. The system is optimized for a NEMA 17 stepper motor and provides a 1:24 reduction ratio, making it suitable for compact robotic arm joints requiring accurate motion transmission.",
    technologies: ["NEMA 17 Stepper Motor", "Gear Design", "Precision Mechanics", "SolidWorks"],
    highlights: ["1:24 Reduction Ratio", "Minimal Backlash", "Collaborative Robot Actuator"],
    imageCategories: [
      {
        name: "Design 1",
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/harmonic_drive/Design 1/Assembly/312f447b02144b9383a41a0b46d5c831.jpg",
              "/assets/harmonic_drive/Design 1/Assembly/b1594b64083e4c69866f313fea9acc2f.jpg"
            ]
          },
          {
            type: "Parts",
            images: [
              "/assets/harmonic_drive/Design 1/Parts/04b15a5c85e6493fb71a079c5667cf81.jpg",
              "/assets/harmonic_drive/Design 1/Parts/1a0b4676aed048b793a4c0c70f34dc2d.jpg",
              "/assets/harmonic_drive/Design 1/Parts/473367521bd34797afabcdef403a5fde.jpg",
              "/assets/harmonic_drive/Design 1/Parts/4e89418eb20c4968b271e92f551f0852.jpg",
              "/assets/harmonic_drive/Design 1/Parts/56ff6e1130674d7aad2c3e41ee0622e1.jpg",
              "/assets/harmonic_drive/Design 1/Parts/68597306a6a243beb3dc15907c0790ee.jpg",
              "/assets/harmonic_drive/Design 1/Parts/98d0ae7c89f24227b49c8996e2ea8542.jpg",
              "/assets/harmonic_drive/Design 1/Parts/9f415b69fcc04279a507346de12570b7.jpg",
              "/assets/harmonic_drive/Design 1/Parts/adfdc7d8c7e14f02a46f44da5423d2b3.jpg",
              "/assets/harmonic_drive/Design 1/Parts/fd58cd27b6a0488ebcdeda37b93d35ee.jpg"
            ]
          }
        ]
      },
      {
        name: "Design 2",
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/harmonic_drive/Design 2/Assembly/5c7aa2cae1dd42658891ed3fa6565284.jpg",
              "/assets/harmonic_drive/Design 2/Assembly/c750f58d6c714b1789e6dffca432380b.jpg"
            ]
          },
          {
            type: "Parts",
            images: [
              "/assets/harmonic_drive/Design 2/Parts/300bcfc760784530ae4bab2a96dee552.jpg",
              "/assets/harmonic_drive/Design 2/Parts/3fb6b37950ca4fe2a3817915af9bf7a4.jpg",
              "/assets/harmonic_drive/Design 2/Parts/54c5fdd5ce9a44fb8112248d9dd25620.jpg",
              "/assets/harmonic_drive/Design 2/Parts/701b664851764be196209a962e8014a5.jpg",
              "/assets/harmonic_drive/Design 2/Parts/8aa13f2c79f54705b02283f978531f88.jpg",
              "/assets/harmonic_drive/Design 2/Parts/e2be0786f80a4476b6093d39c69ce978.jpg"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "conveyor",
    title: "Conveyor",
    year: "January 2025",
    description: "A small-scale conveyor designed with an adjustable roller-holder mechanism to enable accurate belt tension control. The conveyor integrates a stepper motor mounted beneath the frame and utilizes a custom-designed pulley-belt transmission system, including a self-designed pulley wheel. The design emphasizes practicality, rigidity, and smooth operational efficiency for light industrial handling tasks.",
    technologies: ["NEMA 17 Stepper Motor", "Pulley-Belt System", "Mechanical Design", "SolidWorks"],
    highlights: ["Adjustable roller-holder mechanism", "Custom-designed pulley wheel", "Self-designed transmission system"],
    imageCategories: [
      {
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/conveyor/Assembly/058a20e96c8b4acab892aa04b6271733.jpg",
              "/assets/conveyor/Assembly/a4a47a2d25534b708a738ad055aaae86.jpg"
            ]
          },
          {
            type: "Parts",
            images: [
              "/assets/conveyor/Parts/171823f9568d482ca4c3878708f2d758.jpg",
              "/assets/conveyor/Parts/224cdd4e5d0f47e9aece88d164e95623.jpg",
              "/assets/conveyor/Parts/2a6e2377d9a34a428e58d946d9625ab6.jpg",
              "/assets/conveyor/Parts/4933d6acb1a34344a0eed0e8834793c0.jpg",
              "/assets/conveyor/Parts/790fbe469819422d990c124950b0752f.jpg",
              "/assets/conveyor/Parts/829189bd28aa4369bebbe4a60a35bc5a.jpg",
              "/assets/conveyor/Parts/8be9869e36fe4721843df9223231f44f.jpg",
              "/assets/conveyor/Parts/a48c55a9b8c94d4ab73656f512a4269e.jpg",
              "/assets/conveyor/Parts/b089eeea2fa648ffb09c3a094faccceb.jpg",
              "/assets/conveyor/Parts/d56bb77b95184f7cae9942b522078c97.jpg",
              "/assets/conveyor/Parts/e5e23b8f89da4fc5bba1c7c564b133e8.jpg",
              "/assets/conveyor/Parts/f0b224d1de1f4e4ea6663645c27a144d.jpg",
              "/assets/conveyor/Parts/f562b19f42fa452fae63581254527cd2.jpg"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "dof_robotic",
    title: "3+1 DOF Desktop Robotic Arm",
    year: "June - July 2025",
    description: "A fully engineered 3+1 degree-of-freedom robotic arm created as a capstone project for industrial-oriented applications. All mechanical components were designed with precise tolerances to ensure rigidity and repeatability. The system operates using 3 stepper motors and 1 servo motor for the end effector, paired with pulley-belt transmissions on all axes. The arm's architecture emphasizes compact design, and high functional reliability, making it suitable for prototyping, educational use, and small-scale automation environments.",
    technologies: ["NEMA 17 Stepper Motors", "Pulley Transmission", "Robotics", "SolidWorks"],
    highlights: ["Lifts up to 150g of load", "Small Desktop"],
    imageCategories: [
      {
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/dof_robotic/Assembly/Screenshot 2025-06-29 230316.png",
              "/assets/dof_robotic/Assembly/Screenshot 2025-06-29 230335.png",
              "/assets/dof_robotic/Assembly/Screenshot 2025-06-29 230414.png",
              "/assets/dof_robotic/Assembly/Screenshot 2025-06-29 230458.png",
              "/assets/dof_robotic/Assembly/Screenshot 2025-06-29 230523.png"
            ]
          },
          {
            type: "Parts",
            images: [
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 215206.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 215453.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 215635.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 215804.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 220016.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 220217.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 220528.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 221314.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 221335.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 221541.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 221809.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 222005.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 222253.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 222448.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 222804.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 222947.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 223510.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 224425.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 224755.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 225123.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 225525.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 225535.png",
              "/assets/dof_robotic/Parts/Screenshot 2025-06-29 230614.png"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "crane_claw",
    title: "Crane Claw-Integrated Walking Aids",
    year: "January 2024 - April 2025",
    description: "A novel walking aid with an integrated crane claw mechanism designed to assist elderly individuals in retrieving objects from the floor, enhancing independence and reducing fall risks. The project includes the design of the electrical housing, battery storage, and the claw actuation mechanism utilizing a cable winch mechanism and PLA material. Safety and durability were ensured through comprehensive stress and fatigue analyses. This research was published with DOI: 10.5614/joki.2025.17.1.3.",
    technologies: ["CAD", "PLA 3D Printing", "Cable Winch Mechanism", "Finite Element Analysis"],
    highlights: [
      {
        text: "Published Paper (DOI: 10.5614/joki.2025.17.1.3)",
        link: "https://doi.org/10.5614/joki.2025.17.1.3"
      },
      "Integration with walking aids for elderly", "Comprehensive stress analysis"
    ],
    imageCategories: [
      {
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/crane_claw/WhatsApp Image 2025-08-10 at 22.46.50.jpeg"
            ]
          },
          {
            type: "Parts",
            images: [
              "/assets/crane_claw/WhatsApp Image 2025-08-10 at 22.48.42.jpeg",
              "/assets/crane_claw/WhatsApp Image 2025-08-10 at 22.49.10.jpeg",
              "/assets/crane_claw/WhatsApp Image 2025-08-10 at 22.49.36.jpeg",
              "/assets/crane_claw/WhatsApp Image 2025-08-10 at 22.50.01.jpeg",
              "/assets/crane_claw/WhatsApp Image 2025-08-10 at 22.51.23.jpeg",
              "/assets/crane_claw/WhatsApp Image 2025-08-10 at 22.52.03.jpeg",
              "/assets/crane_claw/WhatsApp Image 2025-08-10 at 22.52.38.jpeg",
              "/assets/crane_claw/WhatsApp Image 2025-08-10 at 22.52.55.jpeg",
              "/assets/crane_claw/WhatsApp Image 2025-08-10 at 23.04.29.jpeg",
              "/assets/crane_claw/WhatsApp Image 2025-08-10 at 23.05.10.jpeg",
              "/assets/crane_claw/WhatsApp Image 2025-08-10 at 23.05.47.jpeg",
              "/assets/crane_claw/WhatsApp Image 2025-08-10 at 23.06.41.jpeg"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "otoparts_sorting",
    title: "Gear Oil Driven Plate Sorting Mechanism",
    year: "May - August 2024",
    description: "A multi-stage plate-sorting mechanism developed during an internship at PT Astra Otoparts Divisi Nusametal to enhance the handling of small metal plates used in Gear Oil Driven assembly. Early concepts (Designs 1-2) featured a semi-manual magazine system actuated pneumatically. Later iterations (Designs 3-5) transitioned to a fully automated vibratory-based system, incorporating a slider mechanism with a 0.3 mm separation plate for precise sorting. The advanced designs integrated directly with the assembly of the gear, enabling a fully automated workflow aimed at reducing human error and improving manufacturing efficiency.",
    technologies: ["Pneumatics", "Automation", "Vibratory Feeder", "SolidWorks"],
    highlights: ["5 Design Iterations", "0.3mm Precision Sorting", "Fully Automated Workflow"],
    imageCategories: [
      {
        name: "Design 1",
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 1/Assembly/WhatsApp Image 2025-08-11 at 01.25.36.jpeg"
            ]
          },
          {
            type: "Parts",
            images: [
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 1/Parts/WhatsApp Image 2025-08-11 at 16.35.23.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 1/Parts/WhatsApp Image 2025-08-11 at 16.35.44.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 1/Parts/WhatsApp Image 2025-08-11 at 16.36.17.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 1/Parts/WhatsApp Image 2025-08-11 at 16.36.37.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 1/Parts/WhatsApp Image 2025-08-11 at 16.36.56.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 1/Parts/WhatsApp Image 2025-08-11 at 16.37.12.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 1/Parts/WhatsApp Image 2025-08-11 at 16.37.48.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 1/Parts/WhatsApp Image 2025-08-11 at 16.38.18.jpeg"
            ]
          }
        ]
      },
      {
        name: "Design 2",
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 2/Assembly/WhatsApp Image 2025-08-11 at 16.33.12.jpeg"
            ]
          },
          {
            type: "Parts",
            images: [
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 2/Parts/WhatsApp Image 2025-08-11 at 16.49.20.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 2/Parts/WhatsApp Image 2025-08-11 at 17.05.53.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 2/Parts/WhatsApp Image 2025-08-11 at 17.06.41.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 2/Parts/WhatsApp Image 2025-08-11 at 17.06.56.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 2/Parts/WhatsApp Image 2025-08-11 at 17.07.23.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 2/Parts/WhatsApp Image 2025-08-11 at 17.08.21.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 2/Parts/WhatsApp Image 2025-08-11 at 17.15.31.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 2/Parts/WhatsApp Image 2025-08-11 at 17.16.29.jpeg"
            ]
          }
        ]
      },
      {
        name: "Design 3",
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 3/Assembly/WhatsApp Image 2025-08-11 at 16.33.37.jpeg"
            ]
          },
          {
            type: "Parts",
            images: [
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 3/Parts/WhatsApp Image 2025-08-11 at 16.49.20.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 3/Parts/WhatsApp Image 2025-08-11 at 17.05.53.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 3/Parts/WhatsApp Image 2025-08-11 at 17.06.41.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 3/Parts/WhatsApp Image 2025-08-11 at 17.06.56.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 3/Parts/WhatsApp Image 2025-08-11 at 17.07.23.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 3/Parts/WhatsApp Image 2025-08-11 at 17.08.21.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 3/Parts/WhatsApp Image 2025-08-11 at 17.24.21.jpeg"
            ]
          }
        ]
      },
      {
        name: "Design 4",
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 4/Assembly/WhatsApp Image 2025-08-11 at 16.33.54.jpeg"
            ]
          },
          {
            type: "Parts",
            images: [
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 4/Parts/WhatsApp Image 2025-08-11 at 16.49.20.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 4/Parts/WhatsApp Image 2025-08-11 at 17.05.53.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 4/Parts/WhatsApp Image 2025-08-11 at 17.06.41.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 4/Parts/WhatsApp Image 2025-08-11 at 17.07.23.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 4/Parts/WhatsApp Image 2025-08-11 at 17.08.21.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 4/Parts/WhatsApp Image 2025-08-11 at 17.25.12.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 4/Parts/WhatsApp Image 2025-08-11 at 17.25.32.jpeg"
            ]
          }
        ]
      },
      {
        name: "Design 5",
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 5/Assembly/WhatsApp Image 2025-08-11 at 16.34.11.jpeg"
            ]
          },
          {
            type: "Parts",
            images: [
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 5/Parts/WhatsApp Image 2025-08-11 at 17.28.36.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 5/Parts/WhatsApp Image 2025-08-11 at 17.29.06.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 5/Parts/WhatsApp Image 2025-08-11 at 17.29.23.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 5/Parts/WhatsApp Image 2025-08-11 at 17.29.45.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 5/Parts/WhatsApp Image 2025-08-11 at 17.30.07.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 5/Parts/WhatsApp Image 2025-08-11 at 17.30.16.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 5/Parts/WhatsApp Image 2025-08-11 at 17.34.25.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 5/Parts/WhatsApp Image 2025-08-11 at 17.35.00.jpeg",
              "/assets/otoparts/Gear oil driven plate sorting mechanism/Design 5/Parts/WhatsApp Image 2025-08-11 at 17.35.22.jpeg"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "otoparts_frame",
    title: "Oil Separator Assembly Machine's Frame",
    year: "June 2024",
    description: "A redesigned structural frame for the Oil Separator Assembly Machine created during the internship at PT Astra Otoparts. The new configuration introduces a dedicated under-machine passageway to allow maintenance personel easier and safer access, improving serviceability without compromising structural integrity or machine performance.",
    technologies: ["Structural Design", "Ergonomics", "SolidWorks"],
    highlights: ["Improved maintenance access", "Maintained structural integrity", "Ergonomic redesign"],
    imageCategories: [
      {
        groups: [
          {
            type: "Gallery",
            images: [
              "/assets/otoparts/Oil separator Assembly machine frame/WhatsApp Image 2025-12-06 at 16.32.49_cc5f2e26.jpg",
              "/assets/otoparts/Oil separator Assembly machine frame/WhatsApp Image 2025-12-06 at 16.33.11_016353fe.jpg"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "thermometer",
    title: "2-in-1 Portable Thermometer Case",
    year: "April 2024",
    description: "A custom enclosure designed for a university project involving a portable thermometer equipped with two temperature-sensing technologies: a thermocouple and an infrared sensor. The case provides functional component integration, user-friendly handling, and structural protection for the internal electronics.",
    technologies: ["Enclosure Design", "Thermocouple", "Infrared Sensor", "SolidWorks"],
    highlights: ["Dual-sensor integration", "Ergonomic handling", "Protective electronics housing"],
    imageCategories: [
      {
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/thermometer/Assembly/WhatsApp Image 2025-12-06 at 15.49.15_cc8abce2.jpg"
            ]
          },
          {
            type: "Parts",
            images: [
              "/assets/thermometer/Parts/WhatsApp Image 2025-08-10 at 23.43.02.jpeg",
              "/assets/thermometer/Parts/WhatsApp Image 2025-08-10 at 23.44.19.jpeg"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "plat_gear_driven",
    title: "Project Plat Gear Driven",
    year: "May - August 2024",
    description: "Engineering design and fixture optimization for small metal plates used in the Gear Oil Driven assembly process at PT Astra Otoparts Divisi Nusametal. The project focused on custom presser plates, precision positioning pins, and magazine feeder components to streamline component orientation and eliminate assembly line bottlenecks.",
    technologies: ["SolidWorks", "Tooling & Jig Design", "Precision Mechanics", "Process Optimization"],
    highlights: ["Custom Plate Fixture Design", "Enhanced Component Alignment", "Assembly Bottleneck Elimination"],
    imageCategories: [
      {
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/plat_gear_driven/Assembly/Picture35.png",
              "/assets/plat_gear_driven/Assembly/Picture36.png",
              "/assets/plat_gear_driven/Assembly/Picture37.png",
              "/assets/plat_gear_driven/Assembly/Picture38.png",
              "/assets/plat_gear_driven/Assembly/Picture40.png",
              "/assets/plat_gear_driven/Assembly/Picture45.jpg"
            ]
          },
          {
            type: "Parts",
            images: [
              "/assets/plat_gear_driven/Parts/Picture41.png",
              "/assets/plat_gear_driven/Parts/Picture46.png",
              "/assets/plat_gear_driven/Parts/Picture47.png"
            ]
          },
          {
            type: "Data",
            images: [
              "/assets/plat_gear_driven/Data/Picture42.jpg",
              "/assets/plat_gear_driven/Data/Picture43.jpg",
              "/assets/plat_gear_driven/Data/Picture44.jpg"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "leak_test_stability",
    title: "Leak Test Stability Analysis (Cover Motor K3NA)",
    year: "May - August 2024",
    description: "Statistical quality control and process stability analysis conducted on the Cover Motor K3NA leak test line at PT Astra Otoparts Divisi Nusametal. Implemented Six Sigma statistical tools using Excel and MATLAB (evaluating mean, standard deviation, Normal Distribution, LCL/UCL control limits) to identify pressure variation root causes, protect OEE, and prevent quality claims from client AHM.",
    technologies: ["Six Sigma", "MATLAB", "Excel Statistical Analysis", "Quality Control", "Leak Testing"],
    highlights: ["Statistical Process Control (SPC)", "Normal Distribution & Control Limits", "AHM Client Quality Protection"],
    imageCategories: [
      {
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/leak_test_stability/Assembly/Picture33.jpg"
            ]
          },
          {
            type: "Data",
            images: [
              "/assets/leak_test_stability/Data/Picture31.png",
              "/assets/leak_test_stability/Data/Picture32.png",
              "/assets/leak_test_stability/Data/Picture34.jpg"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "marker_face",
    title: "Marker Face for Movable Drive",
    year: "May - August 2024",
    description: "Precision fixture design for the Marker Face mechanism used on the Movable Drive assembly line at PT Astra Otoparts Divisi Nusametal. Features custom positioning brackets and alignment guides to ensure consistent stamping and laser marking accuracy across high-volume production batches.",
    technologies: ["Fixture Design", "SolidWorks", "Machining & Tooling", "Quality Alignment"],
    highlights: ["High-Precision Stamping Alignment", "Custom Mounting Brackets", "Reduced Marking Defect Rate"],
    imageCategories: [
      {
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/marker_face/Assembly/Picture26.jpg",
              "/assets/marker_face/Assembly/Picture27.jpg",
              "/assets/marker_face/Assembly/Picture28.jpg",
              "/assets/marker_face/Assembly/Picture29.png"
            ]
          },
          {
            type: "Parts",
            images: [
              "/assets/marker_face/Parts/Picture30.png"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "ng_chuter",
    title: "NG Chuter Redesign",
    year: "May - August 2024",
    description: "Redesign of the Not-Good (NG) part rejection chute system for automated production lines at PT Astra Otoparts Divisi Nusametal. Re-engineered gravity slide angles and sensor trigger positions to prevent defective parts from jamming during high-speed ejection cycles.",
    technologies: ["Chute & Gravity Slide Design", "SolidWorks", "Pokayoke Sensor Triggering", "Automation"],
    highlights: ["Jam-Free Defective Part Ejection", "Optimized Slide Kinematics", "Pokayoke Sensor Integration"],
    imageCategories: [
      {
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/ng_chuter/Assembly/Picture22.jpg",
              "/assets/ng_chuter/Assembly/Picture23.jpg"
            ]
          },
          {
            type: "Parts",
            images: [
              "/assets/ng_chuter/Parts/Picture23.png",
              "/assets/ng_chuter/Parts/Picture24.png"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "pokayoke_sensor",
    title: "Pokayoke Sensor Repositioning",
    year: "May - August 2024",
    description: "Ergonomic and error-proofing (Pokayoke) sensor repositioning initiative across assembly lines at PT Astra Otoparts Divisi Nusametal. Engineered custom adjustable sensor mounting brackets to eliminate false-triggering, minimize operator cycle times, and improve ergonomic REBA evaluation scores.",
    technologies: ["Pokayoke (Error Proofing)", "Sensor Bracket Design", "Ergonomics (REBA)", "SolidWorks"],
    highlights: ["Eliminated Sensor False-Triggers", "Improved REBA Ergonomic Scores", "Custom Adjustable Bracketry"],
    imageCategories: [
      {
        groups: [
          {
            type: "Gallery",
            images: [
              "/assets/pokayoke_sensor/Picture17.png",
              "/assets/pokayoke_sensor/Picture18.png",
              "/assets/pokayoke_sensor/Picture19.png",
              "/assets/pokayoke_sensor/Picture20.jpg",
              "/assets/pokayoke_sensor/Picture21.jpg"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "auto_oil_separator",
    title: "Auto Oil Separator Structure Re-design",
    year: "June - August 2024",
    description: "Structural frame optimization for the Automated Oil Separator assembly unit at PT Astra Otoparts Divisi Nusametal. Engineered an under-machine passageway and reinforced support beams to grant maintenance personnel safe and comfortable access without compromising structural rigidity or operating stability.",
    technologies: ["Structural Engineering", "Frame Redesign", "SolidWorks", "Maintenance Ergonomics"],
    highlights: ["Integrated Maintenance Passageway", "Structural Rigidity Preservation", "Enhanced Service Accessibility"],
    imageCategories: [
      {
        groups: [
          {
            type: "Gallery",
            images: [
              "/assets/auto_oil_separator/Picture16.png"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "assy_gear_oil_improvements",
    title: "Assy Gear Oil Driven Improvements",
    year: "May - August 2024",
    description: "Comprehensive process improvement and line balancing for the Gear Oil Driven assembly station at PT Astra Otoparts Divisi Nusametal. Engineered magnetic pressers, pin positioning fixtures, and setup changeover (Dandori) procedures that reduced assembly cycle times and safeguarded machine OEE.",
    technologies: ["Kaizen & PDCA", "Dandori Setup Changeover", "Magnetic Presser Design", "Line Balancing"],
    highlights: ["Reduced Assembly Cycle Time", "Magnetic Presser Innovation", "Dandori Setup Standardization"],
    imageCategories: [
      {
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/assy_gear_oil_improvements/Assembly/Picture2.jpg",
              "/assets/assy_gear_oil_improvements/Assembly/Picture5.jpg",
              "/assets/assy_gear_oil_improvements/Assembly/Picture6.png",
              "/assets/assy_gear_oil_improvements/Assembly/Picture8.jpg",
              "/assets/assy_gear_oil_improvements/Assembly/Picture9.jpg",
              "/assets/assy_gear_oil_improvements/Assembly/Picture10.jpg",
              "/assets/assy_gear_oil_improvements/Assembly/Picture13.jpg",
              "/assets/assy_gear_oil_improvements/Assembly/Picture14.jpg",
              "/assets/assy_gear_oil_improvements/Assembly/Picture15.jpg"
            ]
          },
          {
            type: "Parts",
            images: [
              "/assets/assy_gear_oil_improvements/Parts/Picture1.png",
              "/assets/assy_gear_oil_improvements/Parts/Picture3.png",
              "/assets/assy_gear_oil_improvements/Parts/Picture4.png",
              "/assets/assy_gear_oil_improvements/Parts/Picture7.png",
              "/assets/assy_gear_oil_improvements/Parts/Picture11.png",
              "/assets/assy_gear_oil_improvements/Parts/Picture12.png"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "concept_assy_oil_separator",
    title: "Concept Assy Oil Separator Mechanism",
    year: "June - August 2024",
    description: "Conceptual design and mechanical modeling of an automated assembly mechanism for oil separator units at PT Astra Otoparts Divisi Nusametal. Developed multi-component CAD models featuring pneumatic clamp actuation and modular sub-assemblies for automated part insertion.",
    technologies: ["Conceptual Mechanical Design", "Pneumatic Actuation", "SolidWorks 3D Modeling", "Automated Sub-assemblies"],
    highlights: ["Modular Pneumatic Clamping", "Automated Insertion Kinematics", "3D Assembly CAD Modeling"],
    imageCategories: [
      {
        groups: [
          {
            type: "Assembly",
            images: [
              "/assets/concept_assy_oil_separator/Assembly/Picture1.png"
            ]
          },
          {
            type: "Parts",
            images: [
              "/assets/concept_assy_oil_separator/Parts/Picture2.png",
              "/assets/concept_assy_oil_separator/Parts/Picture3.png"
            ]
          }
        ]
      }
    ]
  }
];
