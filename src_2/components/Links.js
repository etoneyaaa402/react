import React from "react";
import "./Links.css";
//links
let frontEndLinks = [
    ["What Is a Front-End Developer?", "https://frontendmasters.com/guides/front-end-handbook/2018/what-is-a-FD.html"],
    ["How TO - Become a Front-End Developer", "https://www.w3schools.com/howto/howto_blog_become_frontenddev.asp"],
    ["What Does a Front-End Developer Do?", "https://www.coursera.org/articles/front-end-developer"],
    ["Redux", "https://redux.js.org/"],
    ["The 40 Best JavaScript Libraries and Frameworks for 2023?", "https://kinsta.com/blog/javascript-libraries/"],
    ["18 Advanced CSS Tricks And Techniques ", "https://www.lambdatest.com/blog/advanced-css-tricks-and-techniques/"],
    ["React docs", "https://reactjs.org/"],
];
let backEndLinks = [
    ["8 Best Backend Development Frameworks for Web Development", "https://medium.com/backenders-club/8-best-backend-development-frameworks-for-web-development-e755452db917"],
    ["Jasmine Unit Testing Tutorial: A Comprehensive Guide", "https://medium.com/backenders-club/jasmine-unit-testing-tutorial-a-comprehensive-guide-64f3b7105ba6"],
    ["Top 10 Java Development Tools You Should Be Using in 2023", "https://medium.com/backenders-club/top-10-java-development-tools-you-should-be-using-in-2023-2ab779336beb"],
    ["React Native vs. Flutter: Which is Better for Your Project in 2023?", "https://medium.com/backenders-club/react-native-vs-flutter-which-is-better-for-your-project-in-2023-745a2c0c815e"],
    ["NodeJS vs ExpressJS — Choose #1 Backend Technology", "https://medium.com/backenders-club/nodejs-vs-expressjs-9b7ba7a174e2"],
    ["Palindrome Program in Python", "https://medium.com/backenders-club/palindrome-program-in-python-acb80705038f"],
    ["API Design Best Practices: A deep-dive (2022)", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],

];
let fullStackLinks = [
    ["Different ways to do versioning of REST APIs in Spring Boot", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["The Real Benefits of Java Lambdas", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["Classes in Javascript vs Java", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["Different ways to call REST APIs in Spring Boot without additional libraries", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["How to implement Aspect Oriented Programming in Spring Boot?", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["Variables – Java vs Javascript", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["Java vs Javascript – Say Hello World!", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
];
let designLinks = [
    ["What’s the difference between UX and UI design?", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["7 steps to become a UI/UX designer", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["Master the basics of visual: how to become a self-taught UI/UX designer", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["How I became a UI/UX Designer with no prior experience", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["How to find your niche as a UI/UX designer", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["Starting your career as a UI/UX designer", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["How to be a self-taught UI / UX Designer", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
];
let markupLinks = [
    ["How to position content in the center with CSS", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["How to fix an element’s position in CSS", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["How to fit images to the page in CSS", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    [" How to edit styles on a single page in CSS", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["How to consolidate styling in CSS", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["Visited link styling in CSS", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
    ["Hovering effect delays in CSS", "https://medium.com/backenders-club/api-design-best-practices-a-deep-dive-2022-ec5a19dc27cc"],
];
let professions = [
    ["Front-end developer", frontEndLinks],
    ["Back-end developer", backEndLinks],
    ["Full stack developer", fullStackLinks],
    ["UX/UI Designer", designLinks],
    ["Markup specialist", markupLinks],
];

class Links extends React.Component {
    constructor(props) {
        super(props);
        this.state = { profession: ""};
        
    }

    showLinks() {

        for (let profession of professions) { //перебираем массив профессий
            if (profession[0] === this.props.profession) { //если первая профессия соответствует текущей
                let links = profession[1]; //создаем массив для вывода ссылок
                return links.map(link => 
                    <div>
                        <a className="jobmenu__link" href={link[1]} target="_blank">
                            {link[0]} 
                        </a> 
                    </div> //возвращает link[0] название ссылки link[1] сама реальная ссылка
                )
            }
        }

    }
    render() {
        return (
            <div className="jobmenu">
                <h2 className="h2">Полезные ссылки:</h2>
                <h3 className="jobmenu__heading">{this.props.profession}</h3>
                <div className="jobmenu__links">
                    {this.showLinks()}
                </div>
            </div>
        );
    }
}
export default Links;