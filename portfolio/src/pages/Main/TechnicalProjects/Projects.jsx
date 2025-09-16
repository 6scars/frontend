import amazonIcon from "../../images/amazon-simple.svg";
export function Projects() {
    const goToAmazon = () => {
        window.location.href = "/amazon-clone/public/amazon.html";
    };
    
    return (
        <div
            id="Projects"
            className="home-right glass move2 flex-1 p-6 flex flex-col items-start gap-4"
        >
            <div>
                <h2 className="slide-down">Projects </h2>
            </div>
            <div className="flex items-center jutify-start">
                <div className="relative group flex items-center ">
                    <button
                        className="amazon-button flex items-center gap-2 p-2 rounded-md border-1"
                        onClick={goToAmazon}
                    >
                        <img
                            className="h-8 w-[0.2rem]"
                            alt="amazon-icon"
                            src={amazonIcon}
                        />
                        <span>Amazon Clone</span>
                    </button>
                    <p>🔵</p>
                    <div className="project-informations absolute bottom-full p-2 opacity-0 border-1 bg-gray-800 rounded-md group-hover:opacity-100">
                        {" "}
                        The project may loading up to 1 min cause of free render.com
                        plan
                    </div>
                </div>
            </div>
        </div>
    )
}