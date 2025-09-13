import profile from "./images/img.jpg";
import amazonIcon from "./images/amazon-simple.svg";
import gitIcon from "./images/github-icon.svg";
import stars from "./images/stars.mp4";

export function HomePage() {
  const goToAmazon = () => {
    window.location.href = "/amazon-clone/public/amazon.html";
  };

  const goToGithub = () => {
    window.location.href = "https://github.com/6scars";
  };

  return (
    <>
      <div className="intro">
        <p className="intro-text">Marcin Michon Dev</p>
      </div>
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
            <div className="slide-down mb-10">
              <h1 className=" text-[3.2rem] tracking-[0.2rem]">WELCOME!</h1>
              <br />
              I'm
              <h1 className=" inline text-[2rem]"> Marcin</h1>
              <p className=" inline welcome-p ">
                , a Full-Stack Developer
                <br />
                Developer passionate about building interactive and responsive
                web
                <br />
                applications.
              </p>
            </div>

            <div className="devider  border-b-1 border-gray-800 w-full shadow-[0_0_10px_20px_rgba(0,0,0,0.20)]"></div>
            <p className="slide-down-2 explication-specialize"> SPECIALIZED </p>
            <div className="specialize flex justify-evenly h-auto text-3xl    ">
              <div className=" specialize-frontend shadow-[0_0_50px_20px_rgba(0,0,0,0.55)] bg-black/67 border-3 rounded-[8%] border-black/90 pl-[2rem] pr-[2rem] pt-[1.5rem] pb-[1.5rem]">
                <p className="specialize-frontend-title">FRONT END</p>
                <div className="devider border-b-1 border-gray-800 w-full"></div>
                <ul className="list-disc list-inside text-left ">
                  <li className="text-2xl leading-[3.5rem] ">JavaScript</li>
                  <li className="text-2xl leading-[4rem]">HTML</li>
                  <li className="text-2xl leading-[4rem]">React</li>
                  <li className="text-2xl leading-[4rem]">Tailwind</li>
                </ul>
              </div>

              <div className=" specialize-frontend shadow-[0_0_50px_20px_rgba(0,0,0,0.55)] bg-black/67 border-3 rounded-[8%] border-black/90 pl-[2rem] pr-[2rem] pt-[1.5rem] pb-[1.5rem]">
                <p className="specialize-frontend-title">BACK END</p>
                <div className="devider border-b-1 border-gray-800 w-full"></div>
                <ul className="list-disc list-inside text-left ">
                  <li className="text-2xl leading-[3.5rem] ">Node.js</li>
                  <li className="text-2xl leading-[4rem]">Express</li>
                  <li className="text-2xl leading-[4rem]">MongoDB</li>
                  <li className="text-2xl leading-[4rem]">MySQL</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="home-right">
            <div className="home-right-image glass move">
              <img className="profile-photo" src={profile} alt="profile" />
            </div>
            <div className="home-right-contact glass move">
              <h1 class="slide-down block">Contact</h1>
              <h1 class="slide-down  block"> & Social</h1>
              <a href="https://github.com/6scars">
                <div className="contact-link github-link">
                  <img
                    className="h-10 w-10 inline"
                    src={gitIcon}
                    alt="github"
                  />
                  <p className="inline ">GITHUB</p>
                </div>
              </a>
              <p>marcin.michon6@o2.pl</p>
            </div>
          </div>
        </div>
        <div className="home-desc gradient-wrapper">
          <div id="about" className="home-left glass move">
            <h1 class="slide-down text-[3rem] ">ABOUT</h1>
            <p className="slide-down-2">
              <p className="text-[1.3rem]  pt-10">
                I build <i>responsive, interactive</i> web applications from
                front-end to back-end.
                <div>
                  <u>What I offer:</u> <i>clean, intuitive</i> UI with
                </div>
              </p>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
                <li>HTML/CSS</li>
              </ul>

              <p className="text-[1.2rem] pt-10">
                Robust APIs and database management with
              </p>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>MySQL Deployment</li>
              </ul>
              <p className="pt-10">
                <p className=" text-[1.5rem] mb-5">
                  I Have <u>experience</u> with <b>deploying</b>
                  <br /> <i>scalable</i> apps on <i>Vercel or Render </i>
                  <i>creative, efficient</i> solutions for real-world challenges
                </p>
                <p className="text-[1.5rem] ">
                  I deliver complete applications
                  <br /> combining <b>good</b> design,
                  <i>functionality, and performance.</i>
                </p>
              </p>
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
