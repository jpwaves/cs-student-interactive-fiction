import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

const results = {
    // check stack overflow
    1: "You found a half solution that helped guide you to the root of the issue and finished the assignment early with little to no errors in your submission.",
    2: "You barely finished the assignment on time, but there are still some bad coding practices in the submission.",
    // ask on piazza
    3: "A student and professor both responded and you were able to use their input to deduce the source of the error and you finished the assignment early with little to no errors in your submission.",
    4: "The responses came on the last day, but you barely submitted the assignment on time, though with a couple of small bugs and errors.",
    5: "The responses came on the last day so you had to submit assignment a day late.",
    // go to oh (60% to get 7, 40% to get 8)
    6: "You were able to go to office hours and get help with the assignment. You finished the assignment early, and got a near perfect score!",
    7: "You finished the assignment on time, barely. However, your sleep schedule is now messed up and it'll take a lot of effort to fix it.",
    8: "You didn't have enough time to finish the assignment on time and had to turn in the assignment late.",
    // go talk to prof (60% to get 10, 40% to get 11)
    9: "You were able to talk to the professor and get help with the assignment. You were also able to establish a good relationship with the professor, which could help in the future.",
    10: "You finished the assignment on time, barely. However, your sleep schedule is now messed up and it'll take a lot of effort to fix it.",
    11: "You didn't have enough time to finish the assignment on time and had to turn in the assignment late.",
    // ask on cs khoury discord servers
    12: "Several students gave suggestions and based off those you were able to figure out the problem and turn in the assignment early. You ended up getting high marks on the assignment.",
    13: "Several students did end up responding, and you barely turned the assignment in on time.",
    14: "Several students did end up responding, but by then it was too late and you had to turn in the assignment late.",
};
export default function PartnerResult(props) {
    const { updateScenario, result } = props;
    const title = "";
    console.log("result:" + result);
    const scenario = results[result];

    const options = [
        {
            path: "Continue",
            handleOption: () => {
                updateScenario(9);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
