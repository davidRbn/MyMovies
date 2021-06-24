import './App.css';
import {Header,Router} from './components';
import {  AuthController } from './components/context/contextAuth';

function App() {


  // Axios.get('/api/getLogin',{
  //   headers : {
  //     'Authorization' : `Bearer `
  //   }
  // })



  // useEffect(() => {
  //    localStorage.token &&
  //   setTimeout(() => {
  //    localStorage.clear()
  //   },10000)
  // },[localStorage.token])

  // 1800000

  return (


    <>
     <AuthController>
      <Header/>
      <Router/>
     </AuthController>
    </>
  );
}

export default App;
