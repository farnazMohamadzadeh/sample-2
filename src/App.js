import { Header } from "./components/Header";
import {useRoutes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from "./routes";

function App() {
  let router = useRoutes(routes)

  return (
   <>
   <Header />
   {router}
   </>
  );
}

export default App;
