import "./GradeBar.css"

export const getGrade = (grade) => {
    if (grade >= 90) {
        return grade >= 93 ? "A" : "A-";
    } else if (grade >= 80) {
        return grade >= 86 ? "B+" : (grade >= 83 ? "B" : "B-");
    } else if (grade >= 70) {
        return grade >= 76 ? "C+" : (grade >= 73 ? "C" : "C-");
    } else if (grade >= 60) {
        return grade >= 66 ? "D+" : (grade >= 63 ? "D" : "D-");
    } else {
        return "F";
    }
};

export default function GradeBar(props) {
    const { grade } = props;

    return (
        <div className="gradebar-container">
            <label for="gradebar">Grade: {getGrade(grade)}</label>
            <progress id="gradebar" value={grade} max={100} >{grade}%</progress>
        </div>
    )
}