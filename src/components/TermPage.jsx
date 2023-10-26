import { useState } from "react";
import CourseList from "./CourseList";
import Modal from "./Modal";
import Cart from "./Cart";
import "./Modal.css"

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
        <label className="btn btn-success mb-1 p-2" htmlFor={term} data-cy={term} >
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

const TermPage = ({schedule, profile}) => {
    const [termSelection, setTerm] = useState(() => Object.keys(terms)[0]); //start on Fall
    const [selectedCards, setClasses] = useState([]);
    const [open, setOpen] = useState(false);

    const openModal = () => {
        console.log("Opening modal");
        setOpen(true);
    };
    const closeModal = () => {
        console.log("Closing modal");
        setOpen(false);
    };

    const toggleSelectedCards = (item) => setClasses(
        selectedCards.includes(item)
        ? selectedCards.filter(x => x !== item)
        : [...selectedCards, item]
    );


    return (
        <div>
            <div className="d-flex">
                <TermSelector termSelection={termSelection} setTerm={setTerm} />
                <button className="ms-auto btn btn-outline-dark" onClick={openModal}><i className="bi bi-cart4"></i>Course Plan</button>
            </div>
            <Modal open={open} close={closeModal}>
                <Cart selectedCards={selectedCards} courses={schedule.courses}/>
            </Modal>
            <CourseList courses={schedule.courses} 
                        term={termSelection} 
                        selectedCards={selectedCards} 
                        toggleSelectedCards={toggleSelectedCards}
                        profile={profile}
            />
        </div>
    );
}

export default TermPage;