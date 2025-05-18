import React from 'react'
import {abilities} from "../constants/index.js";
import Skills from "../components/Skills.jsx";

const FeatureCards = () => {
    return (
        <section id="Skills" className="w-full padding-x-lg section-padding xl:px-0">
            <div className="font-semibold md:text-5xl text-3xl text-center">
                <Skills
                title="Skills"
                />
            </div>
            <div className="mx-auto grid-3-cols mt-15 relative ">
                {abilities.map(({ imgPath, title, desc }) => (
                    <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
                        <div className="size-14 flex item-center justify-center rounded-full">
                            <img src={imgPath} alt={title}/>
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                        <p className="text-white-50 text-lg">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default FeatureCards
