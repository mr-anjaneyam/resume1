const certificates = [
    {
        // 1 1
        image: 'images/nptel_dsa.jpg',
        altText: 'NPTEL_DSA',
        verification: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS95S4570276210079882',
        title: 'Data Structures and Algorithms',
        provider: 'NPTEL',
        providerLink: 'https://swayam.gov.in/nc_details/NPTEL',
        date: 'Jul-Sep, 2023'
    },
    {
        // 1 2
        image: 'images/nptel_cp_ip.jpg',
        altText: 'NPTEL_CPIP',
        verification: 'https://nptel.ac.in/noc/E_Certificate/NPTEL24CS19S35740198230591343',
        title: 'Computer Networks and Internet Protocol',
        provider: 'NPTEL',
        providerLink: 'https://swayam.gov.in/nc_details/NPTEL',
        date: 'Jan-Apr, 2024'
    },
    {
        // 1 3
        image: 'images/cisco_python_essentials1.jpg',
        altText: 'CISCO_PE1',
        verification: 'https://www.credly.com/go/fPXNeMAp',
        title: 'Python Essentials 1',
        provider: 'CISCO Networking Academy',
        providerLink: 'https://www.netacad.com/about-networking-academy',
        date: 'October 8th, 2023'
    },
    {
        // 1 4
        image: 'images/cisco_python_essentials2.jpg',
        altText: 'CISCO_PE2',
        verification: 'https://www.credly.com/go/y7eJZnLV',
        title: 'Python Essentials 2',
        provider: 'CISCO Networking Academy',
        providerLink: 'https://www.netacad.com/about-networking-academy',
        date: 'Oct 9th, 2023'
    },
    {
        // 2 1
        image: 'images/android-developer.jpg',
        altText: 'AndroidDeveloper',
        verification: 'https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=b074028e2fc6db61ba312fd96217f57b',
        title: 'Android Developer Virtual Internship',
        provider: 'EduSkills - Google',
        providerLink: 'https://eduskillsfoundation.org/index.php/about/#about-us',
        date: 'Jan-Mar, 2024'
    },
    {
        // 2 2
        image: 'images/InternPe web_dev.png',
        altText: 'InternPe',
        verification: '#',
        title: 'Web Development',
        provider: 'InternPe',
        providerLink: 'https://internpe.in/about.html',
        date: 'Oct 16th - Nov 12th, 2023'
    },
    {
        // 2 3
        image: 'images/google_analytics.jpg',
        altText: 'Google Analytics',
        verification: 'https://skillshop.exceedlms.com/student/path/508845-google-analytics-certification?sid=defef580-7629-47d4-b5ed-b9c8743a151e&sid_i=4',
        title: 'Google Analytics Certification',
        provider: 'Google Analytics Academy',
        providerLink: 'https://skillshop.exceedlms.com/student/path/508845-google-analytics-certification?sid=defef580-7629-47d4-b5ed-b9c8743a151e&sid_i=4',
        date: 'May 8th, 2024'
    },
    {
        // 2 4
        image: 'images/wd101.jpg',
        altText: 'wd101',
        verification: 'https://www.pupilfirst.school/c/240307-5VA2QM',
        title: 'Web Development 101 - Getting Started with JavaScript',
        provider: 'pupilfirst',
        providerLink: 'https://www.pupilfirst.org/#philosophy-section',
        date: 'Mar 8th, 2024'
    },
    {
        // 3 1
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
        image: 'images/TechnoHacks cs&eh.png',
        altText: 'TechnoHacks_cseh',
        verification: 'https://technohacks.co.in/',
        title: 'Cyber Security & Ethical Hacking',
        provider: 'TechnoHacks',
        providerLink: 'https://technohacks.co.in/',
        date: 'Oct 20th - Nov 19th, 2023'
    },
    {
        // 3 3
        image: 'images/Oasis_webdev.jpg',
        altText: 'Oasis_webdev',
        verification: 'https://oasisinfobyte.com/validation/validated.html',
        title: 'Web Development',
        provider: 'Oasis Infobyte',
        providerLink: 'https://oasisinfobyte.com/#about',
        date: 'Nov 1st - Dec 1st, 2023'
    },
    {
        // 3 4
        image: 'images/codsoft_webdev.jpg',
        altText: 'codsoft_webdev',
        verification: 'https://codsoft.co.in/',
        title: 'Web Development',
        provider: 'CodSoft',
        providerLink: 'https://www.codsoft.in/',
        date: 'Oct 10th - Nov 10th, 2023'
    },
    {
        // 4 1
        image: 'images/coursera_java_fundamentals.jpg',
        altText: 'coursera_java_fundamentals',
        verification: 'https://www.coursera.org/account/accomplishments/verify/GAE44DA2YEXL',
        title: 'Java Fundamentals',
        provider: 'Coursera',
        providerLink: 'https://www.coursera.org/',
        date: 'May 27th, 2023'
    },
    {
        // 4 2
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
        image: 'images/forage_jpmc.jpg',
        altText: 'forage_jpmc',
        verification: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_kKBau2ZFTa4G8MJ4r_1715349728388_completion_certificate.pdf',
        title: 'Software Engineering Job Simulation',
        provider: 'JP Morgan',
        providerLink: 'https://www.jpmorganchase.com/',
        date: 'May 10th, 2024'
    },
    {
        // 4 4
        image: 'images/skillup_java.jpg',
        altText: 'skillup_java',
        verification: '#',
        title: 'Java Certification Course',
        provider: 'Simplilearn',
        providerLink: 'https://www.simplilearn.com/skillup-free-online-courses',
        date: 'Nov 27th, 2022'
    },
    {
        // 5 1
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
        image: 'images/hackerrank_css.png',
        altText: 'hackerrank_css',
        verification: 'https://www.hackerrank.com/certificates/bba412a41333',
        title: 'CSS (Basic)',
        provider: 'Hackerrank',
        providerLink: 'https://www.hackerrank.com/',
        date: 'Mar 23rd, 2024'
    },
    {
        // 5 3
        image: 'images/devtown_py_ai.jpg',
        altText: 'devtown_py_ai',
        verification: 'https://cert.devtown.in/verify/Zw3fge',
        title: 'Python and Artificial Intelligence',
        provider: 'DevTown',
        providerLink: 'https://www.devtown.in/about-us',
        date: 'Dec 1st, 2023'
    },
    {
        // 5 4
        image: 'images/NSIC AWS.jpg',
        altText: 'nsic_aws',
        verification: '#',
        title: 'Amazon Web Services',
        provider: 'NSIC',
        providerLink: 'https://www.nsic.co.in/Corporate/AboutUs',
        date: 'Jul 17th-31st, 2023'
    },
    {
        // 6 1
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
        image: 'images/GL_Java.jpg',
        altText: 'java_GL',
        verification: 'https://www.mygreatlearning.com/certificate/BJAGBFHO',
        title: 'Java Programming',
        provider: 'Great Learning',
        providerLink: 'https://www.mygreatlearning.com/',
        date: 'December, 2022'
    },
    {
        // 7 1
        image: 'images/GL_DS_C.jpg',
        altText: 'DS_in_C',
        verification: 'https://www.mygreatlearning.com/certificate/BNTOKNVZ',
        title: 'Data Structures in C',
        provider: 'Great Learning',
        providerLink: 'https://www.mygreatlearning.com/',
        date: 'December, 2022'
    },
    {
        // 7 2
        image: 'images/GL_DSA_Java.jpg',
        altText: 'dsa_java',
        verification: 'https://www.mygreatlearning.com/certificate/INODXADO',
        title: 'Data Structures and Algorithms in Java',
        provider: 'Great Learning',
        providerLink: 'https://www.mygreatlearning.com/',
        date: 'December, 2022'
    },
    {
        // 7 3
        image: 'images/GL_Oracle_SQL.jpg',
        altText: 'oracle_sql',
        verification: 'https://www.mygreatlearning.com/certificate/DELEXEOB',
        title: 'Oracle SQL',
        provider: 'Great Learning',
        providerLink: 'https://www.mygreatlearning.com/',
        date: 'September, 2024'
    },
    {
        // 7 4
        image: 'images/GL_HTML.jpg',
        altText: 'frontend_html',
        verification: 'https://www.mygreatlearning.com/certificate/RKUYQPDF',
        title: 'Front End Development - HTML',
        provider: 'Great Learning',
        providerLink: 'https://www.mygreatlearning.com/',
        date: 'October, 2023'
    },
    {
        // 8 1
        image: 'images/cisco_cyber.jpg',
        altText: 'Cisco_cybersecurity',
        verification: 'https://www.credly.com/go/J1oi0Sbu',
        title: 'Introduction to Cyber Security',
        provider: 'CISCO Networking Academy',
        providerLink: 'https://www.netacad.com/about-networking-academy',
        date: 'May 29th, 2024'
    },
    {
        // 8 2
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
        image: 'images/IBM_j2c.jpg',
        altText: 'IBM_J2C',
        verification: 'https://www.credly.com/go/C1aQb2oj',
        title: 'Journey to Cloud: Envisioning Your Solution',
        provider: 'IBM',
        providerLink: 'https://skillsbuild.org/college-students/digital-credentials/journey-to-cloud-envisioning-your-solution',
        date: 'June 8th, 2024'
    },
    {
        // 9 1
        image: 'images/zscaler-cyber-fundamentals.jpg',
        altText: 'zscaler-cyber-fundamentals',
        verification: 'https://verify.skilljar.com/c/6g57cwc8pajc',
        title: 'Zscaler Cybersecurity Fundamentals Associate Course',
        provider: 'Zscaler',
        providerLink: "https://www.zscaler.com/zscaler-academy",
        date: 'September 5th, 2024'
    },
    {
        // 9 2
        image: 'images/zscaler-edu-102.jpg',
        altText: 'zscaler-edu-102',
        verification: 'https://verify.skilljar.com/c/7rw64oqzc6na',
        title: 'Fundamentals of Cybersecurity (EDU-102)',
        provider: 'Zscaler',
        providerLink: 'https://www.zscaler.com/zscaler-academy',
        date: 'September 5th, 2024'
    },
    {
        // 9 3
        image: 'images/complete-js.jpg',
        altText: 'udemy-complete-js',
        verification: 'https://ude.my/UC-c6910a8c-d7ed-4a93-a45d-0132c4ef0c1b/',
        title: 'Complete JAVASCRIPT with HTML5,CSS3 from zero to Expert-2024',
        provider: 'Udemy',
        providerLink: 'https://www.udemy.com/',
        date: 'July 28th, 2023'
    },
    {
        // 9 4
        image: 'images/html-beginner.jpg',
        altText: 'udemy-html-beginner',
        verification: 'https://ude.my/UC-445d8a8a-064e-47d2-82d4-06c8435ec388/',
        title: 'Learn HTML - For Beginners',
        provider: 'Udemy',
        providerLink: 'https://www.udemy.com/',
        date: 'December 17th, 2023'
    },
    {
        // 10 1
        image: 'images/cpp-beginner.jpg',
        altText: 'udemy-cpp-beginner',
        verification: 'https://ude.my/UC-91e3e0dd-4ddf-45b6-a1ee-dd927adab7b9/',
        title: 'The Ultimate C++ Beginner Course',
        provider: 'Udemy',
        providerLink: 'https://www.udemy.com/',
        date: 'July 17th, 2023'
    },
    {
        // 10 2
        image: 'images/cpp-training.jpg',
        altText: 'udemy-cpp-training',
        verification: 'https://ude.my/UC-62628490-e3ef-4958-961e-e17de057876e/',
        title: 'C++ Complete Training Course for C++ Beginners',
        provider: 'Udemy',
        providerLink: 'https://www.udemy.com/',
        date: 'July 19th, 2023'
    },
    {
        // 10 3
        image: 'images/java-beginner.jpg',
        altText: 'udemy-java-beginner',
        verification: 'https://ude.my/UC-c5d82376-c80d-4a5d-814f-b882e791be3a/',
        title: 'Java for Beginners - Learn all the Basics of Java',
        provider: 'Udemy',
        providerLink: 'https://www.udemy.com/',
        date: 'July 28th, 2023'
    },
    {
        // 10 4
        image: 'images/java-intro.jpg',
        altText: 'udemy-java-intro',
        verification: 'https://ude.my/UC-494ed70a-dc7e-46bf-ab2b-feb8700fb68c/',
        title: 'Introduction to Java Programming',
        provider: 'Udemy',
        providerLink: 'https://www.udemy.com/',
        date: 'July 28th, 2023'
    },
    {
        // 11 1
        image: 'images/python-oops.jpg',
        altText: 'udemy-python_OOPS',
        verification: 'https://ude.my/UC-cf8db7b7-c35d-4116-9580-15451e198adc/',
        title: 'Python: Object Oriented Programming',
        provider: 'Udemy',
        providerLink: 'https://www.udemy.com/',
        date: 'July 17th, 2023'
    },
    {
        // 11 2
        image: 'images/photoshop.jpg',
        altText: 'udemy-photoshop',
        verification: 'https://ude.my/UC-2733637d-fa30-4823-adb3-de88e429ceac/',
        title: 'Adobe Photoshop CC- Basic Photoshop training',
        provider: 'Udemy',
        providerLink: 'https://www.udemy.com/',
        date: 'September 14th, 2024'
    }



    
];