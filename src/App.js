import "./reset.css";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import BeginSemester from "./components/story-components/beginSemester/BeginSemester";
import GradeBar, { getGrade } from "./components/page-components/gradeBar/GradeBar";
import StartGame from "./components/story-components/startGame/StartGame";
import PartTimeJob from "./components/story-components/partTimeJob/PartTimeJob";
import FirstFewWeeks from "./components/story-components/firstFewWeeks/FirstFewWeeks";
import PartnerAssignment from "./components/story-components/partnerAssignment/PartnerAssignment";
import PartnerOptions from "./components/story-components/partnerAssignment/PartnerOptions";
import PartnerSubOptions from "./components/story-components/partnerAssignment/PartnerSubOptions.jsx";
import PartnerResult from "./components/story-components/partnerAssignment/PartnerResult";
import NoCheatOrPlagarize from "./components/story-components/noCheatOrPlagarize/NoCheatOrPlagarize";
import SideProjects from "./components/story-components/sideProjects/SideProjects";
import NoSideProjects from "./components/story-components/sideProjects/NoSideProjects";
import FinalAssignment from "./components/story-components/finalAssignment/FinalAssignment";
import FinalAssignmentResult from "./components/story-components/finalAssignment/FinalAssignmentResult";
import FinalExams from "./components/story-components/finalExams/FinalExams";
import CurvedExam from "./components/story-components/finalExams/CurvedExam";
import Ending from "./components/story-components/ending/Ending";
import GameOver from "./components/story-components/gameOver/GameOver";
import ChooseEditor from "./components/story-components/chooseEditor/ChooseEditor";
import homeMusic from "./assets/sounds/home-screen.mp3";
import DropOut from "./components/story-components/ending/DropOut";
import SwitchMajors from "./components/story-components/ending/SwitchMajors";

const audio = new Audio(homeMusic);
audio.loop = true;

function App() {
  const [grade, setGrade] = useState(100);
  // lower time mult is better (default is 1)
  const [timeMultiplier, setTimeMultiplier] = useState(1);
  const [background, setBackground] = useState("default");
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [scenario, setScenario] = useState(<></>);
  const [startEarly, setStartEarly] = useState();
  const [usedProf, setUsedProf] = useState();
  const [result, setResult] = useState();
  const [documentation, setDocumentation] = useState();
  const [editorIcon, setEditorIcon] = useState("");
  const appBkgdRef = useRef(null);
  const keyScenarios = [4, 5, 8, 9, 11, 12, 13, 14, 15];


  const calcGrade = () => {
    console.log("timeMultiplier: " + timeMultiplier);
    const directionMultiplier = Math.random() - Math.min(0.5 * timeMultiplier, 1);
    console.log("direction multiplier: " + directionMultiplier);
    const stdDev = directionMultiplier * (Math.random() * timeMultiplier * 5);
    console.log("std dev: " + stdDev);
    const currGrade = Math.min(grade + stdDev, 100);
    setGrade(currGrade);
  }

  useEffect(() => {
    console.log("curr grade: " + grade);
  }, [grade]);

  useEffect(() => {
    console.log("curr tm: " + timeMultiplier);
  }, [timeMultiplier]);

  useEffect(() => {
    if (keyScenarios.includes(scenarioIdx)) {
      console.log("calc grade");
      calcGrade();
    } else if (scenarioIdx === 16) {
      setGrade(0);
    } else if (scenarioIdx === 0) {
      // reset to defaults if the game is routed back to the start screen
      audio.play();
      audio.muted = false;
      setGrade(100);
      setBackground("default");
      setEditorIcon("");
      setTimeMultiplier(1);
    } else if (scenarioIdx === 2) {
      audio.muted = true;
    }
    renderScenario();
  }, [scenarioIdx]);

  const updateScenario = (idx) => {
    setScenarioIdx(idx);
  }

  const multiplyTM = (factor) => {
    // cap time multiplier to be at most 7
    setTimeMultiplier(Math.min(7, timeMultiplier * factor));
  }

  const incrementGrade = (amount) => {
    setGrade(grade + amount);
  }

  const scenarios = {
    0: <StartGame updateScenario={updateScenario} />,
    1: <BeginSemester updateScenario={updateScenario} setBackground={setBackground} />,
    2: <ChooseEditor updateScenario={updateScenario} updateTM={multiplyTM} setEditorIcon={setEditorIcon} />,
    3: <PartTimeJob updateScenario={updateScenario} updateTM={multiplyTM} />,
    4: <FirstFewWeeks updateScenario={updateScenario} updateTM={multiplyTM} />,
    5: <PartnerAssignment updateScenario={updateScenario} setStartEarly={setStartEarly} updateTM={multiplyTM} />,
    6: <PartnerOptions updateScenario={updateScenario} startEarly={startEarly} setUsedProf={setUsedProf} setResult={setResult} updateTM={multiplyTM} />,
    7: <PartnerSubOptions updateScenario={updateScenario} usedProf={usedProf} setResult={setResult} updateTM={multiplyTM} />,
    8: <PartnerResult updateScenario={updateScenario} result={result} />,
    9: <SideProjects updateScenario={updateScenario} updateTM={multiplyTM} />,
    10: <NoSideProjects updateScenario={updateScenario} />,
    11: <FinalAssignment updateScenario={updateScenario} setDocumentation={setDocumentation} />,
    12: <FinalAssignmentResult updateScenario={updateScenario} documentation={documentation} updateGrade={incrementGrade} />,
    13: <FinalExams updateScenario={updateScenario} updateGrade={incrementGrade} updateTM={multiplyTM} />,
    14: <CurvedExam updateScenario={updateScenario} updateGrade={incrementGrade} />,
    15: <Ending updateScenario={updateScenario} grade={grade} calcGrade={getGrade} />,
    16: <NoCheatOrPlagarize updateScenario={updateScenario} />,
    17: <GameOver updateScenario={updateScenario} />,
    18: <SwitchMajors updateScenario={updateScenario} />,
    19: <DropOut updateScenario={updateScenario} />,
  }

  const renderScenario = () => {
    setScenario(scenarios[scenarioIdx]);
  }

  const render = () => {
    return (
      <div className="container">
        <div className={`app-background ${background}`} ref={appBkgdRef} />
        <div className="top-bar">
          <img className={`editor-icon ${editorIcon ? "visible" : "hidden"}`} src={editorIcon} alt="icon of editor" />
          <GradeBar grade={grade} />
        </div>
        {scenario}
      </div>
    );
  }

  return render();
}

export default App;
