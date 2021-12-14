import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

const results = {
    1: "You found a half solution that helped guide you to the root of the issue and finished the assignment early with little to no errors in your submission.",
    2: "You barely finished the assignment on time, but there are still some bad coding practices in the submission.",
    3: "A student and professor both responded and you were able to use their input to deduce the source of the error and you finished the assignment early with little to no errors in your submission.",
    4: "The responses came on the last day, but you barely submitted the assignment on time, though with a couple of small bugs and errors.",
    5: "The responses came on the last day so you had to submit assignment a day late.",
    // finish extracting the story responses
};
export default function PartnerSubOptions(props) {
    const { updateScenario, result, setPartnerOption } = props;
    const title = "First Partner Assignment Pt. 2";
    const scenario = usedProf ? profScenario : ohScenario;

    const options = [
        {
            path: "Stay up and work on the homework",
            handleOption: () => {
                updateScenario(8);
            }
        },
        {
            path: "Sleep",
            handleOption: () => {
                updateScenario(8);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
