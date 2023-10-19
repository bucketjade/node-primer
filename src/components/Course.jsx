import './Course.css';
import { useAuthState } from '../utilities/firebase';
import { Link } from 'react-router-dom';

const Course = ({id, course, selectedCards, toggleSelectedCards, conflicting}) => {
    const [user] = useAuthState();

    return (<div className="course card m-1 p-2" onClick={() => {if (!conflicting || selectedCards.includes(id)) {toggleSelectedCards(id)}}}>
        {/* Note: we assume you will never get to a state where two conflicting classes are already selected */}
        <div className={`${selectedCards.includes(id) ? 'course-selected' : ''} ${conflicting ? 'course-conflict' : ''}`}>
            {user 
            ? <Link to={`${id}/edit`} className={"position-absolute top-0 end-0"} >
                <button className="btn">
                <i className="bi bi-pencil-square text-info"></i>
                </button>
            </Link>
            : null}
            <div className="card-body">
                {conflicting && ! selectedCards.includes(id) ? <h5 style={{ color: 'white' }} className={"text-warning"}>Course Conflict!</h5> : null}
                <h5 className="card-title">{course.term} CS {course.number}</h5>
                <p className="card-text">{course.title}</p>
            </div>
            <p className="card-footer bg-transparent">{course.meets}</p>
        </div>
    </div>)
};

export default Course;