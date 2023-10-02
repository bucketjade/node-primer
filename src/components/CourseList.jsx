import Course from "./Course";
import './CourseList.css'

const CourseList = ({courses, term}) => (
    <div className="course-list">
        {
            Object.keys(courses).filter(
                key => courses[key].term === term
            ).map(key => <Course key={key} course={courses[key]} />)
        }
    </div>
);

export default CourseList;