import BeginSemester from "../../components/story-components/beginSemester/BeginSemester";
import StartGame from "../../components/story-components/startGame/StartGame";

const scenarios = {
    0: <StartGame />,
    1: <BeginSemester />,
}

export default function controller(scenarioIdx) {
    console.log("scenarioIdx: " + scenarioIdx);
    return scenarios[scenarioIdx];
}