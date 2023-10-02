import { useState } from "react";
import CourseList from "./CourseList";

const terms = {
  Fall: 'Fall',
  Winter: 'Winter',
  Spring: 'Spring'
};

// each button
const TermButton = ({term, selection, setSelection}) => (
    <div>
        <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
          onChange={() =>setSelection(term)} />
        <label className="btn btn-success mb-1 p-2" htmlFor={term}>
        { term }
        </label>
    </div>
);

// this is the row of 3 buttons
const TermSelector = ({selection, setSelection}) => (
    <div className="btn-group">
        {
            Object.keys(terms).map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
        }
    </div>
);


const Term = ({selection}) => (
    <div className="card" >
        { terms[selection] }
    </div>
)
// note: this "Term" state variable has to be created in TermPage not TermSelector,
// so that it can be shared between components.

const TermPage = ({schedule}) => {
    const [selection, setSelection] = useState(() => Object.keys(terms)[0]); //start on Fall
    return (
        <div>
            <TermSelector selection={selection} setSelection={setSelection} />
            <CourseList courses={schedule.courses} term={selection} />
        </div>
    );
}

export default TermPage;