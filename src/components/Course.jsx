import './Course.css';
import { conflicts } from '../utilities/timeconflict';

const Course = ({id, course, selectedCards, toggleSelectedCards, conflicting}) => (
    <div className="course card m-1 p-2" onClick={() => {if (!conflicting || selectedCards.includes(id)) {toggleSelectedCards(id)}}}>
        {/* Note: we assume you will never get to a state where two conflicting classes are selected */}
        <div className={`${selectedCards.includes(id) ? 'course-selected' : ''} ${conflicting ? 'course-conflict' : ''}`}>
            <div className="card-body">
                {conflicting && ! selectedCards.includes(id) ? <h5 style={{ color: 'white' }}>Course Conflict!</h5> : null}
                <h5 className="card-title">{course.term} CS {course.number}</h5>
                <p className="card-text">{course.title}</p>
            </div>
            <p className="card-footer bg-transparent">{course.meets}</p>
        </div>
    </div>
);

export default Course;