import { About } from "./About";
import { HomeSection } from "./HomeSection";
import { TechnicalProjects } from "./TechnicalProjects";
import {Footer} from "../Footer"

export function Main() {
    return (
        <main className="w-full">
            <HomeSection />
            <About />
            <TechnicalProjects/>
        </main>
    )
}