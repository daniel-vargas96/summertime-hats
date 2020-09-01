import React from 'react';

export default function ModalOverlay(props) {
  const modalDisplay = props.startMessage ? 'modal-container' : 'modal-container hidden';

  return (
    <div className={modalDisplay}>
      <div className='modal-message-container d-flex flex-column justify-content-center align-items-center p-5'>
        <h1 className="modal-title" id="exampleModalCenterTitle">Notice:</h1>
        <div className='modal-text mt-2'>
          <p>This app is created for demonstration purposes only.
          By clicking the button below, you acknowledge that no purchases
          will be made, no payment processing will be done, and actual
          personal information should not be used at checkout.</p>
          <button className='btn btn-danger' onClick={props.closeNotice}>Accept</button>
        </div>
      </div>
    </div>

  );
}
