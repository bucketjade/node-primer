import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Main from "./Main";
import CourseForm from "./CourseForm";

const CourseFormForUrl = () => {
    const { id } = useParams();
    return <CourseForm id={id} />;
}
const Dispatcher = () => (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/:id/edit" element={<CourseFormForUrl />} />
    </Routes>
    </BrowserRouter>
);

export default Dispatcher;