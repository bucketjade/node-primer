import Course from "./Course";
import './CourseList.css'

const CourseList = ({courses}) => (
    <div className="course-list">
        {
            Object.keys(courses).map(key => <Course key={key} course={courses[key]} />)
        }
    </div>
);

export default CourseList;