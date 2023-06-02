import Crud from './components/Crud';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <div className="container">
      <Crud />
    </div>
  );
}

export default App;
