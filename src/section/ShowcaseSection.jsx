import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref, project2Ref, project3Ref];

        projects.forEach((cardRef, index) => {
            if (cardRef.current) {
                gsap.fromTo(
                    cardRef.current,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: 0.3 * (index + 1),
                        scrollTrigger: {
                            trigger: cardRef.current,
                            start: 'top bottom-=100',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            }
        });

        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1 }
            );
        }
    }, { scope: sectionRef });

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/*left side*/}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Ryde" />
                        </div>
                        <div className="text-content">
                            <h2>
                                Bring stories to life with ShortStoryAI.
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                An app build with React and Node.js that allows users to create and share their own stories.
                            </p>
                        </div>
                    </div>

                    {/*right side*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb] ">
                                <img src="/images/project2.png" alt="Library Management Platform" />
                            </div>
                            <h2>
                                Library Management Platform
                            </h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb] ">
                                <img src="/images/project3.png" alt="YC Directory" />
                            </div>
                            <h2>
                                YC Directory - A startup directory for YC startups
                            </h2>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default ShowcaseSection;