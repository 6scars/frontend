import stars from "./images/stars.mp4";
import profile from "./images/img.jpg";
import amazonIcon from "./images/amazon-simple.svg";
import gitIcon from "./images/github-icon.svg";
import comet from "./images/comet.png";
import astronaut from "./images/astronaut.png";
import save from "./images/save.png"

export function HomePage() {
  const goToAmazon = () => {
    window.location.href = "/amazon-clone/public/amazon.html";
  };

  const goToGithub = () => {
    window.location.href = "https://github.com/6scars";
  };

  return (
    <>
      {/* Intro overlay */}
      <div className="intro flex items-center justify-center fixed inset-0 z-10">
        <p className="intro-text">Marcin Michon Dev</p>
      </div>

      {/* Background video */}
      <video autoPlay muted loop id="background-video" className="fixed inset-0 w-full h-full object-cover z-0">
        <source src={stars} type="video/mp4" />
      </video>

      {/* Header */}
      <header className="glass move flex justify-end items-center h-[2.9rem] w-full">
        {["About", "Contact", "Projects"].map((link) => (
          <a key={link} className="shine-links cursor-pointer flex items-center justify-center mx-4 min-w-[5rem] h-full transition-transform duration-300 ease-linear hover:scale-105">
            {link}
          </a>
        ))}
      </header>

      <main className="w-full">
        {/* Home section */}
        <div className="home gradient-wrapper flex flex-col md:flex-row gap-5 justify-center min-h-[95vh] p-3">
          {/* Left side */}
          <div className="home-left glass move flex-2 p-10 text-shadow-white/50 shadow-white/90">
            <div className="slide-down mb-10">
              <h1 className="text-[4rem] tracking-[0.2rem] font-bold">WELCOME!</h1>
              <p className="text-[2rem] inline">I'm Marcin</p>
              <p className="inline welcome-p">
                , a Full-Stack Developer<br />
                passionate about building interactive and responsive web<br />
                applications.
              </p>
            </div>

            <div className="devider border-b border-gray-800 shadow-[0_0_10px_20px_rgba(0,0,0,0.2)] w-full"></div>

            <p className="explication-specialize slide-down-2 text-2xl text-center mt-20 mb-10">SPECIALIZED</p>
            <p>I’m a Full-stack developer specializing in scalable web applications. I create clear, accessible interfaces, optimize performance, and help users reach their goals faster.</p>
            <div className="specialize flex flex-col md:flex-row justify-evenly gap-5 text-3xl">



            </div>
          </div>

          {/* Right side */}
          <div className="home-right flex-1 flex flex-col gap-5">
            {/* Profile image */}
            <div className="home-right-image glass move h-[50vh] shadow-[0_0_5px_1px_rgba(255,255,255,0.9)]">
              <img className="profile-photo w-full h-full object-cover" src={profile} alt="profile" />
            </div>

            {/* Contact */}
            <div className="home-right-contact glass move p-4 shadow-[0_0_5px_1px_rgba(255,255,255,0.9)]">
              <h2 className="slide-down">Contact & Social</h2>
              <a href="https://github.com/6scars" className="contact-link flex items-center gap-2 mt-2">
                <img className="h-10 w-10" src={gitIcon} alt="github" />
                <span>GITHUB</span>
              </a>
              <p className="mt-2">marcin.michon6@o2.pl</p>
            </div>
          </div>
        </div>

        {/*About*/}
        <div className="home-desc gradient-wrapper flex flex-col md:flex-row gap-5 w-full justify-center mt-10">
          <div id="about" className="home-left glass move2 flex-1 p-6">
            <h2 className="slide-down text-3xl font-bold mb-4">ABOUT</h2>
            <div className="flex gap-10 items-center">
              <p>I combine clean design with robust engineering — I craft interfaces that not only look good but are fast, accessible, and easy to use.</p>
              <img alt="comet" src={comet} className="w-[10rem] h-[5rem]" />
            </div>

            {/* Frontend */}
            <div className=" shadow-[0_0_50px_20px_rgba(0,0,0,0.55)] bg-black/67 border-3 rounded-[8%] border-black/90 p-6">

              <div className="devider border-b border-gray-800 w-full mb-2"></div>
              <div className="flex gap-10  items-center">
                <img alt="astronaut" src={astronaut} className="w-[10rem] h-[10rem]" />
                <p>I follow a user-centered process: understand the users and business goals, create prototypes, iterate with feedback, and deliver stable deployments. </p>
              </div>

            </div>
            {/* Backend */}
            <div className="shadow-[0_0_50px_20px_rgba(0,0,0,0.55)] bg-black/67 border-3 rounded-[8%] border-black/90 p-6">
              <div className="devider border-b border-gray-800 w-full mb-2"></div>
              <div className="flex gap-10 items-center">
                <p>I value maintainable code: modular components, clear documentation, and automated tests help teams ship features faster and with fewer regressions. I’m open to full-time roles or freelance collaborations where I can impact product quality and user experience.</p>
                <img alt="save" src={save} className="w-[10rem] h-[10rem]" />
              </div>

            </div>


          </div>

        </div>

        {/* Technical & Projects */}
        <div className="home-desc gradient-wrapper flex flex-col md:flex-row gap-5 w-full justify-center mt-10">
          {/* Technical */}
          <div id="about" className="home-left glass move2 flex-1 p-6">
            <h2 className="slide-down text-3xl font-bold mb-4">Technical</h2>
            <p className="text-[1.3rem] pt-4">
              I build <i>responsive, interactive</i> web applications from front-end to back-end.
              <br /><u>With The Help Of</u>
            </p>

            {/*Frontend And Backend*/}
            <div className="flex justify-evenly">
              {/* Frontend */}
              <div className="specialize-frontend shadow-[0_0_50px_20px_rgba(0,0,0,0.55)] bg-black/67 border-3 rounded-[8%] border-black/90 p-6">
                <p className="specialize-frontend-title text-xl font-semibold mb-2">FRONT END</p>
                <div className="devider border-b border-gray-800 w-full mb-2"></div>
                <ul className="list-disc list-inside text-left space-y-2">
                  {["JavaScript", "HTML", "React", "Tailwind"].map((tech) => (
                    <li key={tech} className="text-2xl leading-[3.5rem]">{tech}</li>
                  ))}
                </ul>
              </div>
              {/* Backend */}
              <div className="specialize-frontend shadow-[0_0_50px_20px_rgba(0,0,0,0.55)] bg-black/67 border-3 rounded-[8%] border-black/90 p-6">
                <p className="specialize-frontend-title text-xl font-semibold mb-2">BACK END</p>
                <div className="devider border-b border-gray-800 w-full mb-2"></div>
                <ul className="list-disc list-inside text-left space-y-2">
                  {["Node.js", "Express", "MongoDB", "MySQL"].map((tech) => (
                    <li key={tech} className="text-2xl leading-[3.5rem]">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-[1.5rem] pt-4">
              I have <u>experience</u> with <b>deploying</b> <i>scalable</i> apps on <i>Vercel or Render</i> and delivering <i>creative, efficient</i> solutions.
            </p>
          </div>a

          {/* Projects */}
          <div id="projects" className="home-right glass move2 flex-1 p-6 flex flex-col items-start gap-4">
            <h2 className="slide-down">Projects </h2>
            <button className="amazon-button flex items-center gap-2 p-2 rounded-md border-1" onClick={goToAmazon}>
              <img className="h-8 w-8" alt="amazon-icon" src={amazonIcon} />
              <span>Amazon Clone</span>
            </button>
          </div>
        </div>
      </main>

      <footer className="text-center py-4">made by Marcin</footer>
    </>
  );
}
