const certificates = [
    {
        // 1 1
        thumb: 'thumbnails/nptel_dsa.jpg',
        image: 'images/nptel_dsa.jpg',
        altText: 'NPTEL_DSA_Python',
        verification: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS95S4570276210079882',
        title: 'Data Structures and Algorithms',
        provider: 'NPTEL',
        providerLink: 'https://swayam.gov.in/nc_details/NPTEL',
        date: 'Jul-Sep, 2023'
    },
    {
        // 1 2
        thumb: 'thumbnails/nptel_cp_ip.jpg',
        image: 'images/nptel_cp_ip.jpg',
        altText: 'NPTEL_ComputerNetworks',
        verification: 'https://nptel.ac.in/noc/E_Certificate/NPTEL24CS19S35740198230591343',
        title: 'Computer Networks and Internet Protocol',
        provider: 'NPTEL',
        providerLink: 'https://swayam.gov.in/nc_details/NPTEL',
        date: 'Jan-Apr, 2024'
    },
    {
        // 9 1
        thumb: 'thumbnails/zscaler-cyber-fundamentals.jpg',
        image: 'images/zscaler-cyber-fundamentals.jpg',
        altText: 'zscaler-cybersecurity-fundamentals',
        verification: 'https://verify.skilljar.com/c/6g57cwc8pajc',
        title: 'Zscaler Cybersecurity Fundamentals Associate Course',
        provider: 'Zscaler',
        providerLink: "https://www.zscaler.com/zscaler-academy",
        date: 'September 5th, 2024'
    },
    {
        // 9 2
        thumb: 'thumbnails/zscaler-edu-102.jpg',
        image: 'images/zscaler-edu-102.jpg',
        altText: 'zscaler-edu-102',
        verification: 'https://verify.skilljar.com/c/7rw64oqzc6na',
        title: 'Fundamentals of Cybersecurity (EDU-102)',
        provider: 'Zscaler',
        providerLink: 'https://www.zscaler.com/zscaler-academy',
        date: 'September 5th, 2024'
    },
    {
        // 1 3
        thumb: 'thumbnails/cisco_python_essentials1.jpg',
        image: 'images/cisco_python_essentials1.jpg',
        altText: 'CISCO_PythonEssentials_1',
        verification: 'https://www.credly.com/go/fPXNeMAp',
        title: 'Python Essentials 1',
        provider: 'CISCO Networking Academy',
        providerLink: 'https://www.netacad.com/courses/python-essentials-1',
        date: 'October 8th, 2023'
    },
    {
        // 1 4
        thumb: 'thumbnails/cisco_python_essentials2.jpg',
        image: 'images/cisco_python_essentials2.jpg',
        altText: 'CISCO_PythonEssentials_2',
        verification: 'https://www.credly.com/go/y7eJZnLV',
        title: 'Python Essentials 2',
        provider: 'CISCO Networking Academy',
        providerLink: 'https://www.netacad.com/courses/python-essentials-2',
        date: 'Oct 9th, 2023'
    },
    {
        // 12 1
        thumb: 'thumbnails/cisco_networking.jpg',
        image: 'images/cisco_networking.jpg',
        altText: 'CISCO_Networking_Basics',
        verification: 'https://www.credly.com/go/L6FZ9krL',
        title: 'Networking Basics',
        provider: 'CISCO Networking Academy',
        providerLink: 'https://www.netacad.com/courses/networking-basics',
        date: 'October 13th, 2024'
    },
    {
        // 8 1
        thumb: 'thumbnails/cisco_cyber.jpg',
        image: 'images/cisco_cyber.jpg',
        altText: 'CISCO_Cybersecurity',
        verification: 'https://www.credly.com/go/J1oi0Sbu',
        title: 'Introduction to Cyber Security',
        provider: 'CISCO Networking Academy',
        providerLink: 'https://www.netacad.com/courses/introduction-to-cybersecurity',
        date: 'May 29th, 2024'
    },
    {
        // 2 1
        thumb: 'thumbnails/android-developer.jpg',
        image: 'images/android-developer.jpg',
        altText: 'EduSkills_AndroidDeveloper',
        verification: 'https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=b074028e2fc6db61ba312fd96217f57b',
        title: 'Android Developer Virtual Internship',
        provider: 'EduSkills - Google',
        providerLink: 'https://eduskillsfoundation.org/index.php/about/#about-us',
        date: 'Jan-Mar, 2024'
    },
    {
        // 11 3
        thumb: 'thumbnails/aicte_palo_alto.jpg',
        image: 'images/aicte_palo_alto.jpg',
        altText: 'EduSkills_Palo_Alto',
        verification: 'https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=06e6e7151881062102b0dbec9347524c',
        title: 'Cybersecurity Virtual Internship',
        provider: 'EduSkills - Palo Alto Networks',
        providerLink: 'https://eduskillsfoundation.org/index.php/about/#about-us',
        date: 'Apr-June, 2024'
    },
    {
        // 11 4
        thumb: 'thumbnails/aicte_zscaler.jpg',
        image: 'images/aicte_zscaler.jpg',
        altText: 'EduSkills_Zscaler',
        verification: 'https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=5ae3e758bbc375811d6bce9d06379fc9',
        title: 'Zero Trust Cloud Security Virtual Internship',
        provider: 'EduSkills - Zscaler',
        providerLink: 'https://eduskillsfoundation.org/index.php/about/#about-us',
        date: 'July-September, 2023'
    },
    {
        // 2 3
        thumb: 'thumbnails/google_analytics.jpg',
        image: 'images/google_analytics.jpg',
        altText: 'Google_Analytics',
        verification: 'https://skillshop.exceedlms.com/student/path/508845-google-analytics-certification?sid=defef580-7629-47d4-b5ed-b9c8743a151e&sid_i=4',
        title: 'Google Analytics Certification',
        provider: 'Google Analytics Academy',
        providerLink: 'https://skillshop.exceedlms.com/student/path/508845-google-analytics-certification?sid=defef580-7629-47d4-b5ed-b9c8743a151e&sid_i=4',
        date: 'May 8th, 2024'
    },
    {
        // 3 1
        thumb: 'thumbnails/TechnoHacks web_dev.png',
        image: 'images/TechnoHacks web_dev.png',
        altText: 'TechnoHacks_webdev',
        verification: 'https://technohacks.co.in/',
        title: 'Web Development',
        provider: 'TechnoHacks',
        providerLink: 'https://technohacks.co.in/',
        date: 'Oct 20th - Nov 19th, 2023'
    },
    {
        // 3 2
        thumb: 'thumbnails/TechnoHacks cs&eh.png',
        image: 'images/TechnoHacks cs&eh.png',
        altText: 'TechnoHacks_cs_eh',
        verification: 'https://technohacks.co.in/',
        title: 'Cyber Security & Ethical Hacking',
        provider: 'TechnoHacks',
        providerLink: 'https://technohacks.co.in/',
        date: 'Oct 20th - Nov 19th, 2023'
    },
    {
        // 3 3
        thumb: 'thumbnails/Oasis_webdev.jpg',
        image: 'images/Oasis_webdev.jpg',
        altText: 'OasisInfobyte_webdev',
        verification: 'https://oasisinfobyte.com/validation/validated.html',
        title: 'Web Development',
        provider: 'Oasis Infobyte',
        providerLink: 'https://oasisinfobyte.com/#about',
        date: 'Nov 1st - Dec 1st, 2023'
    },
    {
        // 3 4
        thumb: 'thumbnails/codsoft_webdev.jpg',
        image: 'images/codsoft_webdev.jpg',
        altText: 'CodSoft_webdev',
        verification: 'https://codsoft.co.in/',
        title: 'Web Development',
        provider: 'CodSoft',
        providerLink: 'https://www.codsoft.in/',
        date: 'Oct 10th - Nov 10th, 2023'
    },
    {
        // 4 2
        thumb: 'thumbnails/forage_accenture.jpg',
        image: 'images/forage_accenture.jpg',
        altText: 'forage_accenture',
        verification: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_kKBau2ZFTa4G8MJ4r_1714984118299_completion_certificate.pdf',
        title: 'Data Analytics and Visualization Job Simulation',
        provider: 'Accenture',
        providerLink: 'https://www.accenture.com/in-en',
        date: 'May 6th, 2024'
    },
    {
        // 4 3
        thumb: 'thumbnails/forage_jpmc.jpg',
        image: 'images/forage_jpmc.jpg',
        altText: 'forage_jpmc',
        verification: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_kKBau2ZFTa4G8MJ4r_1715349728388_completion_certificate.pdf',
        title: 'Software Engineering Job Simulation',
        provider: 'JP Morgan',
        providerLink: 'https://www.jpmorganchase.com/',
        date: 'May 10th, 2024'
    },
    {
        // 2 4
        thumb: 'thumbnails/wd101.jpg',
        image: 'images/wd101.jpg',
        altText: 'pupilfirst_wd101',
        verification: 'https://www.pupilfirst.school/c/240307-5VA2QM',
        title: 'Web Development 101 - Getting Started with JavaScript',
        provider: 'pupilfirst',
        providerLink: 'https://www.pupilfirst.org/#philosophy-section',
        date: 'Mar 8th, 2024'
    },
    {
        // 5 4
        thumb: 'thumbnails/NSIC AWS.jpg',
        image: 'images/NSIC AWS.jpg',
        altText: 'NSIC_AWS',
        verification: '#',
        title: 'Amazon Web Services',
        provider: 'NSIC',
        providerLink: 'https://www.nsic.co.in/Corporate/AboutUs',
        date: 'Jul 17th-31st, 2023'
    },
    {
        // 5 1
        thumb: 'thumbnails/hackerrank_problemsolving.png',
        image: 'images/hackerrank_problemsolving.png',
        altText: 'hackerrank_problemsolving',
        verification: 'https://www.hackerrank.com/certificates/9e69782201eb',
        title: 'Probem Solving (Basic)',
        provider: 'Hackerrank',
        providerLink: 'https://www.hackerrank.com/',
        date: 'Nov 29th, 2023'
    },
    {
        // 5 2
        thumb: 'thumbnails/hackerrank_css.png',
        image: 'images/hackerrank_css.png',
        altText: 'hackerrank_css',
        verification: 'https://www.hackerrank.com/certificates/bba412a41333',
        title: 'CSS (Basic)',
        provider: 'Hackerrank',
        providerLink: 'https://www.hackerrank.com/',
        date: 'Mar 23rd, 2024'
    },
    {
        // 4 1
        thumb: 'thumbnails/coursera_java_fundamentals.jpg',
        image: 'images/coursera_java_fundamentals.jpg',
        altText: 'coursera_java_fundamentals',
        verification: 'https://www.coursera.org/account/accomplishments/verify/GAE44DA2YEXL',
        title: 'Java Fundamentals',
        provider: 'Coursera',
        providerLink: 'https://www.coursera.org/',
        date: 'May 27th, 2023'
    },
    {
        // 4 4
        thumb: 'thumbnails/skillup_java.jpg',
        image: 'images/skillup_java.jpg',
        altText: 'skillup_java',
        verification: '#',
        title: 'Java Certification Course',
        provider: 'Simplilearn',
        providerLink: 'https://www.simplilearn.com/skillup-free-online-courses',
        date: 'Nov 27th, 2022'
    },
    {
        // 5 3
        thumb: 'thumbnails/devtown_py_ai.jpg',
        image: 'images/devtown_py_ai.jpg',
        altText: 'devtown_python_ai',
        verification: 'https://cert.devtown.in/verify/Zw3fge',
        title: 'Python and Artificial Intelligence',
        provider: 'DevTown',
        providerLink: 'https://www.devtown.in/about-us',
        date: 'Dec 1st, 2023'
    },
    {
        // 6 1
        thumb: 'thumbnails/infy_dsa.jpg',
        image: 'images/infy_dsa.jpg',
        altText: 'infosys_DSA',
        verification: 'https://verify.onwingspan.com/',
        title: 'Python Data Structures and Algorithms',
        provider: 'Infosys Springboard',
        providerLink: 'https://infyspringboard.onwingspan.com/web/',
        date: 'May 10th, 2023'
    },
    {
        // 6 2
        thumb: 'thumbnails/infy_java.jpg',
        image: 'images/infy_java.jpg',
        altText: 'infosys_DSA',
        verification: 'https://verify.onwingspan.com/',
        title: 'Java Fundamentals',
        provider: 'Infosys Springboard',
        providerLink: 'https://infyspringboard.onwingspan.com/web/',
        date: 'June 29th, 2023'
    },
    {
        // 6 3
        thumb: 'thumbnails/infy_learn_python.jpg',
        image: 'images/infy_learn_python.jpg',
        altText: 'infosys_DSA',
        verification: 'https://verify.onwingspan.com/',
        title: 'Learning Python',
        provider: 'Infosys Springboard',
        providerLink: 'https://infyspringboard.onwingspan.com/web/',
        date: 'May 16th, 2023'
    },
    {
        // 6 4
        thumb: 'thumbnails/GL_Java.jpg',
        image: 'images/GL_Java.jpg',
        altText: 'GreatLearning_Java',
        verification: 'https://www.mygreatlearning.com/certificate/BJAGBFHO',
        title: 'Java Programming',
        provider: 'Great Learning',
        providerLink: 'https://www.mygreatlearning.com/',
        date: 'December, 2022'
    },
    {
        // 7 1
        thumb: 'thumbnails/GL_DS_C.jpg',
        image: 'images/GL_DS_C.jpg',
        altText: 'GreatLearning_DS_in_C',
        verification: 'https://www.mygreatlearning.com/certificate/BNTOKNVZ',
        title: 'Data Structures in C',
        provider: 'Great Learning',
        providerLink: 'https://www.mygreatlearning.com/',
        date: 'December, 2022'
    },
    {
        // 7 2
        thumb: 'thumbnails/GL_DSA_Java.jpg',
        image: 'images/GL_DSA_Java.jpg',
        altText: 'GreatLearning_DS_in_Java',
        verification: 'https://www.mygreatlearning.com/certificate/INODXADO',
        title: 'Data Structures and Algorithms in Java',
        provider: 'Great Learning',
        providerLink: 'https://www.mygreatlearning.com/',
        date: 'December, 2022'
    },
    {
        // 7 3
        thumb: 'thumbnails/GL_Oracle_SQL.jpg',
        image: 'images/GL_Oracle_SQL.jpg',
        altText: 'GreatLearning_Oracle_SQL',
        verification: 'https://www.mygreatlearning.com/certificate/DELEXEOB',
        title: 'Oracle SQL',
        provider: 'Great Learning',
        providerLink: 'https://www.mygreatlearning.com/',
        date: 'September, 2024'
    },
    {
        // 7 4
        thumb: 'thumbnails/GL_HTML.jpg',
        image: 'images/GL_HTML.jpg',
        altText: 'GreatLearning_HTML',
        verification: 'https://www.mygreatlearning.com/certificate/RKUYQPDF',
        title: 'Front End Development - HTML',
        provider: 'Great Learning',
        providerLink: 'https://www.mygreatlearning.com/',
        date: 'October, 2023'
    },
    {
        // 8 2
        thumb: 'thumbnails/IBM_AI.jpg',
        image: 'images/IBM_AI.jpg',
        altText: 'IBM_AI',
        verification: 'https://www.credly.com/badges/dac08d30-b986-4721-91ff-02e73e3ce77f/print',
        title: 'Getting Started with Artificial Intelligence',
        provider: 'IBM',
        providerLink: 'https://skillsbuild.org/college-students/digital-credentials/getting-started-with-artificial-intelligence',
        date: 'June 5th, 2024'
    },
    {
        // 8 3
        thumb: 'thumbnails/IBM_enterpriseAI.jpg',
        image: 'images/IBM_enterpriseAI.jpg',
        altText: 'IBM_Enterprise_AI',
        verification: 'https://www.credly.com/badges/e22f846a-5c12-41f9-91c9-7d32ad01fedb/print',
        title: 'Getting Started with Enterprise-grade AI',
        provider: 'IBM',
        providerLink: 'https://skillsbuild.org/college-students/digital-credentials/getting-started-with-enterprise-grade-ai',
        date: 'June 6th, 2024'
    },
    {
        // 8 4
        thumb: 'thumbnails/IBM_j2c.jpg',
        image: 'images/IBM_j2c.jpg',
        altText: 'IBM_J2C',
        verification: 'https://www.credly.com/go/C1aQb2oj',
        title: 'Journey to Cloud: Envisioning Your Solution',
        provider: 'IBM',
        providerLink: 'https://skillsbuild.org/college-students/digital-credentials/journey-to-cloud-envisioning-your-solution',
        date: 'June 8th, 2024'
    },
    {
        // 10 4
        thumb: 'thumbnails/java-intro.jpg',
        image: 'images/java-intro.jpg',
        altText: 'udemy_java_introduction',
        verification: 'https://ude.my/UC-494ed70a-dc7e-46bf-ab2b-feb8700fb68c/',
        title: 'Introduction to Java Programming',
        provider: 'Udemy',
        providerLink: 'https://www.udemy.com/',
        date: 'July 28th, 2023'
    },
    {
        // 9 4
        thumb: 'thumbnails/html-beginner.jpg',
        image: 'images/html-beginner.jpg',
        altText: 'udemy_html_beginner',
        verification: 'https://ude.my/UC-445d8a8a-064e-47d2-82d4-06c8435ec388/',
        title: 'Learn HTML - For Beginners',
        provider: 'Udemy',
        providerLink: 'https://www.udemy.com/',
        date: 'December 17th, 2023'
    },
    {
        // 10 1
        thumb: 'thumbnails/cpp-beginner.jpg',
        image: 'images/cpp-beginner.jpg',
        altText: 'udemy_cpp_beginner',
        verification: 'https://ude.my/UC-91e3e0dd-4ddf-45b6-a1ee-dd927adab7b9/',
        title: 'The Ultimate C++ Beginner Course',
        provider: 'Udemy',
        providerLink: 'https://www.udemy.com/',
        date: 'July 17th, 2023'
    },
    {
        // 10 2
        thumb: 'thumbnails/cpp-training.jpg',
        image: 'images/cpp-training.jpg',
        altText: 'udemy_cpp_training',
        verification: 'https://ude.my/UC-62628490-e3ef-4958-961e-e17de057876e/',
        title: 'C++ Complete Training Course for C++ Beginners',
        provider: 'Udemy',
        providerLink: 'https://www.udemy.com/',
        date: 'July 19th, 2023'
    },
    {
        // 10 3
        thumb: 'thumbnails/java-beginner.jpg',
        image: 'images/java-beginner.jpg',
        altText: 'udemy_java_beginner',
        verification: 'https://ude.my/UC-c5d82376-c80d-4a5d-814f-b882e791be3a/',
        title: 'Java for Beginners - Learn all the Basics of Java',
        provider: 'Udemy',
        providerLink: 'https://www.udemy.com/',
        date: 'July 28th, 2023'
    },
    {
        // 9 3
        thumb: 'thumbnails/complete-js.jpg',
        image: 'images/udemy_complete_js.jpg',
        altText: 'udemy_complete_js',
        verification: 'https://ude.my/UC-c6910a8c-d7ed-4a93-a45d-0132c4ef0c1b/',
        title: 'Complete JAVASCRIPT with HTML5,CSS3 from zero to Expert-2024',
        provider: 'Udemy',
        providerLink: 'https://www.udemy.com/',
        date: 'July 28th, 2023'
    },
    {
        // 11 1
        thumb: 'thumbnails/python-oops.jpg',
        image: 'images/python-oops.jpg',
        altText: 'udemy_python_OOPS',
        verification: 'https://ude.my/UC-cf8db7b7-c35d-4116-9580-15451e198adc/',
        title: 'Python: Object Oriented Programming',
        provider: 'Udemy',
        providerLink: 'https://www.udemy.com/',
        date: 'July 17th, 2023'
    },
    {
        // 11 2
        thumb: 'thumbnails/photoshop.jpg',
        image: 'images/photoshop.jpg',
        altText: 'udemy_photoshop',
        verification: 'https://ude.my/UC-2733637d-fa30-4823-adb3-de88e429ceac/',
        title: 'Adobe Photoshop CC- Basic Photoshop training',
        provider: 'Udemy',
        providerLink: 'https://www.udemy.com/',
        date: 'September 14th, 2024'
    },
    {
        // 2 2
        thumb: 'thumbnails/InternPe web_dev.png',
        image: 'images/InternPe web_dev.png',
        altText: 'InternPe_webdev',
        verification: '#',
        title: 'Web Development',
        provider: 'InternPe',
        providerLink: 'https://internpe.in/about.html',
        date: 'Oct 16th - Nov 12th, 2023'
    }
];