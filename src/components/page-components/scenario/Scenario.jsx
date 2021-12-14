import React from "react";
import StoryBox from "../storyBox/StoryBox";
import ButtonList from "../buttonList/ButtonList";
import "./Scenario.css";

export default function Scenario(props) {
    const { title, desc, options } = props;

    return (
        <div className="component-container">
            <h1>Beginning of the Semester!</h1>
            <StoryBox title={title} description={desc} />
            <ButtonList options={options} />
        </div>
    );
}