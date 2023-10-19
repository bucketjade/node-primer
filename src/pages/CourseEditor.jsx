import { useFormData } from "../utilities/useFormData";
import { useDbUpdate } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { before } from "../utilities/timeconflict";

const validateUserData = (key, val) => {
  switch (key) {
    case 'title':
      return /(\w\w)/.test(val) ? '' : 'must be least two characters';
    case 'meets':
        const meetsRegex = /^$|^(?:M|Tu|W|Th|F(?!(?:M|Tu|W|Th|F))+){0,4} ((?:[0-1]?\d|2[0-3]):[0-5]\d)-((?:[0-1]?\d|2[0-3]):[0-5]\d)$/;
        const match = val.match(meetsRegex) 
        if (match) {
            const [,startTime, endTime] = match;

            if (!before(startTime, endTime)) {
                return 'start time must be strictly before end time';
            }
            return '';
        } else {
            return 'must contain days and start-end, e.g., MWF 12:00-13:20';
        }
    default: return '';
  }
};

const InputField = ({name, text, state, change}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{text}</label>
    <input className="form-control" id={name} name={name} 
      defaultValue={state.values?.[name]} onChange={change} />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

const ButtonBar = ({message, disabled}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
      <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
      <span className="p-2">{message}</span>
      {/* <span className="p-2">Some message here!</span> */}
    </div>
  );
};

const CourseEditor = ({id}) => {
  const [update, result] = useDbUpdate(`/courses/${id}`);
  const [state, change] = useFormData(validateUserData, id);
  // const submit = () => (null);
  const submit = (evt) => {
    evt.preventDefault();
    if (!state.errors) {
      update(state.values);
    }
  };

  return (
    <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
        <h4>Edit Course {id}</h4>
        <br></br>
        <InputField name="title" text="Course Title" state={state} change={change} />
        <InputField name="meets" text="Meeting Times" state={state} change={change} />
        <ButtonBar message={result?.message} />
    </form>
  )
};

export default CourseEditor;



// const CourseForm = ({id}) => {
//     return (
//         <p>Hello, World! {id}</p>
//     );
// };

// export default CourseForm;