import profile from "./images/img.jpg";
import amazonIcon from "./images/amazon-simple.svg";
import stars from "./images/stars.mp4";

export function HomePage() {
  const goToAmazon = () => {
    window.location.href = "/amazon-clone/public/amazon.html";
  };

  return (
    <>
      <video autoPlay muted loop id="background-video">
        <source src={stars} type="video/mp4 " />
      </video>
      <header className="glass move">
        <a className="shine-links" href="#about">
          {" "}
          About
        </a>

        <a className="shine-links" href="#contact">
          {" "}
          Contact
        </a>

        <a className="shine-links" href="#projects">
          {" "}
          Projects
        </a>
      </header>
      <main>
        <div className="home gradient-wrapper">
          <div className="home-left glass move ">
            <div className="slide-down">
              <h1>Hi! </h1>
              <p className=" inline welcome-p ">
                I'm a Front-End Developer passionate about building interactive
                and responsive web applications.
              </p>
            </div>
            <p className="slide-down-2" >
              I specialize in JavaScript, HTML, CSS, React, and Tailwind, and I
              also have experience with backend technologies like Node.js,
              Express, MongoDB, MySQL, and deployment on platforms like Vercel
              and Render.
            </p>
          </div>
          <div className="home-right glass move">
            <img className="profile-photo" src={profile} alt="profile" />
          </div>
        </div>
        <div className="home-desc gradient-wrapper">
          <div id="about" className="home-left glass move">
            <h1>ABOUT</h1>
            <p>
              Hi! I’m Marcin, a Full-Stack Developer. I build responsive,
              interactive web applications from front-end to back-end. What I
              offer: Front-End: clean, intuitive UI with React, JavaScript,
              Tailwind CSS, HTML/CSS Back-End: robust APIs and database
              management with Node.js, Express, MongoDB, MySQL Deployment &
              Performance: scalable apps deployed on Vercel or Render
              Problem-Solving: creative, efficient solutions for real-world
              challenges I deliver complete applications, combining good design,
              functionality, and performance.
            </p>

            <p></p>
          </div>
          <div id="projects" className="home-right glass move">
            <h3>PROJECTS</h3>
            <button className="amazon-button" onClick={goToAmazon}>
              <img
                className="h-[2rem] inline"
                alt="amazon-icon"
                src={amazonIcon}
              />
            </button>
          </div>
        </div>
      </main>
      <footer>made by Marcin</footer>
    </>
  );
}
