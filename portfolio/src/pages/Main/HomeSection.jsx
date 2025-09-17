import profile from "../images/img.jpg";
import gitIcon from "../images/github-icon.svg";
import { Footer } from "../Footer";

export function HomeSection() {
  return (
    <>
      <div className="home gradient-wrapper flex flex-col md:flex-row gap-5 justify-center min-h-screen p-3">
        {/* Left side */}
        <div className="home-left glass move flex-2 p-10 text-shadow-white/50 shadow-white/90">
          <div className="slide-down mb-10">
            <h1
              className="text-[4rem] tracking-[0.2rem] font-bold 
                        max-[523px]:text-[3rem] max-[423px]:text-[2.2rem]"
            >
              WELCOME!
            </h1>
            <p
              className="text-[2rem] inline 
                        max-[523px]:text-[1.2rem] max-[423px]:text-[1rem]"
            >
              I'm Marcin
            </p>
            <p
              className="inline welcome-p 
                        max-[523px]:text-[1rem]"
            >
              , a Full-Stack Developer
              <br />
              passionate about building interactive and responsive web
              <br />
              applications.
            </p>
          </div>

          <div className="devider border-b border-gray-800 shadow-[0_0_10px_20px_rgba(0,0,0,0.2)] w-full"></div>

          <p className="explication-specialize slide-down-2 text-2xl text-center mt-20 mb-10
            max-[423px]:text-[1.2rem]
          ">
            SPECIALIZED
          </p>
          <p >
            I’m a Full-stack developer specializing in scalable web
            applications. I create clear, accessible interfaces, optimize
            performance, and help users reach their goals faster.
          </p>
          <div className="specialize flex flex-col md:flex-row justify-evenly gap-5 text-3xl"></div>
        </div>

        {/* Right side */}
        <div className="home-right flex-1 flex flex-col gap-5">
          {/* Profile image */}
          <div className="home-right-image  glass move h-[50vh] shadow-[0_0_5px_1px_rgba(255,255,255,0.9)]">
            <img
              className="profile-photo  object-left w-full h-full object-cover rounded-md"
              src={profile}
              alt="profile"
            />
          </div>

          {/* Contact */}
          <div
            id="Contact"
            className="home-right-contact glass move p-4 shadow-[0_0_5px_1px_rgba(255,255,255,0.9)]"
          >
            <h2 className="slide-down">Contact & Social</h2>
            <a
              href="https://github.com/6scars"
              className="contact-link flex items-center gap-2 mt-2"
            >
              <img className="h-10 w-10" src={gitIcon} alt="github" />
              <span>GITHUB</span>
            </a>
            <p className="mt-2">marcin.michon6@o2.pl</p>
          </div>
        </div>
      </div>
    </>
  );
}
