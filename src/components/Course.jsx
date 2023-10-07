import './Course.css';

const Course = ({id, course, selectedCards, toggleSelectedCards}) => (
    <div className="course card m-1 p-2" onClick={() => toggleSelectedCards(id)}>
        <div className={selectedCards.includes(id) ? 'course-selected' : ''}>
            <div className="card-body">
                <h5 className="card-title">{course.term} CS {course.number}</h5>
                <p className="card-text">{course.title}</p>
            </div>
            <p className="card-footer bg-transparent">{course.meets}</p>
        </div>
    </div>
);

export default Course;