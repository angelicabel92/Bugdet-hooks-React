import React from 'react';

const ErrorComponent = ({message}) => ( 
    <p className="alert alert-danger error">{message}</p>
);

export default ErrorComponent;