import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function StartGame(props) {
    const { updateScenario } = props;
    const title = "A CS Semester";
    const desc = `Welcome! In this interactive-fiction-like game, you'll step into the
        shoes of a CS student who is taking a semester of classes. The scenarios you
        encounter on your journey are partially based on what I believe CS students
        typically have to deal with and this is mixed in with my personal experiences
        as a CS student. The purpose of this game is to be a light hearted but 
        informative way of showing others some of the things CS students do in a typical
        semester and the common situations we face. To get started, click the "Start Game"
        button below! I hope you enjoy the game!`;

    const options = [
        {
            path: "Start Game",
            handleOption: () => {
                updateScenario(1);
            }
        },
    ];
    return (
        <Scenario title={title} desc={desc} options={options} />
    );
}