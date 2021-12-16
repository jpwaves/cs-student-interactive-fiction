import sneeze from "../../../assets/sounds/sneeze.wav";
import React, { useEffect } from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function SwitchMajors(props) {
    const { updateScenario } = props;
    const title = "Switching Majors";
    const scenario = `Switching majors is a valid choice; computer science isn't for everybody. There are many other majors to choose from, so hopefully you'll find something that interests you. I hope you enjoyed playing this interactive fiction! If you want to try going down a different path, click the "Play Again" button below.`;

    const options = [
        {
            path: "Play Again?",
            handleOption: () => {
                updateScenario(0);
            }
        },
    ];

    useEffect(() => {
        new Audio(sneeze).play();
    }, []);

    return <Scenario title={title} desc={scenario} options={options} />;
}
