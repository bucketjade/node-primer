import Course from "./Course";
import './CourseList.css'
import { conflicts } from "../utilities/timeconflict";

const CourseList = ({courses, term, selectedCards, toggleSelectedCards, profile}) => (
    <div className="course-list">
        {/* {Object.keys(courses).map((key) => <p>{key}</p>)} */}
        {/* {selectedCards.map(cardId => <p>{course[cardId]}</p>)} */}
        {
            Object.keys(courses).filter(
                key => courses[key].term === term
            ).map((key) => <Course key={key} 
                                id={key} 
                                course={courses[key]} 
                                selectedCards={selectedCards} 
                                toggleSelectedCards={toggleSelectedCards} 
                                conflicting={selectedCards.filter(id => conflicts(courses[id], courses[key])).length != 0} 
                                profile={profile}/>)
        }
    </div>
);

export default CourseList;