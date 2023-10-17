// import { useJsonQuery } from '../utilities/fetch';
import { useDbData } from "../utilities/firebase";
import Banner from './Banner';
import Dispatcher from './Dispatcher';

const Main = () => {
    // const [schedule, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  
    const [schedule, error] = useDbData("/");
    if (error) return <h1>Error loading user data: {`${error}`}</h1>;
    if (schedule === undefined) return <h1>Loading user data...</h1>;
    if (!schedule) return <h1>No data found</h1>;
  
    return <div>
        <Banner title={schedule.title} />
        <Dispatcher schedule={schedule} />
      </div>;
}

export default Main;
