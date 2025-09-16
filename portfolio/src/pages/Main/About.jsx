
import comet from "../images/comet.png";
import astronaut from "../images/astronaut.png";
import save from "../images/save.png";
export function About() {

    return (
        <div className="home-desc gradient-wrapper flex flex-col md:flex-row gap-5 w-full justify-center mt-10">
            <div id="About" className="home-left glass move2 flex-1 p-6">
                <h2 className="slide-down text-3xl font-bold mb-4">ABOUT</h2>
                <div className="flex gap-10 items-center">
                    <p>
                        I combine clean design with robust engineering — I craft
                        interfaces that not only look good but are fast, accessible, and
                        easy to use.
                    </p>
                    <img alt="comet" src={comet} className="w-[10rem] h-[5rem]" />
                </div>

                {/* Frontend */}
                <div className=" shadow-[0_0_50px_20px_rgba(0,0,0,0.55)] bg-black/67 border-3 rounded-[8%] border-black/90 p-6">
                    <div className="devider border-b border-gray-800 w-full mb-2"></div>
                    <div className="flex gap-10  items-center">
                        <img
                            alt="astronaut"
                            src={astronaut}
                            className="w-[10rem] h-[10rem]"
                        />
                        <p>
                            I follow a user-centered process: understand the users and
                            business goals, create prototypes, iterate with feedback, and
                            deliver stable deployments.{" "}
                        </p>
                    </div>
                </div>
                {/* Backend */}
                <div className="shadow-[0_0_50px_20px_rgba(0,0,0,0.55)] bg-black/67 border-3 rounded-[8%] border-black/90 p-6">
                    <div className="devider border-b border-gray-800 w-full mb-2"></div>
                    <div className="flex gap-10 items-center">
                        <p>
                            I value maintainable code: modular components, clear
                            documentation, and automated tests help teams ship features
                            faster and with fewer regressions. I’m open to full-time roles
                            or freelance collaborations where I can impact product quality
                            and user experience.
                        </p>
                        <img alt="save" src={save} className="w-[10rem] h-[10rem]" />
                    </div>
                </div>
            </div>
        </div>

    )
}