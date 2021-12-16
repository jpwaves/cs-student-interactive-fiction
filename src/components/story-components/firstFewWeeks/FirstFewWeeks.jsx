import sleepSnore from "../../../assets/sounds/sleep-snore.wav";

import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function FirstFewWeeks(props) {
    const { updateScenario, updateTM } = props;
    const title = "First Few Weeks";
    const scenario = `The first few weeks of the semester have gone by and 
    you've gotten used to the routine of courses and homework. Since the
     first day, you've been managing to keep going in-person to lectures
      for all your classes. However, the stress of homework is slowly 
      piling on, and your sleep schedule is slowly sliding into oblivion.
       There is the option of sleeping in and watching the recorded 
       lectures or attending via Zoom since all classes are still hybrid,
        but that will make it hard to make friends and find study partners.
         Today, you wake up and consider either going to class in-person
          or sleeping in and attending class virtually. Which do you 
          choose?`;

    const options = [
        {
            path: "Go in-person",
            handleOption: () => {
                updateTM(0.75);
                updateScenario(5);
            }
        },
        {
            path: "Sleep in and attend virtually",
            handleOption: () => {
                new Audio(sleepSnore).play();
                updateTM(1.1);
                updateScenario(5);
            }
        },
        {
            path: "Sleep in and watch recordings",
            handleOption: () => {
                new Audio(sleepSnore).play();
                updateTM(1.25);
                updateScenario(5);
            }
        },
        {
            path: "Switch majors",
            handleOption: () => {
                updateScenario(18);
            }
        },
        {
            path: "Drop out of college",
            handleOption: () => {
                updateScenario(19);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
