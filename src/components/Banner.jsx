import AuthButton from "./AuthButton";
const Banner = ({title}) => (
    <div className="d-flex align-items-center">
        <h1 className="p-3">{ title }</h1>
        <AuthButton />
    </div>
);

export default Banner;