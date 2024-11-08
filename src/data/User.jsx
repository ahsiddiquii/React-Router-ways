const User = [
    {
        name: 'John Doe',
        age: 30,
        id: 1,
        position: "Software Engineer",
        about: "John is a highly skilled Software Engineer with over 8 years of experience in full-stack development. He specializes in building scalable web applications and has a deep understanding of JavaScript frameworks such as React and Node.js. John is passionate about writing clean, maintainable code and thrives in collaborative environments.",
        skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"],
        location: "New York, USA",
        imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
        name: 'Olivia Green',
        age: 29,
        id: 2,
        position: "Software Engineer",
        about: "Olivia is a skilled Software Engineer with a focus on mobile app development. She is proficient in both iOS and Android platforms and is passionate about creating seamless user experiences.",
        skills: ["Swift", "Kotlin", "React Native", "Java", "Firebase"],
        location: "Los Angeles, USA",
        imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
        name: 'Liam Wang',
        age: 32,
        id: 3,
        position: "Software Engineer",
        about: "Liam is a Software Engineer with experience in building cloud-based applications. He is knowledgeable in microservices architecture and enjoys solving complex problems.",
        skills: ["Java", "Spring Boot", "AWS", "Docker", "Kubernetes"],
        location: "Seattle, USA",
        imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
        name: 'Sophia Turner',
        age: 27,
        id: 4,
        position: "Software Engineer",
        about: "Sophia is a Software Engineer who specializes in back-end development. She is an advocate for clean coding practices and works primarily with Python and Django.",
        skills: ["Python", "Django", "REST APIs", "PostgreSQL", "Git"],
        location: "Austin, USA",
        imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        name: 'Ethan Hunt',
        age: 31,
        id: 5,
        position: "Software Engineer",
        about: "Ethan is a full-stack Software Engineer with a love for all things JavaScript. He enjoys building responsive web applications and has a knack for optimizing performance.",
        skills: ["JavaScript", "Node.js", "Express", "React", "MongoDB"],
        location: "Boston, USA",
        imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
        name: 'Jane Smith',
        age: 25,
        id: 6,
        position: "Machine Learning Engineer",
        about: "Jane is a talented Machine Learning Engineer who holds a Master's degree in Computer Science. With expertise in Python and various machine learning frameworks like TensorFlow and PyTorch, she excels at developing algorithms that improve data analysis and predictive modeling.",
        skills: ["Python", "TensorFlow", "PyTorch", "Data Analysis", "Machine Learning"],
        location: "San Francisco, USA",
        imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
        name: 'Sophia Turner',
        age: 28,
        id: 7,
        position: "Machine Learning Engineer",
        about: "Sophia is a driven Machine Learning Engineer specializing in natural language processing. She enjoys tackling complex problems and has experience with various NLP frameworks.",
        skills: ["Python", "NLTK", "Scikit-learn", "Deep Learning", "Machine Learning"],
        location: "Seattle, USA",
        imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
        name: 'Michael Brown',
        age: 34,
        id: 8,
        position: "Machine Learning Engineer",
        about: "Michael is a Machine Learning Engineer who focuses on predictive analytics. He has experience in developing scalable machine learning models and enjoys working with large datasets.",
        skills: ["Python", "R", "Machine Learning", "Data Visualization", "Big Data"],
        location: "New York, USA",
        imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
        name: 'Emily Davis',
        age: 26,
        id: 9,
        position: "Machine Learning Engineer",
        about: "Emily is a Machine Learning Engineer passionate about computer vision. She has developed algorithms for image recognition and object detection.",
        skills: ["Python", "OpenCV", "TensorFlow", "Machine Learning", "Data Processing"],
        location: "Chicago, USA",
        imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
        name: 'Alex Johnson',
        age: 28,
        id: 10,
        position: "Web Developer",
        about: "Alex is a creative Web Developer with 5 years of experience in front-end development. He has a keen eye for design and works with HTML, CSS, and JavaScript to create visually appealing and user-friendly websites.",
        skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX Design"],
        location: "Austin, USA",
        imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
        name: 'Isabella Martinez',
        age: 26,
        id: 11,
        position: "Web Developer",
        about: "Isabella is a talented Web Developer with experience in both front-end and back-end development. She enjoys creating responsive web applications and has expertise in various frameworks.",
        skills: ["React", "Node.js", "Express", "JavaScript", "CSS"],
        location: "Dallas, USA",
        imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    {
        name: 'Liam Brown',
        age: 29,
        id: 12,
        position: "Web Developer",
        about: "Liam is a passionate Web Developer who specializes in creating interactive web applications. He loves working with modern JavaScript frameworks and tools.",
        skills: ["JavaScript", "Vue.js", "HTML", "CSS", "Bootstrap"],
        location: "Miami, USA",
        imageUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
    {
        name: 'Mia Thompson',
        age: 30,
        id: 13,
        position: "Web Developer",
        about: "Mia is a dedicated Web Developer with experience in creating user-friendly websites. She has a strong background in responsive design and accessibility standards.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Accessibility"],
        location: "Boston, USA",
        imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
        name: 'Ethan Walker',
        age: 27,
        id: 14,
        position: "Web Developer",
        about: "Ethan is a Web Developer who focuses on performance optimization. He enjoys working on both the client and server sides of web applications.",
        skills: ["Node.js", "Express", "MongoDB", "JavaScript", "CSS"],
        location: "Austin, USA",
        imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
        name: 'Emily Watson',
        age: 22,
        id: 15,
        position: "Data Scientist",
        about: "Emily is an enthusiastic Data Scientist with a strong foundation in statistics and data analysis. She specializes in turning raw data into meaningful insights using R and Python.",
        skills: ["R", "Python", "SQL", "Data Visualization", "Machine Learning"],
        location: "Chicago, USA",
        imageUrl: 'https://randomuser.me/api/portraits/women/7.jpg',
    },
    {
        name: 'Daniel Garcia',
        age: 33,
        id: 16,
        position: "Data Scientist",
        about: "Daniel is a Data Scientist who excels in predictive modeling and data mining. He has experience with various machine learning algorithms and enjoys solving complex data problems.",
        skills: ["Python", "SQL", "Machine Learning", "Data Analysis", "Big Data"],
        location: "New York, USA",
        imageUrl: 'https://randomuser.me/api/portraits/men/8.jpg',
    },
    {
        name: 'Sophia White',
        age: 28,
        id: 17,
        position: "Data Scientist",
        about: "Sophia is a Data Scientist with expertise in machine learning and data visualization. She loves to turn complex datasets into actionable insights for businesses.",
        skills: ["Python", "Tableau", "Machine Learning", "Data Analysis", "Statistics"],
        location: "Los Angeles, USA",
        imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
    },
    {
        name: 'Benjamin Johnson',
        age: 35,
        id: 18,
        position: "Data Scientist",
        about: "Benjamin is a Data Scientist who specializes in time series analysis. He has experience working with large datasets and enjoys building predictive models.",
        skills: ["Python", "R", "Machine Learning", "SQL", "Time Series Analysis"],
        location: "Seattle, USA",
        imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
    {
        name: 'Ava Davis',
        age: 25,
        id: 19,
        position: "Data Scientist",
        about: "Ava is a junior Data Scientist with a strong passion for analytics. She has experience working on projects involving customer segmentation and forecasting.",
        skills: ["Python", "Excel", "SQL", "Data Visualization", "Machine Learning"],
        location: "Boston, USA",
        imageUrl: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
];



export default User;
