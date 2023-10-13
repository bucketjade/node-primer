import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dispatcher from './components/Dispatcher';
// component-specific css here, after bootstrap

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="container">
      <Dispatcher />
    </div>
  </QueryClientProvider>
);

export default App;