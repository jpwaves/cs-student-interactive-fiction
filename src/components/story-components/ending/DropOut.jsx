import sneeze from "../../../assets/sounds/sneeze.wav";
import React, { useEffect } from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function DropOut(props) {
    const { updateScenario } = props;
    const title = "Dropping Out";
    const scenario = `It seems college wasn't right for you, and that's alright! There are many different pathways to success and college is just one of them. With enough effort, you'll find another way to be successful in your future, hopefully. I hope you enjoyed playing this interactive fiction! If you want to try going down a different path, click the "Play Again" button below.`;

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
