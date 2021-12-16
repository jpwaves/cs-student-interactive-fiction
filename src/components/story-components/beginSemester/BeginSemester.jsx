import windowsStartup from "../../../assets/sounds/windows-startup.mp3";
import macStartup from "../../../assets/sounds/mac-startup.mp3";
import linuxStartup from "../../../assets/sounds/linux-startup.wav";

import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function BeginSemester(props) {
  const { updateScenario, setBackground } = props;
  const title = "Beginning of the Semester!";
  const scenario = `Tomorrow is the first day of the semester. As a CS student, 
    having a laptop you can take to class and do your assignments on is a must. 
    However, there are a vast number of different types of laptops to choose 
    from, and not all these laptops have the same OS. Which type of OS do you 
    prefer to have on your laptop? (This question is just to get you familiar 
    with the format of this interactive fiction and has no effect on the 
    story.)`;

  const options = [
    {
      path: "Windows",
      handleOption: () => {
        new Audio(windowsStartup).play();
        setBackground("windows");
        updateScenario(2);
      }
    },
    {
      path: "MacOS",
      handleOption: () => {
        new Audio(macStartup).play();
        setBackground("macos");
        updateScenario(2);
      }
    },
    {
      path: "Linux",
      handleOption: () => {
        new Audio(linuxStartup).play();
        setBackground("linux");
        updateScenario(2);
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
