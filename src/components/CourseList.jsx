const CourseList = ({courses}) => (
    // <div>
    //     <p>Hello World, I am CourseList. Next up is to figure out how to print the list of courses in the format.</p>
    //     {Object.keys(courses).map((key) => <p>{courses[key].meets}</p>)}
    //     {/* somehow this works, but why? */}
    // </div>
    <div>
        {Object.keys(courses).map((key) => (
            <p key={key}>{courses[key].term} CS {courses[key].number}: {courses[key].title}</p>
        ))}
    </div>
);

export default CourseList;