import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import CourseForm from "./CourseForm";


const Dispatcher = () => (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/edit" element={<CourseForm />} />
    </Routes>
    </BrowserRouter>
);

export default Dispatcher;