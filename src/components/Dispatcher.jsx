import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import CourseEditor from "../pages/CourseEditor";
import TermPage from "./TermPage";

const CourseEditorForUrl = () => {
    const { id } = useParams();
    return <CourseEditor id={id} />;
}
const Dispatcher = ({schedule}) => (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<TermPage schedule={schedule}/>}/>
        <Route path="/:id/edit" element={<CourseEditorForUrl />} />
    </Routes>
    </BrowserRouter>
);

export default Dispatcher;