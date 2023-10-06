import { useState } from "react";
import CourseList from "./CourseList";

const terms = {
  Fall: 'Fall',
  Winter: 'Winter',
  Spring: 'Spring'
};

// each button
const TermButton = ({term, termSelection, setTerm}) => (
    <div>
        <input type="radio" id={term} className="btn-check" checked={term === termSelection} autoComplete="off"
          onChange={() =>setTerm(term)} />
        <label className="btn btn-success mb-1 p-2" htmlFor={term}>
        { term }
        </label>
    </div>
);

// this is the row of 3 buttons
const TermSelector = ({termSelection, setTerm}) => (
    <div className="btn-group">
        {
            Object.keys(terms).map(term => <TermButton key={term} term={term} termSelection={termSelection} setTerm={setTerm} />)
        }
    </div>
);


// const Term = ({termSelection}) => (
//     <div className="card" >
//         { terms[termSelection] }
//     </div>
// )
// note: this "Term" state variable has to be created in TermPage not TermSelector,
// so that it can be shared between components.

const TermPage = ({schedule}) => {
    const [termSelection, setTerm] = useState(() => Object.keys(terms)[0]); //start on Fall

    const [selectedCards, setClasses] = useState([]);

    // const toggleSelectedCards = (item) => setClasses(
    //     selectedCards.includes(item)
    //     ? selectedCards.filter(x => x !== item)
    //     : [...selectedCards, item]
    // );

    const toggleSelectedCards = (item) => {
        console.log(`before: ${selectedCards}. clicked ${item}`);
        console.log(`check: ${selectedCards.includes(item)}.`);
        setClasses(
            selectedCards.includes(item)
            ? selectedCards.filter(x => x !== item)
            : [...selectedCards, item]
        );
        console.log(`after: ${selectedCards}`);
    }


    return (
        <div>
            <TermSelector termSelection={termSelection} setTerm={setTerm} />
            <CourseList courses={schedule.courses} term={termSelection} selectedCards={selectedCards} toggleSelectedCards={toggleSelectedCards}/>
        </div>
    );
}

export default TermPage;