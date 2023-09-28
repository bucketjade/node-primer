const Course = ({course}) => (
    <div className="card m-1 p-2">
        <div className="card-body">
            <h5 className="card-title">{course.term} CS {course.number}</h5>
            <p className="class-text">{course.title}</p>
        </div>
        <p className="card-footer bg-transparent">{course.meets}</p>
    </div>
);

export default Course;