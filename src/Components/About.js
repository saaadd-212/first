import Accordion from 'react-bootstrap/Accordion';

export default function About(props) {
  
  return (
    <>
    <div className={`container div-${props.mode} bg-${props.mode}`} >
        <h2 className="my-2" >About Us</h2>
          <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0" >
        <Accordion.Button style={{backgroundColor: props.mode==='dark'?'#2d2c3b':'white',color: props.mode==='dark'?'white':'black', border: props.mode==='dark'?'3px solid white':'3px solid black'  }}>Accordion Item #1</Accordion.Button>
        <Accordion.Body style={{backgroundColor: props.mode==='dark'?'#2d2c3b':'white',color: props.mode==='dark'?'white':'black', border: props.mode==='dark'?'3px solid white':'3px solid black'  }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          mt, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" >
        <Accordion.Button style={{backgroundColor: props.mode==='dark'?'#2d2c3b':'white',color: props.mode==='dark'?'white':'black', border: props.mode==='dark'?'3px solid white':'3px solid black'  }}> Accordion Item #2</Accordion.Button>
        <Accordion.Body style={{backgroundColor: props.mode==='dark'?'#2d2c3b':'white',color: props.mode==='dark'?'white':'black', border: props.mode==='dark'?'3px solid white':'3px solid black'  }}>
         
         lore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    

</div>
    </>
  )
}
