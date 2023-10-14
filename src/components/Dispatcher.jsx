import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import CourseForm from "./CourseForm";
import TermPage from "./TermPage";

const CourseFormForUrl = () => {
    const { id } = useParams();
    return <CourseForm id={id} />;
}
const Dispatcher = ({schedule}) => (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<TermPage schedule={schedule}/>}/>
        <Route path="/:id/edit" element={<CourseFormForUrl />} />
    </Routes>
    </BrowserRouter>
);

export default Dispatcher;