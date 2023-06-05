import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/react-block.gif";
import projImg2 from "../assets/img/movie-app.gif";
import projImg3 from "../assets/img/fireblog.gif";
import projImg4 from "../assets/img/django-blog-app.gif";
import projImg5 from "../assets/img/API.png";
import projImg6 from "../assets/img/movie_seat_booking.gif";
import projImg7 from "../assets/img/calcolator.gif";
import projImg8 from "../assets/img/randomuser.gif";
import projImg9 from "../assets/img/touplaces.gif";
import projImg10 from "../assets/img/todo.gif";
import projImg11 from "../assets/img/summarize.gif";
import projImg12 from "../assets/img/northwind-redux.gif"

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png";



export const Projects = () => {

  const projects = [
    {
      title: "Blog App with React & Firebase",
      description: "Users can register and log in and write, update, and search a blog",
      imgUrl: projImg1,
    },
    {
      title: "Movie App with React & Firebase",
      description: "Display cinema posters by using the Tmdb API. There is a search feature according to the entered word.",
      imgUrl: projImg2,
    },
    {
      title: "Blog-App",
      description: "Users can search recipes by using the Edamam API and can see the details.",
      imgUrl: projImg3,
    },
    {
      title: "ToDo App",
      description: "To-do app coded with Redux.js, Reduxthunks, selectors, and styled components.",
      imgUrl: projImg10,
    },
    {
      title: "Tour App",
      description: "Developed using React and deployed to Netlify",
      imgUrl: projImg9,
    },
    {
      title: "Summarize with React-redux & Rapid App Cpt-4",
      description: "the Users can extract a text summary", 
      imgUrl: projImg11,
    },
    {
      title: "Northwind with React-redux & json App",
      description: "creating user product information Update deleting adding", 
      imgUrl: projImg12,
    },
  ];

  const projects2 = [
    {
      title: "Django Blog App",
      description: "Blogs can be created, updated, deleted, liked and commented on by users. Basic auth functionality can be used like login, change password, forget password. Also, users can only perform update functionality on their blogs.Each user has their own profile page.",
      imgUrl: projImg4,
    },
    {
      title: "Movie Ticket App",
      description: "In this project, it is aimed to create an application for a website that sells online event tickets. Users can view the events, view the available seats for the event they have selected, claim what they want among them and see the amount they will pay. Skills/Tools : Json, Local Storage and Array Methods",
      imgUrl: projImg6,
    },
    {
      title: "IOS Calculator",
      description: "In this project, the goal is to make a functional and visual clone of the calculator of an iOS device. Skills/Tools : HTML, CSS Frameworks, JS Dom Manipulation and Event Listeners.",
      imgUrl: projImg7,

    },
    {
      title: "Random User App",
      description: "",
      imgUrl: projImg8,

    }
  ]

    const projects3 = [
      {
        title: "DRF Blog API",
        description: " In this project, it is aimed to create a more complex database structure. Users can create, update, delete, read like and leave a comment on blogs.  Basic auth functionality can be used like login, change password, forget password. Also, users can only perform update functionality on their blogs.",
        imgUrl: projImg5,
      },
      {
        title: "DRF Quiz API",
        description: "Quiz application with Restframework that allows user to register / login / logout, view quizzes and questions and CRUD quizzes and questions(stuff only).",
        imgUrl: projImg5,
      },
    ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "": ""}>
                <h2>Projects</h2>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">React</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Frontend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Backend</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>● Requesting apis using Async, Await and Fetch structures to view data from various platforms<br></br>
  ● Working with React-router, bootstrap and axios libraries for user-friendly preparation of prepared websites <br></br>
● Combined Material UI and Semantic UI libraries to achieve better UI experience <br></br>
● State management applied using React States and Redux </p>

                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>● Developed interactive, responsive and scalable frontend using HTML5, CSS3, JavaScript ES6
                        <br></br>
                        ●Designing a website with HTML, CSS, SASS(SCSS) and Bootstrap-5 codes
                        <br></br>
                        ● Support HTML and CSS projects using JS Dom manipulation and event listeners
                        <br></br>
                        ● Enabling customers to make transactions on their websites using json, local storage, and array methods
                        </p>
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>●Developed backend applications with Django and PostgreSql
                        <br></br>
                        ●Built a Dashboard page showing data related to users integrated with Database <br></br>

                        ●Performing CRUD operations using Django forms
                        
                       </p>
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="ImageRight" />
      <img className="background-image-left" src={colorSharp} alt="ImageLeft" />
    </section>
  )
}