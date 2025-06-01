import React, { useState } from 'react'
import { AcademicCapIcon, DocumentIcon, ChevronLeftIcon, ComputerDesktopIcon, BriefcaseIcon, CalculatorIcon, BookOpenIcon } from '@heroicons/react/24/outline'

const Exams = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [activeDepartment, setActiveDepartment] = useState(null);
  const [activeSpecialization, setActiveSpecialization] = useState(null);
  const [view, setView] = useState('departments'); // departments, specializations, courses, subjects

  // Define specializations for each department
  const departmentSpecializations = {
    "Computer Science": {
      "General": ["bca-general"],
      "Artificial Intelligence": ["bca-ai", "btech-ai"],
      "Cloud Computing": ["btech-cloud"],
      "Process Automation": ["bca-pa"]
    },
    "Management": {
      "General": ["mba", "bba"]
    },
    "Commerce": {
      "General": ["bcom"]
    }
  };

  const courseData = {
    // BCA General
    "bca-general": {
      title: "BCA (General)",
      subjects: [
        {
          title: "Programming Fundamentals of C",
          path: "/STED-FY Data/ESE 2022-23/BCACCA1102_1_1_BCA_Programming Fundamentals of C_ Set 1.docx"
        },
        {
          title: "Web Designing",
          path: "/STED-FY Data/ESE 2022-23/BCACCA1103_I_I_BCA_WEB DESIGNING_SET 1.docx"
        },
        {
          title: "Computer Organization & Architecture",
          path: "/STED-FY Data/ESE 2022-23/BCACCA1104_Ist Year_I Semester_BCA_COA_ Set 1.docx"
        },
        {
          title: "Fundamentals of IT",
          path: "/STED-FY Data/ESE 2022-23/BCACCA1105_FOIT_ESE_2022_BCA General (A+B+C)1st_Year_1st_Sem_Set A.docx"
        },
        {
          title: "Computer Networks",
          path: "/STED-FY Data/ESE 2022-23/BCACCA2101 _Computer Networks_ESE_2022-23_Set B.docx"
        },
        {
          title: "OOPs With Java",
          path: "/STED-FY Data/ESE 2022-23/BCACCA2102_2ndYear_2ndSemester_BCA_OOPsWithJava_ Set_1.docx"
        },
        {
          title: "Data Structures & Algorithms",
          path: "/STED-FY Data/ESE 2022-23/BCACCA2103_I Year_II Semester_BCA_DSA_ Set 1.docx"
        },
        {
          title: "Software Engineering",
          path: "/STED-FY Data/ESE 2022-23/BCACCA2105_Software Engineering ESE-BCA (Set-B) Back.docx"
        },
        {
          title: "RDBMS",
          path: "/STED-FY Data/ESE 2022-23/BCACCA3101_Year2_Sem3_rdbms_ Set 1 or 2 - Shivani Gupta.docx"
        },
        {
          title: "Linux & Shell Script",
          path: "/STED-FY Data/ESE 2022-23/BCACCA3102 _2nd_3rd Semester_BCA_Linux_Shell_Script_ Set 1.docx"
        },
        {
          title: "Python Programming",
          path: "/STED-FY Data/ESE 2022-23/BCACCA3103_2_3_BCA_PythonProgramming_ Set_1 - Bindiya Jain.docx"
        },
        {
          title: "Software Testing",
          path: "/STED-FY Data/ESE 2022-23/BCACCA3104_Software Testing_ESE_2022-23(O)_Set No. (1).docx"
        },
        {
          title: "Big Data Analysis",
          path: "/STED-FY Data/ESE 2022-23/BCACCA4101_2_IV_BCA_BIGDATAANALYSIS_ Set 1.docx"
        },
        {
          title: "Design & Analysis of Algorithms",
          path: "/STED-FY Data/ESE 2022-23/BCACCA4102 _II_IV_B.C.A_DAA_ Set 1.docx"
        },
        {
          title: "Advanced Java",
          path: "/STED-FY Data/ESE 2022-23/BCACCA4103_2_IV_BCA_BCACCA41  adv java.docx"
        },
        {
          title: "PHP & MySQL",
          path: "/STED-FY Data/ESE 2022-23/BCACCA4104_2nd Year_4th Semester_BCA_Phpmysql_ Set 1.docx"
        },
        {
          title: "E-commerce",
          path: "/STED-FY Data/ESE 2022-23/BCAECA4111_E-commerce_2nd _4th_BCA_ Set 1.docx"
        }
      ]
    },
    // BCA AI & Data Science
    "bca-ai": {
      title: "BCA (AI & Data Science)",
      subjects: [
        {
          title: "Fundamentals of AI",
          path: "/STED-FY Data/ESE 2022-23/BASCCA1105_I Year_ISemester__BCA (AIDS)_Fundamentals of AI _ Set 1.docx"
        },
        {
          title: "Introduction to Data Science",
          path: "/STED-FY Data/ESE 2022-23/BASCCA2105_1stYear_2ndSemester_BCA_Introduction to Data Science_ Set 1.docx"
        },
        {
          title: "Python Programming",
          path: "/STED-FY Data/ESE 2022-23/BADCCA2105_Python_Prog_ESE_2021-22(E)_Set_2 Back.docx"
        },
        {
          title: "RPA (Robotic Process Automation)",
          path: "/STED-FY Data/ESE 2022-23/BASCCA3104_2022_III_BCA_RPA_ Set 1 - Pratik Goswami.docx"
        },
        {
          title: "Machine Learning",
          path: "/STED-FY Data/ESE 2022-23/BASCCA4103_2022_2023_4th_Semester_BCA(AIDS)_Machine_Learning_ Set 1.docx"
        },
        {
          title: "R Programming",
          path: "/STED-FY Data/ESE 2022-23/BASCCA4104_IV_Semester_BCA_RP_ Set 1.docx"
        },
        {
          title: "Artificial Neural Networks",
          path: "/STED-FY Data/ESE 2022-23/BAP05102_ANN_Set 1 - Shikha Sharma.docx"
        },
        {
          title: "Digital Image Processing",
          path: "/STED-FY Data/ESE 2022-23/BAP05103_Digital Image Processing_ESE_2022-23(O)_Set No. -1.docx"
        },
        {
          title: "Natural Language Processing",
          path: "/STED-FY Data/ESE 2022-23/BAP05104_3_5_BCA(AI)_NaturalLanguageProcessing_Set_1 - Bindiya Jain.docx"
        }
      ]
    },
    // B.Tech AI
    "btech-ai": {
      title: "B.Tech (Artificial Intelligence)",
      subjects: [
        {
          title: "Introduction to AI",
          path: "/STED-FY Data/ESE 2022-23/BADCCE1107_I_I_BTECH(AI_DS(_INTRODUCTION TO AI_ Set 1.docx"
        },
        {
          title: "Operating System",
          path: "/STED-FY Data/ESE 2022-23/BAI_BCC_BDS04101_Operating System_SET 2 Back.docx"
        },
        {
          title: "Advanced Machine Learning",
          path: "/STED-FY Data/ESE 2022-23/BAI06101_Advanced Machine Learning_Final.docx"
        },
        {
          title: "Digital Image Processing",
          path: "/STED-FY Data/ESE 2022-23/BAI06102_IIIYear_VISemester_B.tech_Digital Image Processing_ Set 1.docx"
        },
        {
          title: "Natural Language Processing",
          path: "/STED-FY Data/ESE 2022-23/BAI06103_III_VI_B.Tech_NLP_ Set 1.docx"
        },
        {
          title: "Recommender Systems",
          path: "/STED-FY Data/ESE 2022-23/BAI06110__ Recommender System_Set2 Back.docx"
        },
        {
          title: "Deep Learning",
          path: "/STED-FY Data/ESE 2022-23/BAI07101 -2022- VII- B.tech- Deep-learning ,Set- 1.docx"
        },
        {
          title: "Computer Vision",
          path: "/STED-FY Data/ESE 2022-23/BAI07102 -2022- VII- B.tech- Computer vision ,Set- 1.docx"
        },
        {
          title: "Chatbot Development",
          path: "/STED-FY Data/ESE 2022-23/BAI07103 -2022-VII-B.tech- chatbot development ,Set- 1.docx"
        },
        {
          title: "Intelligent Process Automation",
          path: "/STED-FY Data/ESE 2022-23/BAI07104_2022_VII_B.tech_Intelligent_Process_Automation_Set1.docx"
        },
        {
          title: "Business Intelligence",
          path: "/STED-FY Data/ESE 2022-23/BAI07108 -2022-VII-B.tech- business-Intelligence   ,Set- 1.docx"
        },
        {
          title: "NoSQL Databases",
          path: "/STED-FY Data/ESE 2022-23/BAI05103-BDS05102 _III_V_B.Tech_NoSQL Databases_ Set 1 - Neha Jain.docx"
        }
      ]
    },
    // B.Tech Cloud Computing
    "btech-cloud": {
      title: "B.Tech (Cloud Computing)",
      subjects: [
        {
          title: "Information Security Fundamentals",
          path: "/STED-FY Data/ESE 2022-23/BCC03109 -BCE03109_Information Security Fundamentals_ Set 2.docx"
        },
        {
          title: "Ethical Hacking",
          path: "/STED-FY Data/ESE 2022-23/BCC05101_III_V_B. Tech_Ethical_Hacking_ Set 1.docx"
        },
        {
          title: "Server Installation & Configuration",
          path: "/STED-FY Data/ESE 2022-23/BCC05102 -Set-A-Installation and Configuration of Server_ESE - Rishi Kumar Sharma.docx"
        },
        {
          title: "Virtualization & Cloud Computing",
          path: "/STED-FY Data/ESE 2022-23/BCC05103_ B.tech 3rd Year_5Sem_Virtualization _ Cloud Computing_ Set 1.docx"
        },
        {
          title: "Linux Server Administration",
          path: "/STED-FY Data/ESE 2022-23/BCC06103 LINUX SERVER ADMINISTRATION_ESE_2022-23(O)_Set No. (A).docx"
        },
        {
          title: "Cyber Forensics",
          path: "/STED-FY Data/ESE 2022-23/BCC06104_Cyber forensic_SET 2 Back.docx"
        },
        {
          title: "Storage and Data Center",
          path: "/STED-FY Data/ESE 2022-23/BCC06108_2023_VIth_B.Tech_Storage and Data Center_ Set 1.docx"
        },
        {
          title: "Client Side Scripting",
          path: "/STED-FY Data/ESE 2022-23/BCC06109_CSS_ Back.docx"
        },
        {
          title: "Cloud Migration",
          path: "/STED-FY Data/ESE 2022-23/BCC07101_2022_Sem VII_B.Tech_Cloud Migration_Set 1.doc"
        },
        {
          title: "Cloud Deployment",
          path: "/STED-FY Data/ESE 2022-23/BCC07102_2022_Sem VII_B.Tech_Cloud Deployment_Set 1.docx"
        },
        {
          title: "Server Security Management",
          path: "/STED-FY Data/ESE 2022-23/BCC07103_2022_Sem VII_B.Tech_Server Security Management_Set 1.docx"
        },
        {
          title: "Cloud Web Services",
          path: "/STED-FY Data/ESE 2022-23/BCC07104_2022_Sem VII_B.Tech_CWS - Set-1.docx"
        },
        {
          title: "Advanced Server Side Scripting",
          path: "/STED-FY Data/ESE 2022-23/BCC07109_2022_VII_B.tech_Advanced_Server_Side_Scripting_Language_set-1.docx"
        }
      ]
    },
    // BCA Process Automation
    "bca-pa": {
      title: "BCA (Process Automation)",
      subjects: [
        {
          title: "Object Oriented Analysis & Design",
          path: "/STED-FY Data/ESE 2022-23/BAP03103  BCA03103  BCT03103  BCM03103 ESE - OOAD -Set 2.docx"
        },
        {
          title: "Big Data",
          path: "/STED-FY Data/ESE 2022-23/BAP03107.3 ESE - Big Data - Set 2 Back.docx"
        },
        {
          title: "Discrete Mathematics",
          path: "/STED-FY Data/ESE 2022-23/BAP03104_Elements of Discrete Mathematics_Set_2 Back.docx"
        },
        {
          title: "Analysis of Algorithms",
          path: "/STED-FY Data/ESE 2022-23/BAP04103_ADA_2_2021-22(E)_ESE Back.docx"
        },
        {
          title: "Numerical Techniques",
          path: "/STED-FY Data/ESE 2022-23/BAP04104_Computer based numerical techniques_1_2021-22_ESE_Set B Back.docx"
        },
        {
          title: "Business Process Management",
          path: "/STED-FY Data/ESE 2022-23/BAP05101_IIIYear_VSemester_BCA(AI_PA)_BPM_Set 2.docx"
        },
        {
          title: "RPA Tools",
          path: "/STED-FY Data/ESE 2022-23/BADCCE4104_2023_IVth_B.Tech_RPA Tool_ Set 1.docx"
        }
      ]
    },
    // MBA
    "mba": {
      title: "MBA",
      subjects: [
        {
          title: "Management Concepts",
          path: "/STED-FY Data/MBA/MBX03101_SET 1.pdf"
        },
        {
          title: "Organizational Behavior",
          path: "/STED-FY Data/MBA/MBX03102_SET 1.pdf"
        },
        {
          title: "Managerial Economics",
          path: "/STED-FY Data/MBA/MBX03103_SET 1.pdf"
        },
        {
          title: "Business Statistics",
          path: "/STED-FY Data/MBA/MBX03104_SET 1.pdf"
        },
        {
          title: "Financial Management",
          path: "/STED-FY Data/MBA/MBX03118_Set 1.pdf"
        },
        {
          title: "Marketing Management",
          path: "/STED-FY Data/MBA/MBX03119_SET 1.pdf"
        },
        {
          title: "Operations Management",
          path: "/STED-FY Data/MBA/MBX03126_SET 1.pdf"
        },
        {
          title: "Human Resource Management",
          path: "/STED-FY Data/MBA/MBX03127_SET 1.pdf"
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
          path: "/STED-FY Data/BBA/BBX03101_BBB03101_BBC03101_SET A.pdf"
        },
        {
          title: "Business Law",
          path: "/STED-FY Data/BBA/BBX03102_BBB03102_BBC03102_SET_A.pdf"
        },
        {
          title: "Financial Management",
          path: "/STED-FY Data/BBA/BBX03103_BBB03103_BBC03103_SET_A.pdf"
        },
        {
          title: "Marketing Management",
          path: "/STED-FY Data/BBA/BBX03104_BBB03104_BBC03104_SETA.pdf"
        },
        {
          title: "Business Environment",
          path: "/STED-FY Data/BBA/BBX03106_Set A.pdf"
        },
        {
          title: "Human Resource Management",
          path: "/STED-FY Data/BBA/BBX03107_BBB03107_BBC03107_SET A.pdf"
        },
        // Core Subjects - Semester 5
        {
          title: "Business Ethics",
          path: "/STED-FY Data/BBA/BBX05101_BBB05101_BBC05101_Set A.pdf"
        },
        {
          title: "Operations Management",
          path: "/STED-FY Data/BBA/BBX05102_BBB05102_BBC05102_Set A.pdf"
        },
        {
          title: "Research Methodology",
          path: "/STED-FY Data/BBA/BBX05103_BBB05103_BBC05103_Set A.pdf"
        },
        {
          title: "Entrepreneurship Development",
          path: "/STED-FY Data/BBA/BBX05104_BBB05104_BBC05104_SET 1.pdf"
        },
        {
          title: "Strategic Management",
          path: "/STED-FY Data/BBA/BBX05105_SET A.pdf"
        },
        {
          title: "International Business",
          path: "/STED-FY Data/BBA/BBX05106_SET A.pdf"
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
          path: "/STED-FY Data/B. Com/BCO03101_BCH03101_Set A.pdf"
        },
        {
          title: "Business Statistics",
          path: "/STED-FY Data/B. Com/BCO03102_BCH03102_Set A.pdf"
        },
        {
          title: "Business Law",
          path: "/STED-FY Data/B. Com/BCO03103_BCH03103_Set A.pdf"
        },
        {
          title: "Corporate Accounting",
          path: "/STED-FY Data/B. Com/BCO03104_BCH03104_Set A.pdf"
        },
        {
          title: "Business Environment",
          path: "/STED-FY Data/B. Com/BCO03105_BCH03105_Set A.pdf"
        },
        {
          title: "Auditing",
          path: "/STED-FY Data/B. Com/BCH03106_Auditing_ Set A.pdf"
        },
        // Semester 5
        {
          title: "Income Tax",
          path: "/STED-FY Data/B. Com/BCO05101_BCH05101_Set A.pdf"
        },
        {
          title: "Cost Accounting",
          path: "/STED-FY Data/B. Com/BCO05102_BCH05102_Set A.pdf"
        },
        {
          title: "Management Accounting",
          path: "/STED-FY Data/B. Com/BCO05103_BCH05103_SET A.pdf"
        },
        {
          title: "Banking and Insurance",
          path: "/STED-FY Data/B. Com/BCO05104_BCH05104_Set A.pdf"
        },
        {
          title: "Financial Markets",
          path: "/STED-FY Data/B. Com/BCO05105_BCH05105_Set A.pdf"
        },
        {
          title: "International Business",
          path: "/STED-FY Data/B. Com/BCO05106_BCH05106_Set A.pdf"
        }
      ]
    }
  };

  const departmentIcons = {
    "Computer Science": <ComputerDesktopIcon className="h-12 w-12" />,
    "Management": <BriefcaseIcon className="h-12 w-12" />,
    "Commerce": <CalculatorIcon className="h-12 w-12" />
  };

  const getBackgroundColor = (department) => {
    const colors = {
      "Computer Science": "from-blue-500 to-indigo-600",
      "Management": "from-violet-500 to-purple-600",
      "Commerce": "from-emerald-500 to-green-600"
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