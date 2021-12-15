import "./PathButton.css";

export default function PathButton(props) {
  const { handleClick, path } = props;

  return (
    <button className="path-button" onClick={() => handleClick()}>
      {path}
    </button>
  );
}
