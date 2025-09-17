import { About } from "./About";
import { HomeSection } from "./HomeSection";
import { TechnicalProjects } from "./TechnicalProjects";

export function Main() {
    return (
        <main className="w-full">
            <HomeSection />
            <About />
            <TechnicalProjects/>
        </main>
    )
}