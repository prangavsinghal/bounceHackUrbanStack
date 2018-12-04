import React from 'react';

const UploadTemplate = (props) => {

    return (
      <div className="jumbotron">
        <h1 className="display-3">upload</h1>
        <h3>{props.answer}</h3>
        <img src={props.image}/>
      </div>
      );
};

export default UploadTemplate;