import { Technical } from "./TechnicalProjects/Technical";
import { Projects } from "./TechnicalProjects/Projects";
export function TechnicalProjects() {

    return (
        <div className="home-desc gradient-wrapper flex flex-col md:flex-row gap-5 w-full justify-center mt-10">
            <Technical/>
            <Projects/>
        </div>
    )
}