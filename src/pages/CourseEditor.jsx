import { useFormData } from "../utilities/useFormData";
import { useNavigate } from "react-router-dom";

const validateUserData = (key, val) => {
  switch (key) {
    case 'courseTitle':
      return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
    case 'courseMeets':
        return /^\d\d:\d\d-\d\d:\d\d$/.test(val) ? '' : 'must match the format 00:00-00:00'
    // case 'email':
    //   return /^\w+@\w+[.]\w+/.test(val) ? '' : 'must contain name@domain.top-level-domain';
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