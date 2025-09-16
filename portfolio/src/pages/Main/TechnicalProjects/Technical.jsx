export function Technical() {
    return (
        <div id="Technical" className="home-left glass move2 flex-1 p-6">
            <h2 className="slide-down text-3xl font-bold mb-4">Technical</h2>
            <p className="text-[1.3rem] pt-4">
                I build <i>responsive, interactive</i> web applications from
                front-end to back-end.
                <br />
                <u>With The Help Of</u>
            </p>

            {/*Frontend And Backend*/}
            <div className="flex justify-evenly">
                {/* Frontend */}
                <div className="specialize-frontend shadow-[0_0_50px_20px_rgba(0,0,0,0.55)] bg-black/67 border-3 rounded-[8%] border-black/90 p-6">
                    <p className="specialize-frontend-title text-xl font-semibold mb-2">
                        FRONT END
                    </p>
                    <div className="devider border-b border-gray-800 w-full mb-2"></div>
                    <ul className="list-disc list-inside text-left space-y-2">
                        {["JavaScript", "HTML", "React", "Tailwind"].map((tech) => (
                            <li key={tech} className="text-2xl leading-[3.5rem]">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Backend */}
                <div className="specialize-frontend shadow-[0_0_50px_20px_rgba(0,0,0,0.55)] bg-black/67 border-3 rounded-[8%] border-black/90 p-6">
                    <p className="specialize-frontend-title text-xl font-semibold mb-2">
                        BACK END
                    </p>
                    <div className="devider border-b border-gray-800 w-full mb-2"></div>
                    <ul className="list-disc list-inside text-left space-y-2">
                        {["Node.js", "Express", "MongoDB", "MySQL"].map((tech) => (
                            <li key={tech} className="text-2xl leading-[3.5rem]">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <p className="text-[1.5rem] pt-4">
                I have <u>experience</u> with <b>deploying</b> <i>scalable</i>{" "}
                apps on <i>Vercel or Render</i> and delivering{" "}
                <i>creative, efficient</i> solutions.
            </p>
        </div>
    )
}