import { useState } from 'react';

function MyAlert(props) {
  const [showAlert] = useState(true);


  return (
    <>
      {showAlert && (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible`} role="alert">
          <strong>{props.alert.type}</strong>: {props.alert.msg}
          
        </div>
      )}
    </>
  );
}

export default MyAlert;