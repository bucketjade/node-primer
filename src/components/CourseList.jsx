import Course from "./Course";
import './CourseList.css'

const CourseList = ({courses, term, selectedCards, toggleSelectedCards}) => (
    <div className="course-list">
        {/* {Object.keys(courses).map((key) => <p>{key}</p>)} */}
        {
            Object.keys(courses).filter(
                key => courses[key].term === term
            ).map((key) => <Course key={key} id={key} course={courses[key]} selectedCards={selectedCards} toggleSelectedCards={toggleSelectedCards} />)
        }
    </div>
);

export default CourseList;