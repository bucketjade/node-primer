import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import CourseEditor from "../pages/CourseEditor";
import TermPage from "./TermPage";
import { useProfile } from "../utilities/profile";

const CourseEditorForUrl = () => {
    const { id } = useParams();
    return <CourseEditor id={id} />;
}
const Dispatcher = ({schedule}) => {
    const [profile, profileLoading, profileError] = useProfile();

    if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
    if (profileLoading) return <h1>Loading user profile</h1>;
    console.log(profile)
    if (!profile) return <h1>No profile data</h1>;

  return <BrowserRouter>
    <Routes>
        <Route path="/" element={<TermPage schedule={schedule} profile={profile}/>}/>
        <Route path="/:id/edit" element={<CourseEditorForUrl />} />
    </Routes>
    </BrowserRouter>
};

export default Dispatcher;