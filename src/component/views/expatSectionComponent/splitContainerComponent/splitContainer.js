import React from "react";
import "./splitContainer.css";

const SplitContainer = props => {
  const item = props.data;
  return (
    <div className="container-fluid wrapper2 spotlight">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 primary">
          <div className="style1">
            <h2>{item.title}</h2>
            <div className="content">
              <h3>{item.titleContent1}</h3>
              <p>{item.content1}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 secondary">
          <div className="d-flex flex-column">
            <div className="style2">
              <h3>{item.titleContent2}</h3>
              <p>{item.content2a}</p>
              <p>{item.content2b}</p>
            </div>
            <div className="style3">
              <h3>{item.titleContent3}</h3>
              <p>{item.content3}</p>
              {/*
							<p><span style={{color:'#f06862'}}>what to say in case you need to call an ambulance in Hungarian?:</span></p> 
							<p>Halló! Kérem segítsen! Küldjön egy mentőt, kérem! A címem...</p> 
						*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitContainer;
