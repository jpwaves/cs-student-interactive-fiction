import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function SideProjects(props) {
    const { updateScenario, updateTM } = props;
    const title = "Side Projects";
    const scenario = `You're halfway through the semester! At this point, you've learned enough to start working on side projects (or learning new languages to start your side projects). Side projects are a great way to practice your programming while also learning new skills and technologies, and creating something to add to your resume. Do you want to start investing your time into side projects?`;

    const options = [
        {
            path: "Do side projects",
            handleOption: () => {
                updateTM(1.25)
                updateScenario(11);
            }
        },
        {
            path: "No thanks, I'll use my time for something else",
            handleOption: () => {
                updateScenario(10);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
