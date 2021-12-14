import PathButton from "../pathButton/PathButton";
import "./ButtonList.css";

export default function ButtonList(props) {
    const { options } = props;

    const renderPathOptions = () => {
        const buttons = options.map((option, index) => {
            const { path, handleOption } = option;
            return (
                <li key={index}>
                    <PathButton handleClick={handleOption} path={path} />
                </li>
            );
        });
        return buttons;
    };

    return (
        <ul className="buttons-container">
            {renderPathOptions()}
        </ul>
    )
}