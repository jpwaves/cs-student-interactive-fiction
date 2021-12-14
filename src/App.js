import logo from "./logo.svg";
import "./reset.css";
import "./App.css";
import { useEffect, useState } from "react";
import BeginSemester from "./components/story-components/beginSemester/BeginSemester";
import GradeBar from "./components/page-components/gradeBar/GradeBar";
import controller from "./backend/controller/controller";
import StartGame from "./components/story-components/startGame/StartGame";
import ChooseOS from "./components/story-components/chooseOS/ChooseOS";
import PartTimeJob from "./components/story-components/partTimeJob/PartTimeJob";
import FirstFewWeeks from "./components/story-components/firstFewWeeks/FirstFewWeeks";
import PartnerAssignment from "./components/story-components/partnerAssignment/PartnerAssignment";
import PartnerOptions from "./components/story-components/partnerAssignment/PartnerOptions";
import PartnerSubOptions from "./components/story-components/partnerAssignment/PartnerSubOptions.jsx";

function App() {
  const [grade, setGrade] = useState(100);
  // lower time mult is better (default is 1)
  const [timeMultiplier, setTimeMultiplier] = useState(0);
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [scenario, setScenario] = useState(<></>);
  const [startEarly, setStartEarly] = useState();
  const [usedProf, setUsedProf] = useState();

  useEffect(() => {
    renderScenario();
  }, [scenarioIdx]);

  const updateScenario = (idx) => {
    setScenarioIdx(idx);
  }

  const multiplyTM = (factor) => {
    setTimeMultiplier(timeMultiplier * factor);
  }

  const incrementTM = (amount) => {
    setTimeMultiplier(timeMultiplier + amount);
  }

  const scenarios = {
    0: <StartGame updateScenario={updateScenario} />,
    1: <BeginSemester updateScenario={updateScenario} />,
    2: <ChooseOS updateScenario={updateScenario} updateTM={multiplyTM} />,
    3: <PartTimeJob updateScenario={updateScenario} updateTM={incrementTM} />,
    4: <FirstFewWeeks updateScenario={updateScenario} updateTM={incrementTM} />,
    5: <PartnerAssignment updateScenario={updateScenario} setStartEarly={setStartEarly} />,
    6: <PartnerOptions updateScenario={updateScenario} startEarly={startEarly} setUsedProf={setUsedProf} />,
    7: <PartnerSubOptions updateScenario={updateScenario} usedProf={usedProf} />,

  }

  const renderScenario = () => {
    setScenario(scenarios[scenarioIdx]);
  }

  return (
    <div className="container">
      <GradeBar grade={grade} />
      {scenario}
    </div>
  );
}

export default App;
