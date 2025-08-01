import { useState } from 'react';
import Form from 'react-bootstrap/Form';


export default function Forms(props) {
    const handleUpClick = (event) =>{
        
        let newText = text.toUpperCase();
        setText(newText);
      props.showAlert("converted to uppeCase ", "success")
    } 
    const handlelwClick =(event)=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowerCase ", "success")
    } 
    
const handleOnChange =(event)=>{
       setText(event.target.value);
    }
    const handleClear =(event)=>{
      let newText = "";
      setText(newText);
       props.showAlert("Text Cleared! ", "success")
    }
    const playWord =(event)=>{
      const value = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(value);
 props.showAlert("Listen your text ", "success")
    }

    const[text, setText] = useState('');


  return (
    <>  
    <div className="container" >
        <h1>{props.heading} </h1>
<Form>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
       
        <Form.Control as="textarea" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#2d2c3b':'white',color: props.mode==='dark'?'white':'black', border: props.mode==='dark'?'3px solid white':'3px solid black'  }}  rows={8} />
      </Form.Group>
    </Form>
        
      <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handlelwClick}>Convert to lowerCase</button>
      <button className="btn btn-primary mx-2 " onClick={handleClear}>Clear Text</button>
      <button className="btn btn-primary mx-2 " onClick={playWord}>Listen Your Text</button>
      
    
    <div className="container my-3">
<h1  >Your Text Summary</h1>

<p>{text.split(" ").length-1} words and {text.length} characters</p>
<b>{0.008 * text.split(" ").length} minutes read</b>
<h1>Preview</h1>
<p>{text.length > 0 ? text :"Enter Something in the Textbox to Preview it"}</p>
    </div>
    </div>
    
   
      
    </>
  )
}
