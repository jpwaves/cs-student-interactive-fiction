import "./PathButton.css";

export default function PathButton(props) {
  const { handleClick, path } = props;

  console.log("path: " + path);
  return (
    <button className="path-button" onClick={() => handleClick()}>
      {path}
    </button>
  );
}
