import "./StoryBox.css";

export default function StoryBox(props) {
  const { title, description } = props;

  return (
    <div className="storybox-container">
      <h2 className="scenario-title">{title}</h2>
      <p className="scenario">{description}</p>
    </div>
  );
}
