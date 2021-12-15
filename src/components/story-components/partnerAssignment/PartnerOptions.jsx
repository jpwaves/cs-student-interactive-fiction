import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

const earlyScenario = `Good news! You're partner responded quickly and now you both have started the assignment early. It's been 2 days and you two have completed a good chunk of the homework, but have run into an issue with your code where some of your functions are returning undefined and you both haven't been able to figure out the cause on your own. Luckily, you have 5 days to finish still and have many options available to you. Choose one of the following options:`;

const lateScenario = `Unfortunately, your partner didn't contact you either. Now you both have only 2 days left to complete the assignment and you just started. Although you've been able to complete a good chunk of it, you've run into an error with your code that you can figure out. What will you do?`;

export default function PartnerOptions(props) {
    const { updateScenario, startEarly, setUsedProf, setResult } = props;
    console.log("start early: " + startEarly);
    const title = "First Partner Assignment Pt. 2";
    const scenario = startEarly ? earlyScenario : lateScenario;

    const options = [
        {
            path: "Check Stack Overflow",
            handleOption: () => {
                setResult(startEarly ? 1 : 2);
                updateScenario(8);
            }
        },
        {
            path: "Ask on Piazza",
            handleOption: () => {
                setResult(startEarly ? 3 : (Math.floor(Math.random() * 100 + 1) > 50 ? 4 : 5));
                updateScenario(8);
            }
        },
        {
            path: "Go to Office Hours",
            handleOption: () => {
                setUsedProf(false);
                if (startEarly) {
                    setResult(6);
                }
                updateScenario(startEarly ? 8 : 7);
            }
        },
        {
            path: "Talk to the Professor",
            handleOption: () => {
                setUsedProf(true);
                if (startEarly) {
                    setResult(9);
                }
                updateScenario(startEarly ? 8 : 7);
            }
        },
        {
            path: "Ask on CS Khoury Discord servers",
            handleOption: () => {
                setResult(startEarly ? 12 : (Math.floor(Math.random() * 100 + 1) > 50 ? 13 : 14));
                updateScenario(8);
            }
        },
        {
            path: "Plagarizing code from the Internet",
            handleOption: () => {
                updateScenario(16);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
