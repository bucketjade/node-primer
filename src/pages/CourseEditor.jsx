import { useFormData } from "../utilities/useFormData";
import { useNavigate } from "react-router-dom";
import { before } from "../utilities/timeconflict";

const validateUserData = (key, val) => {
  switch (key) {
    case 'courseTitle':
      return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
    case 'courseMeets':
        // const meetsRegex = /^$|^(?:(M|Tu|W|Th|F)(?:(?!\1)(M|Tu|W|Th|F)){0,4}) (?:[0-1]?\d|2[0-3]):[0-5]\d-(?:[0-1]?\d|2[0-3]):[0-5]\d$/;
        const meetsRegex = /^$|^(?:M|Tu|W|Th|F(?!(?:M|Tu|W|Th|F))+){0,4} ((?:[0-1]?\d|2[0-3]):[0-5]\d)-((?:[0-1]?\d|2[0-3]):[0-5]\d)$/;
        // const meetsRegex = /^$|^(?:(?:M|Tu|W|Th|F)(?:(?!\1)(?:M|Tu|W|Th|F)){0,4}) (([0-1]?\d|2[0-3]):([0-5]\d))-(([0-1]?\d|2[0-3]):([0-5]\d))$/;
        const match = val.match(meetsRegex) 
        if (match) {
            // const [, days, timeRange] = match; // Extract the captured groups
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

const ButtonBar = ({disabled}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
      {/* <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button> */}
      {/* <span className="p-2">{message}</span> */}
    </div>
  );
};

const CourseEditor = ({id}) => {
//   const [update, result] = useDbUpdate(`/users/${user.id}`);
  const [state, change] = useFormData(validateUserData, id);
  const submit = () => (null);
//   const submit = (evt) => {
//     evt.preventDefault();
//     if (!state.errors) {
//       update(state.values);
//     }
//   };

  return (
    <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
        <h4>Edit Course {id}</h4>
        <br></br>
        <InputField name="courseTitle" text="Course Title" state={state} change={change} />
        <InputField name="courseMeets" text="Meeting Times" state={state} change={change} />
        {/* <InputField name="email" text="Email" state={state} change={change} /> */}
        <ButtonBar />
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