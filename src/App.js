import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
//import { Route, Routes } from 'react-router-dom';
import './App.css';
import Alerts from './Components/Alert';
import Form from './Components/Form';
import Forms from './Components/Forms';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);



  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
      type: type
      })
      setTimeout(() => {
      setAlert(null);
      }, 1500)
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#060c3d';
      document.body.style.color = 'white';
      document.title = 'TextUtils - Dark Mode';
      showAlert("Dark mode has been enable", "success");
      setInterval(() =>{
        document.title = 'TextUtils is Amazing Mode';
      }, 2000);
      setInterval(() =>{
        document.title = 'Install TextUtils Now!';
      }, 3000)
      
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#060c3d';
      document.title = 'TextUtils - light Mode';
       showAlert("light mode has been enable", "success")
    }
  } 
  return (

 <>
 
  
 <Form  title="Text-Edition" mode={mode} toggleMode={toggleMode} />
<Alerts alert={alert}/> 
 <Forms showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>
         
         
 {/*    
 <Routes>
  <Route path="/home" element={ <Forms showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>   }/>
  <Route path="/about" element={<About mode={mode} toggleMode={toggleMode} /> }/>
 </Routes>
          */}
        

   </>
    
  );
}

export default App;
