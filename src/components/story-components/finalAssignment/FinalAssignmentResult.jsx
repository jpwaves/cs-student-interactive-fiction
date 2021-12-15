import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

const addedDocs = `The documentation was well worth it!`;

const skippedDocs = `You should've done the documentation...`;

export default function FinalAssignmentResult(props) {
    const { updateScenario, documentation, updateGrade } = props;
    const title = documentation ? "Added Documentation" : "Skipped Documentation";
    const scenario = documentation ? addedDocs : skippedDocs;

    const options = [
        {
            path: "Continue",
            handleOption: () => {
                updateGrade(documentation ? 5 : -3);
                updateScenario(13);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
