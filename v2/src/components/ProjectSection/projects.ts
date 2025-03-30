import youtube from "../../assets/Youtube.png";
import vacaybuddy from "../../assets/Vacay.png";
import news from "../../assets/News.png";
import music from "../../assets/music.png";
import ipl from "../../assets/IPL.png";
import employee from "../../assets/Employee.png";
import cancer from "../../assets/cancer.png";
import { Project } from "../../types";

export const projects: Project[] = [
  {
    imgPath: youtube,
    title: "Unveiling Trends: A Cloud-Driven Data",
    description:
      "The project extracted insights from YouTube data to identify emerging video categories and audience for demographics, helping optimize online video strategies and empower businesses and content creators to make informed decisions.",
    ghLink: "https://github.com/prachi1211/ECC",
  },
  {
    imgPath: vacaybuddy,
    title: "Flight Booking System-VacayBuddy",
    description:
      "Developed a user platform for flight booking, itinerary management, search, and recommendations. The system suggested 5 similar places based on user searches or itinerary additions, with data cached for future recommendations.",
    ghLink: "https://github.com/juyee1698/VacayBuddy-backend",
  },
  {
    imgPath: ipl,
    title: "IPL Score Prediction (IBM top in Hack Challenge)",
    description:
      "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview. Both the editor supports auto save of work using Local Storage.",
    ghLink: "https://github.com/prachi1211/IPL_Score_Prediction",
  },
  {
    imgPath: employee,
    title: "Employee Management System",
    description:
      "Developed a web-based employee management system that allows users to add, update, and delete employee records along with job recommendation based on profile. The system also provides a search feature to find employees by name, department, or job title.",
    ghLink: "https://github.com/prachi1211/Employee-Management-System",
  },
  {
    imgPath: news,
    title: "News Article Summarisation",
    description:
      "An article summarization tool has been developed based on abstractive analysis, which ranks articles to identify the best matches. A web application has been created that generates summaries upon article upload.",
    ghLink: "https://github.com/prachi1211/News-Article-Summarisation",
  },
  {
    imgPath: cancer,
    title: "Breast Cancer Detection",
    description:
      "Image data analysis was performed using processing techniques to enhance detection accuracy in distinguishing between benign and malignant tumors. A deep learning model, specifically Inception v3, was implemented to extract features and classify tumor spots based on a defined threshold after image cleaning.",
    ghLink: "https://github.com/prachi1211/Breast-Cancer-Detection",
  },
  {
    imgPath: music,
    title: "Music Recommendation System",
    description:
      "Developed a recommendation system that suggests options based on the nearest match, using preferences from users with similar tastes to provide personalized suggestions.",
    ghLink: "https://github.com/prachi1211/Music-Recommendation-System",
  },
];
