import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import {expCards} from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import Skills from "../components/Skills.jsx";
import Hover from "../components/3dExamples/Hover.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";


gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) =>{
            gsap.from(card, {
            xPercent: -100,
            opacity: 0,
            transformOrigin: 'left left',
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%'
            }
            })
        })
        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end : '50% center',
                onUpdate: (self) => {
                    gsap.to('.timeline', {
                        scaleY: 1 - self.progress,
                    })
                }
            }
        });

        gsap.utils.toArray('.expText').forEach((text) =>{
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                // transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 80%'
                }
            })
        })

    }, []);
    return (
        <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0" >
            <div className="w-full h-full md:px-20 px-5">
                <Skills
                    title="Projects"
                   // sub="💼 My Career Overview"
                />

            </div>
            <div className="mt-20 relative flex flex-col xl:flex-row gap-6 justify-center items-center">
                <div className="relative xl:w-2/6 xl:space-y-32 space-y-10 ">
                    {expCards.map((card) => (
                        <div key={card.title} className="exp-card-wrapper">
                            <div className="xl:w-4/6">
                                <div className="flex items-start">
                                    {/*<div className="timeline-wrapper">*/}
                                    {/*    <div className="timeline"/>*/}
                                    {/*    <div className="gradient-line w-1 h-full"/>*/}
                                    {/*</div>*/}
                                    <div className="expText flex xl:gap-20 md:gap-10 gap-5
                                   relative z-20">
                                        <div>
                                            <h1 className="font-semibold text-3xl">{card.title}</h1>
                                            {/*<p className="my-5 text-white-50">*/}
                                            {/*    📅 {card.date}*/}
                                            {/*</p>*/}
                                            <p className="text-[#839cb5] italic">
                                                Functionality
                                            </p>
                                            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5
                                            text-white-50">
                                                {card.responsibilities.map((responsibility) => (
                                                    <li key={responsibility} className = "text-lg">
                                                        {responsibility}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full h-full sm:h-[500px] md:h-[700px] xl:h-96 xl:w-2/6 xl:sticky xl:top-32
                xl:-mt-14 xl:-ml-40 md:-mt-70  ">
                {/*<div className="w-full h-full sm:h-[500px] md:h-[700px] xl:h-96">*/}
                    {/* Your HoverCar component goes here */}
                    <Hover />
                {/*</div>*/}
                </div>
            </div>
        </section>
    )
}
export default ExperienceSection