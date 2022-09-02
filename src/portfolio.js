/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

// import { HttpLink } from "apollo-boost";
import emoji from "react-easy-emoji";

const illustration = {
    animated: false // set to false to use static SVG
};

const greeting = {
    username: "Raihan-js",
    title: "Hi! I'm Raihan",
    subTitle: emoji(
        "A passionate Web Developer from Dhaka, Bangladesh having an experience of designing and building functional websites with WordPress and Web applications with React, Laravel and some other cool libraries and frameworks."
    ),
    resumeLink: "https://drive.google.com/file/d/1_a76Aou-ykUlR6QoOmfvcbPkk700HiMF/view?usp=sharing",
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media 

const socialMediaLinks = {
    github: "https://github.com/raihan-js",
    linkedin: "https://www.linkedin.com/in/raihan-js/",
    gmail: "araihansikder@gmail.com",
    facebook: "https://www.facebook.com/raihanl2",
    //medium: "https://medium.com/@davidrakosi",
    //stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
    // instagram: 'https://www.instagram.com/ryanscript.me/',
    //twitter: 'https://twitter.com/davidrakosi_',
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "ASPIRING FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji(
            "⚡ Develop highly functional websites & Web Applications"
        ),
        emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
        emoji(
            "⚡ Integration of third party services such as Firebase / Digital Ocean"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "WordPress",
            fontAwesomeClassname: "fab fa-wordpress"
        },
        {
            skillName: "Elementor",
            fontAwesomeClassname: "fab fa-elementor"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "PHP",
            fontAwesomeClassname: "fab fa-php"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "laravel",
            fontAwesomeClassname: "fab fa-laravel"
        },
        {
            skillName: "firebase",
            fontAwesomeClassname: "fas fa-fire"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: false, // Set false to hide this section, defaults to true
    schools: [{
            schoolName: "Harvard University",
            logo: require("./assets/images/harvardLogo.png"),
            subHeader: "CS50 - Computer Science",
            duration: "September 2019 - April 2020",
            desc: "Participated in the course of CS50 and completed 3 projects.",
            //descBullets: [
            //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            //]
        },
        {
            schoolName: "State University of Bangladesh",
            logo: require("./assets/images/sublogo.jpg"),
            subHeader: "Bachelor of Science in Computer Science",
            duration: "September 2015 - April 2019",
            // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
            //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [{
            Stack: "Frontend / Design", //Insert stack or technology you have experience in
            progressPercentage: "95%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "75%"
        },
        {
            Stack: "Programming",
            progressPercentage: "70%"
        }
    ],
    displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [{
            role: "WordPress & PHP/Laravel Developer",
            company: "Fiverr",
            companylogo: require("./assets/images/fiverrLogo.png"),
            date: "September 2020 – Present",
            desc: "Level 2 Seller",
            descBullets: [
                "Custom building websites and web apps",
                "Technical support",
                "Creating documentation & tutorials"

            ],

        },
        {
            role: "WordPress Developer",
            company: "GNatural Products",
            companylogo: require("./assets/images/gnatural.png"),
            date: "July 2021 – December 2021",
            desc: "An ecommerce platform built with WooCommerce",
        },
        {
            role: "English Tutor (Online)",
            company: "ENGOO Tutors",
            companylogo: require("./assets/images/engoo.jpg"),
            date: "November 2018 – present",
            desc: "I've conducted online English lessons and recruited Teachers around the world"
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "raihan-js", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Works",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR WEBSITES",
    projects: [{
            image: require("./assets/images/alisarLogo.png"),
            projectName: "Alisar Vodka",
            projectDesc: "An eCommerce Website built on WordPress",
            footerLink: [{
                    name: "Visit Website",
                    url: "http://alisarvodka.com/"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/tbok.png"),
            projectName: "TBoK",
            projectDesc: "An eCommerce website with consultation",
            footerLink: [{
                name: "Visit Website",
                url: "http://tbokconsulting.com/"
            }]
        },
        {
            image: require("./assets/images/gnat.png"),
            projectName: "GNatural",
            projectDesc: "A herbal products ecommerce website",
            footerLink: [{
                name: "Visit Website",
                url: "https://gnatural.net"
            }]
        },
        {
            image: require("./assets/images/alextv.png"),
            projectName: "Alex TV",
            projectDesc: "An Streaming Website",
            footerLink: [{
                name: "Visit Website",
                url: "http://alextvstudio.com/"
            }]
        },
        {
            image: require("./assets/images/gss.png"),
            projectName: "God Said Stay",
            projectDesc: "A marriage counselling community website",
            footerLink: [{
                name: "Visit Website",
                url: "http://godsaidstay.com/"
            }]
        },
        {
            image: require("./assets/images/ag.png"),
            projectName: "AGNutrition UK",
            projectDesc: "An ecommerce website",
            footerLink: [{
                name: "Visit Website",
                url: "http://agnutritionuk.com/"
            }]
        },
        {
            image: require("./assets/images/pps.png"),
            projectName: "Proactive Payment Solution",
            projectDesc: "Business Portfolio",
            footerLink: [{
                name: "Visit Website",
                url: "http://proactivepaymentsolution.com/"
            }]
        },
        {
            image: require("./assets/images/se.png"),
            projectName: "Safety Edge",
            projectDesc: "Safety equipment event website",
            footerLink: [{
                name: "Visit Website",
                url: "https://www.safetyedgetraining.com.au/"
            }]
        },
        {
            image: require("./assets/images/naivera.png"),
            projectName: "Naivera",
            projectDesc: "Asset Listing and Management website",
            footerLink: [{
                name: "Visit Website",
                url: "https://naiverah.com/"
            }]
        },
        {
            image: require("./assets/images/canwood.png"),
            projectName: "CanWood",
            projectDesc: "Canada Migration consulting agency",
            footerLink: [{
                name: "Visit Website",
                url: "https://canwoodcanada.com/"
            }]
        },
        {
            image: require("./assets/images/sainted.png"),
            projectName: "The Sainted Trilogy",
            projectDesc: "Book Author - Michael Medico",
            footerLink: [{
                name: "Visit Website",
                url: "https://thesaintedtrilogy.net/"
            }]
        },
        {
            image: require("./assets/images/brown.png"),
            projectName: "Brown Girl Health Care",
            projectDesc: "Blog and Podcast",
            footerLink: [{
                name: "Visit Website",
                url: "https://browngirlhealthcare.com/"
            }]
        },
        {
            image: require("./assets/images/pbp.png"),
            projectName: "Premier Business Partners",
            projectDesc: "Business Consultation Agency",
            footerLink: [{
                name: "Visit Website",
                url: "https://pbpwin.com/"
            }]
        },
        {
            image: require("./assets/images/mood.png"),
            projectName: "Moodbooster",
            projectDesc: "Scented candle store from Germany",
            footerLink: [{
                name: "Visit Website",
                url: "https://moodbooster.de/en/"
            }]
        },
        {
            image: require("./assets/images/fruitdorp.png"),
            projectName: "FruitDorp",
            projectDesc: "Fruit and Veggies export agency",
            footerLink: [{
                name: "Visit Website",
                url: "https://fruitdorp.nl"
            }]
        },
        {
            image: require("./assets/images/retire.png"),
            projectName: "Retirement2020",
            projectDesc: "Retirement Advisors agency",
            footerLink: [{
                name: "Visit Website",
                url: "https://retirement2020.ca/"
            }]
        },
        {
            image: require("./assets/images/bio.png"),
            projectName: "BioSoul Integration",
            projectDesc: "Chiropractor Consultancy",
            footerLink: [{
                name: "Visit Website",
                url: "https://www.biosoulintegration.com/"
            }]
        },
        {
            image: require("./assets/images/uni.png"),
            projectName: "Unicorn Strength",
            projectDesc: "Agency for your branding strategy",
            footerLink: [{
                name: "Visit Website",
                url: "https://unicorn-strength.com/"
            }]
        }
        

    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [{
            title: "Full Stack JavaScript - Treehouse",
            subtitle: "I have learnt to build interactive websites and powerful web applications with the most popular full stack programming language. Completed 10 projects within 3 months of bootcamp",
            image: require("./assets/images/treehouse.png"),
            footerLink: [{
                    name: "Certification",
                    url: "https://teamtreehouse.com/akteruzzamansikder"
                },
                
            ]
        },
        {
            title: "React - Frontend Masters",
            subtitle: "I've completed React core coursework from Frontend Masters. React makes it painless to create interactive UIs. Design simple views for each state in your application.",
            image: require("./assets/images/frontendMasters.png"),
            footerLink: [],
        },

        {
            title: "Data Engineering - Datacamp",
            subtitle: "Completed Certifcation from Datacamp on data engineering. I have a acquired the aspect of data science that focuses on practical applications of data collection and analysis.",
            image: require("./assets/images/datacamp.png"),
            footerLink: [],
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

    blogs: [{
            url: "https://www.fiverr.com/ryandevv/wordpress-responsive-website-design-business-ecommerce",
            title: "Hire me right now for your business or startup website",
            description: "Do you want to have your website built within a week? Need help with WordPress or any other projects? ",
            footerLink: [{
                    name: "Hire Me!",
                    url: "https://www.fiverr.com/ryandevv/wordpress-responsive-website-design-business-ecommerce"
                },
                {
                    name: "WordPress Projects",
                    url: "https://www.fiverr.com/ryandevv/wordpress-responsive-website-design-business-ecommerce"
                },
            ]
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        ""
    ),

    talks: [{
        title: "How to be a Web Developer in 2021",
        subtitle: "Work on Marketplaces",
        slides_url: "#",
        event_url: "#"
    }],
    display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://ryanscript.me"
    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+88 018 3564 8498",
    email_address: "araihansikder@gmail.com",
};

// Twitter Section

const twitterDetails = {
    userName: "ryandevv_", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
};

export {
    illustration,
    greeting,
    socialMediaLinks,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails
};
