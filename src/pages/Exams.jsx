import React, { useState } from 'react'
import { AcademicCapIcon, DocumentIcon, ChevronLeftIcon, ComputerDesktopIcon, BriefcaseIcon, CalculatorIcon, BookOpenIcon, PencilIcon, WrenchIcon, PaintBrushIcon, BeakerIcon } from '@heroicons/react/24/outline'

const Exams = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [activeDepartment, setActiveDepartment] = useState(null);
  const [activeSpecialization, setActiveSpecialization] = useState(null);
  const [view, setView] = useState('departments'); // departments, specializations, courses, subjects

  // Define specializations for each department
  const departmentSpecializations = {
    "Computer Science": {
      "General": ["bca-general", "bca-1st-year", "bca-2nd-year", "mca-1st-year"],
      "Artificial Intelligence": ["bca-ai", "btech-ai-ds"],
      "Cloud Computing": ["btech-cloud"],
      "Process Automation": ["bca-pa"],
      "Game Development": ["bca-game-dev"],
      "Mobile & Frontend": ["bca-mobile-frontend"]
    },
    "Management": {
      "General": ["mba", "bba"]
    },
    "Commerce": {
      "General": ["bcom"]
    },
    "Engineering": {
      "Civil": ["civil"],
      "Electrical": ["eee"],
      "Digital Electronics": ["de"],
      "Design": ["bdes", "barch"],
      "Arts & Visual": ["bva"],
      "Basic Sciences": ["mathematics", "environmental-studies", "english"]
    }
  };

  const courseData = {
    // BCA General
    "bca-general": {
      title: "BCA (General)",
      subjects: [
        {
          title: "Programming Fundamentals of C",
          path: "/NEXT Data/ESE 2022-23/BCACCA1102_1_1_BCA_Programming Fundamentals of C_ Set 1.docx"
        },
        {
          title: "Web Designing",
          path: "/NEXT Data/ESE 2022-23/BCACCA1103_I_I_BCA_WEB DESIGNING_SET 1.docx"
        },
        {
          title: "Computer Organization & Architecture",
          path: "/NEXT Data/ESE 2022-23/BCACCA1104_Ist Year_I Semester_BCA_COA_ Set 1.docx"
        },
        {
          title: "Fundamentals of IT",
          path: "/NEXT Data/ESE 2022-23/BCACCA1105_FOIT_ESE_2022_BCA General (A+B+C)1st_Year_1st_Sem_Set A.docx"
        },
        {
          title: "Computer Networks",
          path: "/NEXT Data/ESE 2022-23/BCACCA2101 _Computer Networks_ESE_2022-23_Set B.docx"
        },
        {
          title: "OOPs With Java",
          path: "/NEXT Data/ESE 2022-23/BCACCA2102_2ndYear_2ndSemester_BCA_OOPsWithJava_ Set_1.docx"
        },
        {
          title: "Data Structures & Algorithms",
          path: "/NEXT Data/ESE 2022-23/BCACCA2103_I Year_II Semester_BCA_DSA_ Set 1.docx"
        },
        {
          title: "Software Engineering",
          path: "/NEXT Data/ESE 2022-23/BCACCA2105_Software Engineering ESE-BCA (Set-B) Back.docx"
        },
        {
          title: "RDBMS",
          path: "/NEXT Data/ESE 2022-23/BCACCA3101_Year2_Sem3_rdbms_ Set 1 or 2 - Shivani Gupta.docx"
        },
        {
          title: "Linux & Shell Script",
          path: "/NEXT Data/ESE 2022-23/BCACCA3102 _2nd_3rd Semester_BCA_Linux_Shell_Script_ Set 1.docx"
        },
        {
          title: "Python Programming",
          path: "/NEXT Data/ESE 2022-23/BCACCA3103_2_3_BCA_PythonProgramming_ Set_1 - Bindiya Jain.docx"
        },
        {
          title: "Software Testing",
          path: "/NEXT Data/ESE 2022-23/BCACCA3104_Software Testing_ESE_2022-23(O)_Set No. (1).docx"
        },
        {
          title: "Big Data Analysis",
          path: "/NEXT Data/ESE 2022-23/BCACCA4101_2_IV_BCA_BIGDATAANALYSIS_ Set 1.docx"
        },
        {
          title: "Design & Analysis of Algorithms",
          path: "/NEXT Data/ESE 2022-23/BCACCA4102 _II_IV_B.C.A_DAA_ Set 1.docx"
        },
        {
          title: "Advanced Java",
          path: "/NEXT Data/ESE 2022-23/BCACCA4103_2_IV_BCA_BCACCA41  adv java.docx"
        },
        {
          title: "PHP & MySQL",
          path: "/NEXT Data/ESE 2022-23/BCACCA4104_2nd Year_4th Semester_BCA_Phpmysql_ Set 1.docx"
        },
        {
          title: "E-commerce",
          path: "/NEXT Data/ESE 2022-23/BCAECA4111_E-commerce_2nd _4th_BCA_ Set 1.docx"
        }
      ]
    },
    // BCA AI & Data Science
    "bca-ai": {
      title: "BCA (AI & Data Science)",
      subjects: [
        {
          title: "Fundamentals of AI",
          path: "/NEXT Data/ESE 2022-23/BASCCA1105_I Year_ISemester__BCA (AIDS)_Fundamentals of AI _ Set 1.docx"
        },
        {
          title: "Introduction to Data Science",
          path: "/NEXT Data/ESE 2022-23/BASCCA2105_1stYear_2ndSemester_BCA_Introduction to Data Science_ Set 1.docx"
        },
        {
          title: "Python Programming",
          path: "/NEXT Data/ESE 2022-23/BADCCA2105_Python_Prog_ESE_2021-22(E)_Set_2 Back.docx"
        },
        {
          title: "RPA (Robotic Process Automation)",
          path: "/NEXT Data/ESE 2022-23/BASCCA3104_2022_III_BCA_RPA_ Set 1 - Pratik Goswami.docx"
        },
        {
          title: "Machine Learning",
          path: "/NEXT Data/ESE 2022-23/BASCCA4103_2022_2023_4th_Semester_BCA(AIDS)_Machine_Learning_ Set 1.docx"
        },
        {
          title: "R Programming",
          path: "/NEXT Data/ESE 2022-23/BASCCA4104_IV_Semester_BCA_RP_ Set 1.docx"
        },
        {
          title: "Artificial Neural Networks",
          path: "/NEXT Data/ESE 2022-23/BAP05102_ANN_Set 1 - Shikha Sharma.docx"
        },
        {
          title: "Digital Image Processing",
          path: "/NEXT Data/ESE 2022-23/BAP05103_Digital Image Processing_ESE_2022-23(O)_Set No. -1.docx"
        },
        {
          title: "Natural Language Processing",
          path: "/NEXT Data/ESE 2022-23/BAP05104_3_5_BCA(AI)_NaturalLanguageProcessing_Set_1 - Bindiya Jain.docx"
        }
      ]
    },
    // B.Tech AI
    "btech-ai": {
      title: "B.Tech (Artificial Intelligence)",
      subjects: [
        {
          title: "Introduction to AI",
          path: "/NEXT Data/ESE 2022-23/BADCCE1107_I_I_BTECH(AI_DS(_INTRODUCTION TO AI_ Set 1.docx"
        },
        {
          title: "Operating System",
          path: "/NEXT Data/ESE 2022-23/BAI_BCC_BDS04101_Operating System_SET 2 Back.docx"
        },
        {
          title: "Advanced Machine Learning",
          path: "/NEXT Data/ESE 2022-23/BAI06101_Advanced Machine Learning_Final.docx"
        },
        {
          title: "Digital Image Processing",
          path: "/NEXT Data/ESE 2022-23/BAI06102_IIIYear_VISemester_B.tech_Digital Image Processing_ Set 1.docx"
        },
        {
          title: "Natural Language Processing",
          path: "/NEXT Data/ESE 2022-23/BAI06103_III_VI_B.Tech_NLP_ Set 1.docx"
        },
        {
          title: "Recommender Systems",
          path: "/NEXT Data/ESE 2022-23/BAI06110__ Recommender System_Set2 Back.docx"
        },
        {
          title: "Deep Learning",
          path: "/NEXT Data/ESE 2022-23/BAI07101 -2022- VII- B.tech- Deep-learning ,Set- 1.docx"
        },
        {
          title: "Computer Vision",
          path: "/NEXT Data/ESE 2022-23/BAI07102 -2022- VII- B.tech- Computer vision ,Set- 1.docx"
        },
        {
          title: "Chatbot Development",
          path: "/NEXT Data/ESE 2022-23/BAI07103 -2022-VII-B.tech- chatbot development ,Set- 1.docx"
        },
        {
          title: "Intelligent Process Automation",
          path: "/NEXT Data/ESE 2022-23/BAI07104_2022_VII_B.tech_Intelligent_Process_Automation_Set1.docx"
        },
        {
          title: "Business Intelligence",
          path: "/NEXT Data/ESE 2022-23/BAI07108 -2022-VII-B.tech- business-Intelligence   ,Set- 1.docx"
        },
        {
          title: "NoSQL Databases",
          path: "/NEXT Data/ESE 2022-23/BAI05103-BDS05102 _III_V_B.Tech_NoSQL Databases_ Set 1 - Neha Jain.docx"
        }
      ]
    },
    // B.Tech Cloud Computing
    "btech-cloud": {
      title: "B.Tech (Cloud Computing)",
      subjects: [
        {
          title: "Information Security Fundamentals",
          path: "/NEXT Data/ESE 2022-23/BCC03109 -BCE03109_Information Security Fundamentals_ Set 2.docx"
        },
        {
          title: "Ethical Hacking",
          path: "/NEXT Data/ESE 2022-23/BCC05101_III_V_B. Tech_Ethical_Hacking_ Set 1.docx"
        },
        {
          title: "Server Installation & Configuration",
          path: "/NEXT Data/ESE 2022-23/BCC05102 -Set-A-Installation and Configuration of Server_ESE - Rishi Kumar Sharma.docx"
        },
        {
          title: "Virtualization & Cloud Computing",
          path: "/NEXT Data/ESE 2022-23/BCC05103_ B.tech 3rd Year_5Sem_Virtualization _ Cloud Computing_ Set 1.docx"
        },
        {
          title: "Linux Server Administration",
          path: "/NEXT Data/ESE 2022-23/BCC06103 LINUX SERVER ADMINISTRATION_ESE_2022-23(O)_Set No. (A).docx"
        },
        {
          title: "Cyber Forensics",
          path: "/NEXT Data/ESE 2022-23/BCC06104_Cyber forensic_SET 2 Back.docx"
        },
        {
          title: "Storage and Data Center",
          path: "/NEXT Data/ESE 2022-23/BCC06108_2023_VIth_B.Tech_Storage and Data Center_ Set 1.docx"
        },
        {
          title: "Client Side Scripting",
          path: "/NEXT Data/ESE 2022-23/BCC06109_CSS_ Back.docx"
        },
        {
          title: "Cloud Migration",
          path: "/NEXT Data/ESE 2022-23/BCC07101_2022_Sem VII_B.Tech_Cloud Migration_Set 1.doc"
        },
        {
          title: "Cloud Deployment",
          path: "/NEXT Data/ESE 2022-23/BCC07102_2022_Sem VII_B.Tech_Cloud Deployment_Set 1.docx"
        },
        {
          title: "Server Security Management",
          path: "/NEXT Data/ESE 2022-23/BCC07103_2022_Sem VII_B.Tech_Server Security Management_Set 1.docx"
        },
        {
          title: "Cloud Web Services",
          path: "/NEXT Data/ESE 2022-23/BCC07104_2022_Sem VII_B.Tech_CWS - Set-1.docx"
        },
        {
          title: "Advanced Server Side Scripting",
          path: "/NEXT Data/ESE 2022-23/BCC07109_2022_VII_B.tech_Advanced_Server_Side_Scripting_Language_set-1.docx"
        }
      ]
    },
    // BCA Process Automation
    "bca-pa": {
      title: "BCA (Process Automation)",
      subjects: [
        {
          title: "Object Oriented Analysis & Design",
          path: "/NEXT Data/ESE 2022-23/BAP03103  BCA03103  BCT03103 ESE - OOAD -Set 2.docx"
        },
        {
          title: "Big Data",
          path: "/NEXT Data/ESE 2022-23/BAP03107.3 ESE - Big Data - Set 2 Back.docx"
        },
        {
          title: "Discrete Mathematics",
          path: "/NEXT Data/ESE 2022-23/BAP03104_Elements of Discrete Mathematics_Set_2 Back.docx"
        },
        {
          title: "Analysis of Algorithms",
          path: "/NEXT Data/ESE 2022-23/BAP04103_ADA_2_2021-22(E)_ESE Back.docx"
        },
        {
          title: "Numerical Techniques",
          path: "/NEXT Data/ESE 2022-23/BAP04104_Computer based numerical techniques_1_2021-22_ESE_Set B Back.docx"
        },
        {
          title: "Business Process Management",
          path: "/NEXT Data/ESE 2022-23/BAP05101_IIIYear_VSemester_BCA(AI_PA)_BPM_Set 2.docx"
        },
        {
          title: "RPA Tools",
          path: "/NEXT Data/ESE 2022-23/BADCCE4104_2023_IVth_B.Tech_RPA Tool_ Set 1.docx"
        }
      ]
    },
    // MBA
    "mba": {
      title: "MBA",
      subjects: [
        {
          title: "Management Concepts",
          path: "/NEXT Data/MBA/MBX03101_SET 1.pdf"
        },
        {
          title: "Organizational Behavior",
          path: "/NEXT Data/MBA/MBX03102_SET 1.pdf"
        },
        {
          title: "Managerial Economics",
          path: "/NEXT Data/MBA/MBX03103_SET 1.pdf"
        },
        {
          title: "Business Statistics",
          path: "/NEXT Data/MBA/MBX03104_SET 1.pdf"
        },
        {
          title: "Financial Management",
          path: "/NEXT Data/MBA/MBX03118_Set 1.pdf"
        },
        {
          title: "Marketing Management",
          path: "/NEXT Data/MBA/MBX03119_SET 1.pdf"
        },
        {
          title: "Operations Management",
          path: "/NEXT Data/MBA/MBX03126_SET 1.pdf"
        },
        {
          title: "Human Resource Management",
          path: "/NEXT Data/MBA/MBX03127_SET 1.pdf"
        }
      ]
    },
    // BBA
    "bba": {
      title: "BBA",
      subjects: [
        // Core Subjects - Semester 3
        {
          title: "Business Communication",
          path: "/NEXT Data/BBA/BBX03101_BBB03101_BBC03101_SET A.pdf"
        },
        {
          title: "Business Law",
          path: "/NEXT Data/BBA/BBX03102_BBB03102_BBC03102_SET_A.pdf"
        },
        {
          title: "Financial Management",
          path: "/NEXT Data/BBA/BBX03103_BBB03103_BBC03103_SET_A.pdf"
        },
        {
          title: "Marketing Management",
          path: "/NEXT Data/BBA/BBX03104_BBB03104_BBC03104_SETA.pdf"
        },
        {
          title: "Business Environment",
          path: "/NEXT Data/BBA/BBX03106_Set A.pdf"
        },
        {
          title: "Human Resource Management",
          path: "/NEXT Data/BBA/BBX03107_BBB03107_BBC03107_SET A.pdf"
        },
        // Core Subjects - Semester 5
        {
          title: "Business Ethics",
          path: "/NEXT Data/BBA/BBX05101_BBB05101_BBC05101_Set A.pdf"
        },
        {
          title: "Operations Management",
          path: "/NEXT Data/BBA/BBX05102_BBB05102_BBC05102_Set A.pdf"
        },
        {
          title: "Research Methodology",
          path: "/NEXT Data/BBA/BBX05103_BBB05103_BBC05103_Set A.pdf"
        },
        {
          title: "Entrepreneurship Development",
          path: "/NEXT Data/BBA/BBX05104_BBB05104_BBC05104_SET 1.pdf"
        },
        {
          title: "Strategic Management",
          path: "/NEXT Data/BBA/BBX05105_SET A.pdf"
        },
        {
          title: "International Business",
          path: "/NEXT Data/BBA/BBX05106_SET A.pdf"
        }
      ]
    },
    // B.Com
    "bcom": {
      title: "B.Com",
      subjects: [
        // Semester 3
        {
          title: "Financial Accounting",
          path: "/NEXT Data/B. Com/BCO03101_BCH03101_Set A.pdf"
        },
        {
          title: "Business Statistics",
          path: "/NEXT Data/B. Com/BCO03102_BCH03102_Set A.pdf"
        },
        {
          title: "Business Law",
          path: "/NEXT Data/B. Com/BCO03103_BCH03103_Set A.pdf"
        },
        {
          title: "Corporate Accounting",
          path: "/NEXT Data/B. Com/BCO03104_BCH03104_Set A.pdf"
        },
        {
          title: "Business Environment",
          path: "/NEXT Data/B. Com/BCO03105_BCH03105_Set A.pdf"
        },
        {
          title: "Auditing",
          path: "/NEXT Data/B. Com/BCH03106_Auditing_ Set A.pdf"
        },
        // Semester 5
        {
          title: "Income Tax",
          path: "/NEXT Data/B. Com/BCO05101_BCH05101_Set A.pdf"
        },
        {
          title: "Cost Accounting",
          path: "/NEXT Data/B. Com/BCO05102_BCH05102_Set A.pdf"
        },
        {
          title: "Management Accounting",
          path: "/NEXT Data/B. Com/BCO05103_BCH05103_SET A.pdf"
        },
        {
          title: "Banking and Insurance",
          path: "/NEXT Data/B. Com/BCO05104_BCH05104_Set A.pdf"
        },
        {
          title: "Financial Markets",
          path: "/NEXT Data/B. Com/BCO05105_BCH05105_Set A.pdf"
        },
        {
          title: "International Business",
          path: "/NEXT Data/B. Com/BCO05106_BCH05106_Set A.pdf"
        }
      ]
    },
    // New BCA 1st Year (2nd Semester)
    "bca-1st-year": {
      title: "BCA 1st Year",
      subjects: [
        {
          title: "Environment & Sustainability",
          path: "/NEXT Data/BCA 1 Year( II Sem)/Environment & Sustainability.pdf"
        },
        {
          title: "Basic of Mathematics",
          path: "/NEXT Data/BCA 1 Year( II Sem)/Basic of Mathematics.pdf"
        },
        {
          title: "Software Engineering",
          path: "/NEXT Data/BCA 1 Year( II Sem)/Software Engineering.pdf"
        },
        {
          title: "Linux and Shell Script",
          path: "/NEXT Data/BCA 1 Year( II Sem)/Linux and Shell Script.pdf"
        },
        {
          title: "Python Programming",
          path: "/NEXT Data/BCA 1 Year( II Sem)/Python Programming.pdf"
        },
        {
          title: "Computer Networks",
          path: "/NEXT Data/BCA 1 Year( II Sem)/Computer Networks.pdf"
        }
      ]
    },
    // BCA 2nd Year (4th Semester)
    "bca-2nd-year": {
      title: "BCA 2nd Year",
      subjects: [
        {
          title: "Cyber Forensics",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/APR24_BCYCCA4103_Cyber Forensics.pdf"
        },
        {
          title: "Application Security",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/APR24_BCYCCA4104_Application Security.pdf"
        },
        {
          title: "Advanced Java Programming",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/APR24_BCACCA4103_Advance Java Programming.pdf"
        },
        {
          title: "Design and Analysis of Algorithm",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/APR24_BCACCA4102_-Design and Analysis of Algorithm.pdf"
        },
        {
          title: "R Programming",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/APR24_BASCCA4104__R Programming.pdf"
        },
        {
          title: "Machine Learning",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/APR24_BASCCA4103__Machine Learning .pdf"
        },
        {
          title: "Game Testing",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/APR24_BGGCCA4104_Game  Testing.pdf"
        },
        {
          title: "Cloud Web Services",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/APR24_BCTCCA4103_Cloud Web Services.pdf"
        },
        {
          title: "Pixi.JS",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/APR24_BGGCCA4103_Pixi.JS.pdf"
        },
        {
          title: "Big Data Analysis",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/APR24_BCACCA4101_Big Data Analysis.pdf"
        },
        {
          title: "Network Administration",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/APR24_BCTCCA4104_Network Administration.pdf"
        },
        {
          title: "Software Project Management",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/BCAECA4112-Software_Project_Management_Set_A.pdf"
        },
        {
          title: "Android Application Development",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/BMFCCA4104-Introduction_to_Android_Application_Development_Set_A.pdf"
        },
        {
          title: "Backend Development with Node.js",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/APR24_BMFCCA4103_Backend Development with Node JS.pdf"
        },
        {
          title: "PHP & MySQL",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/APR24_BCACCA4104_PhP & MySql.pdf"
        }
      ]
    },
    // Game Development Specialization
    "bca-game-dev": {
      title: "BCA (Game Development)",
      subjects: [
        {
          title: "Game Testing",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/APR24_BGGCCA4104_Game  Testing.pdf"
        },
        {
          title: "Pixi.JS",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/APR24_BGGCCA4103_Pixi.JS.pdf"
        }
      ]
    },
    // Mobile & Frontend Development
    "bca-mobile-frontend": {
      title: "BCA (Mobile & Frontend)",
      subjects: [
        {
          title: "Android Application Development",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/BMFCCA4104-Introduction_to_Android_Application_Development_Set_A.pdf"
        },
        {
          title: "Backend Development with Node.js",
          path: "/NEXT Data/BCA 2 Year(IV Sem)/APR24_BMFCCA4103_Backend Development with Node JS.pdf"
        }
      ]
    },
    // B.Tech AI & DS
    "btech-ai-ds": {
      title: "B.Tech (AI & DS)",
      subjects: [
        {
          title: "End Semester Exam",
          path: "/NEXT Data/B.Tech (AI&DS)/End sem/ESE_AIDS.pdf"
        }
      ]
    },
    // B.Des
    "bdes": {
      title: "Bachelor of Design",
      subjects: [
        {
          title: "Design Materials",
          path: "/NEXT Data/B. Des"
        }
      ]
    },
    // B.Arch
    "barch": {
      title: "Bachelor of Architecture",
      subjects: [
        {
          title: "Architecture Materials",
          path: "/NEXT Data/B. Arch"
        }
      ]
    },
    // Civil Engineering
    "civil": {
      title: "Civil Engineering",
      subjects: [
        {
          title: "End Semester Exam 1 (2023)",
          path: "/NEXT Data/Civil/End sem/civil_end_sem-1_2023.jpg"
        },
        {
          title: "End Semester Exam 2 (2023)",
          path: "/NEXT Data/Civil/End sem/civil_end_sem-2_2023.jpg"
        }
      ]
    },
    // Electrical Engineering
    "eee": {
      title: "Electrical Engineering",
      subjects: [
        {
          title: "End Semester Exam (2022)",
          path: "/NEXT Data/Eee/End sem/ESE_SEM1_2022.pdf"
        },
        {
          title: "End Semester Exam Sem 1 (2023)",
          path: "/NEXT Data/Eee/End sem/ESE_SEM1_2023.pdf"
        },
        {
          title: "End Semester Exam Sem 2 (2023)",
          path: "/NEXT Data/Eee/End sem/ESE_SEM2_2023.jpg"
        }
      ]
    },
    // Digital Electronics
    "de": {
      title: "Digital Electronics",
      subjects: [
        {
          title: "End Semester Exam",
          path: "/NEXT Data/DE/End sem/ESE_DE.jpg"
        }
      ]
    },
    // Visual Arts
    "bva": {
      title: "Bachelor of Visual Arts",
      subjects: [
        {
          title: "Visual Arts Materials",
          path: "/NEXT Data/BVA"
        }
      ]
    },
    // Mathematics
    "mathematics": {
      title: "Mathematics",
      subjects: [
        {
          title: "Mathematics Notes and Materials",
          path: "/NEXT Data/Maths-20250603T132655Z-1-001/Maths"
        }
      ]
    },
    // Environmental Studies
    "environmental-studies": {
      title: "Environmental Studies",
      subjects: [
        {
          title: "End Semester Exam",
          path: "/NEXT Data/Environmental Studies/End sem/ESE_EVS.jpg"
        }
      ]
    },
    // English
    "english": {
      title: "English",
      subjects: [
        {
          title: "End Semester Materials",
          path: "/NEXT Data/English/End sem"
        }
      ]
    },
    // MCA 1st Year
    "mca-1st-year": {
      title: "MCA 1st Year",
      subjects: [
        // Add subjects from MCA 1 year directory
      ]
    }
  };

  const departmentIcons = {
    "Computer Science": <ComputerDesktopIcon className="h-12 w-12" />,
    "Management": <BriefcaseIcon className="h-12 w-12" />,
    "Commerce": <CalculatorIcon className="h-12 w-12" />,
    "Engineering": <WrenchIcon className="h-12 w-12" />
  };

  const getBackgroundColor = (department) => {
    const colors = {
      "Computer Science": "from-blue-500 to-indigo-600",
      "Management": "from-violet-500 to-purple-600",
      "Commerce": "from-emerald-500 to-green-600",
      "Engineering": "from-cyan-500 to-blue-600"
    };
    return colors[department] || "from-gray-500 to-gray-600";
  };

  const handleDepartmentClick = (dept) => {
    setActiveDepartment(dept);
    setView('specializations');
  };

  const handleSpecializationClick = (spec) => {
    setActiveSpecialization(spec);
    setActiveTab(departmentSpecializations[activeDepartment][spec][0]);
    setView('courses');
  };

  const handleBack = () => {
    if (view === 'subjects') {
      setView('courses');
    } else if (view === 'courses') {
      setView('specializations');
    } else if (view === 'specializations') {
      setView('departments');
      setActiveDepartment(null);
    }
  };

  const renderDepartments = () => (
    <div className="relative">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-25 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100 rounded-full opacity-25 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative">
        {/* Enhanced welcome section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-2xl mx-auto mb-6 shadow-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
            <BookOpenIcon className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Welcome to Study Hub</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Access comprehensive study materials across different departments. Choose your department to get started.
          </p>
        </div>

        {/* Enhanced department cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          {Object.keys(departmentSpecializations).map((dept) => (
            <div
              key={dept}
              onClick={() => handleDepartmentClick(dept)}
              className="transform transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${getBackgroundColor(dept)} rounded-2xl shadow-xl overflow-hidden relative group ring-1 ring-black/5`}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-8 text-center relative">
                  <div className="text-white mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {departmentIcons[dept]}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">{dept}</h2>
                  <p className="text-white/90 text-sm mb-4">
                    {Object.keys(departmentSpecializations[dept]).length} Specializations
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
                    <span className="text-white/90 text-sm font-medium px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                      Click to explore →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced stats section */}
        <div className="mt-20 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                value: Object.keys(departmentSpecializations).length,
                label: "Departments",
                color: "text-blue-600",
                bgColor: "bg-blue-50"
              },
              {
                value: Object.values(courseData).length,
                label: "Total Courses",
                color: "text-purple-600",
                bgColor: "bg-purple-50"
              },
              {
                value: Object.values(courseData).reduce((total, course) => total + course.subjects.length, 0),
                label: "Study Materials",
                color: "text-emerald-600",
                bgColor: "bg-emerald-50"
              }
            ].map((stat, index) => (
              <div key={index} className={`${stat.bgColor} rounded-2xl p-8 shadow-sm border border-black/5 hover:shadow-md transition-shadow duration-300`}>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSpecializations = () => (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-50 rounded-full opacity-40 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Specialization</h2>
          <p className="text-gray-600 text-lg">Select a specialization to view available courses</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(departmentSpecializations[activeDepartment]).map((spec) => (
            <div
              key={spec}
              onClick={() => handleSpecializationClick(spec)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-black/5 group hover:-translate-y-1"
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{spec}</h3>
                <p className="text-gray-500 mb-4">
                  {departmentSpecializations[activeDepartment][spec].length} Courses Available
                </p>
                <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2">
                  <span className="text-sm font-medium">View Courses</span>
                  <ChevronLeftIcon className="h-4 w-4 ml-2 transform rotate-180" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-50 rounded-full opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-50 rounded-full opacity-40 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Available Courses</h2>
          <p className="text-gray-600 text-lg">Select a course to view study materials</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departmentSpecializations[activeDepartment][activeSpecialization].map((courseKey) => (
            courseData[courseKey] && (
              <div
                key={courseKey}
                onClick={() => {
                  setActiveTab(courseKey);
                  setView('subjects');
                }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-black/5 group hover:-translate-y-1"
              >
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {courseData[courseKey].title}
                  </h3>
                  <p className="text-gray-500 mb-4">
                    {courseData[courseKey].subjects.length} Subjects Available
                  </p>
                  <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2">
                    <span className="text-sm font-medium">View Materials</span>
                    <ChevronLeftIcon className="h-4 w-4 ml-2 transform rotate-180" />
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );

  const renderSubjects = () => (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-50 rounded-full opacity-40 blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-black/5">
          <div className={`px-8 py-6 bg-gradient-to-r ${getBackgroundColor(activeDepartment)}`}>
            <h2 className="text-2xl font-bold text-white">
              {courseData[activeTab].title} Study Materials
            </h2>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseData[activeTab].subjects.map((subject, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl border border-black/5 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-start mb-5">
                      <DocumentIcon className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-medium text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                        {subject.title}
                      </h3>
                    </div>
                    <a
                      href={subject.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 text-sm font-medium group-hover:shadow-md"
                    >
                      Download Material
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced header */}
      <div className="bg-white shadow-md border-b sticky top-0 z-10 backdrop-blur-lg bg-white/80">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {view !== 'departments' && (
                <button
                  onClick={handleBack}
                  className="p-2.5 rounded-full hover:bg-gray-100 transition-colors duration-300 group"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-gray-600 group-hover:text-gray-900" />
                </button>
              )}
              <h1 className="text-2xl font-bold text-gray-900">Study Materials</h1>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              {view !== 'departments' && (
                <>
                  <span className="text-gray-600 font-medium">Department: <span className="text-blue-600">{activeDepartment}</span></span>
                  {view !== 'specializations' && (
                    <>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 font-medium">Specialization: <span className="text-purple-600">{activeSpecialization}</span></span>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        {view === 'departments' && renderDepartments()}
        {view === 'specializations' && renderSpecializations()}
        {view === 'courses' && renderCourses()}
        {view === 'subjects' && renderSubjects()}
      </div>
    </div>
  )
}

export default Exams 