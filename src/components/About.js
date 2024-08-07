import React from "react";
import aboutMeJson from "../content.json";
import { Fade } from "react-awesome-reveal";

/* ==========================================
*   JSON Template Example
*  ==========================================

  "about_me": {
    "section": {
      "enable_section": true,
      "title": "~/About",
      "navbar_name": "/About",
      "description": "Brief information about me and some of my interests."
    },


    * "enable_section": <true or false> to enable/disable section
    * "title": "Is what is displayed on the h3 tag to distinguish the section"
    * "navbar_name": "Is what is displayed on the navbar"
    * "description": "subtitle below the title element to distinguish the section"


    "headShotUrl": "../assets/portrait.png",
    "bio": [
      "I am currently studying computer science at St. Mary's University with a focus in computer science with a minor in mathematics. Recently, I was an undergrad research intern at the McNair Research Program of STMU, a Post-Baccalaureate Achievement Program. Some of my current goals are to build experience and to acquire meaningful connections for personal development.",
      "I have a profound interest in numerous types of software development such as machine learning, operating systems, and especially in full-stack development. I'm a huge desk setup and PC enthusiast. In my free time, I enjoy playing/analyzing chess games, online window shopping, thrifting, and playing Minecraft multiplayer servers."
    ],
    "skills_caption": "Some technologies I've worked with:",
    "skills": [
      "JavaScript ES6+",
      "React.js",
      "Node.js",
      "HTML & CSS",
      "Python 3",
      "Ubuntu LTS & Git"
    ]
  },

    * "headShotUrl": "link to your portrait/headshot"
    * "bio": ["bio paragraph 1", "bio paragraph 2"]
    * "skills_caption": "Skills caption"
    * "skills": ["Language 1", "Language 2", "Language 3", ...]

*/

const AboutMe = () => {
  const aboutMe = aboutMeJson.about_me;

  const firstHalf = aboutMe.skills.slice(0, aboutMe.skills.length / 2);
  const secondHalf = aboutMe.skills.slice(aboutMe.skills.length / 2);

  return (
    <Fade triggerOnce={true}>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
                <h3 className="title-a" id="aboutme">
                  {aboutMe.section.title} <div className="line-mf"></div>
                </h3>
                <p className="subtitle-a">{aboutMe.section.description}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-md-6">
                  {aboutMe.bio.map((paragraph, index) => (
                    <Fade
                      delay={index * 100}
                      cascade={false}
                      triggerOnce={true}
                    >
                      <p className="about-me-desc" key={index}>
                        {paragraph}
                      </p>
                    </Fade>
                  ))}
                  <p className="about-me-desc">{aboutMe.skills_caption}</p>
                  <div className="languages-list">
                    <ul>
                      <h3 className="title-a">Skills</h3>
                      <ul>
                        <li className="bg-snow shadow-md border-2 border-black rounded-xl p-3 flex justify- items-center">
                          <span data-tooltip="Javascript">
                            <img 
                              src="/assets/icons/js.svg"
                              alt="Javascript logo"
                            />
                          </span>
                          <span data-tooltip="Typescript">
                            <img
                              src="/assets/icons/ts.svg"
                              alt="Typescript logo"
                            />
                          </span>
                          <span data-tooltip="Python">
                            <img
                              src="/assets/icons/python.svg"
                              alt="Python logo"
                            />
                          </span>
                          <span data-tooltip="Java">
                            <img
                              src="/assets/icons/java.svg"
                              alt="Java logo"
                            />
                          </span>
                          <span data-tooltip="C/C++">
                            <img
                              src="/assets/icons/c.svg"
                              alt="C/C++ logo"
                            />
                          </span>
                          <span data-tooltip="React">
                            <img
                              src="/assets/icons/react.svg"
                              alt="React logo"
                            />
                          </span>
                          <span data-tooltip="Next.js">
                            <img
                              src="/assets/icons/next.svg"
                              alt="Next.js logo"
                            />
                          </span>
                          <span data-tooltip="MySQL">
                            <img
                              src="/assets/icons/mysql.svg"
                              alt="MySQL logo"
                            />
                          </span>
                          <span data-tooltip="MongoDB">
                            <img
                              src="/assets/icons/mongodb.svg"
                              alt="MongoDB logo"
                            />
                          </span>
                          <span data-tooltip="Git">
                            <img
                              src="/assets/icons/git.svg"
                              alt="Git logo"
                            />
                          </span>
                          <span data-tooltip="AWS">
                            <img
                              src="/assets/icons/aws.svg"
                              alt="AWS logo"
                            />
                          </span>
                          <span data-tooltip="Docker">
                            <img
                              src="/assets/icons/docker.svg"
                              alt="Docker logo"
                            />
                          </span>
                        </li>
                      </ul>
                      {firstHalf.map((skill, index) => (
                        <Fade
                          delay={index * 200}
                          cascade={false}
                          triggerOnce={true}
                        >
                          <li key={index}>{skill}</li>
                        </Fade>
                      ))}
                    </ul>
                    <ul>
                      {secondHalf.map((skill, index) => (
                        <Fade
                          delay={index * 200}
                          cascade={false}
                          triggerOnce={true}
                        >
                          <li key={index}>{skill}</li>
                        </Fade>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <Fade direction="up" triggerOnce={true}>
                    <a
                      href={aboutMe.headShotUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="col-6-img-a"
                    >
                      <img
                        src={aboutMe.headShotUrl}
                        alt=""
                        className="myportrait"
                      ></img>
                    </a>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default AboutMe;
