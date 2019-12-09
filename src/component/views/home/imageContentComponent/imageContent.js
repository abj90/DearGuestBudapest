import React from 'react';
import {Link} from 'react-router-dom';
import './ImageContent.css';

class ImageContent extends React.Component{
    renderList =()=>{
        const item = this.props.data;
        return(
                
                <div className="row justify-content-center">    
                    <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 image-left">
                        <img src={require(`../../../.././asset/images/home/${item.imageA}`)} className='img-fluid p-2 m-2 mx-auto d-block'/>
                        <img src={require(`../../../.././asset/images/home/${item.imageB}`)} className='img-fluid p-2 m-2 mx-auto d-block'/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-7 col-xl-7 wrapper3-left">
                        <div className='img-fluid'>
                            <img src={require(`../../../.././asset/images/home/${item.imageC}`)} className='align-self-center'/>
                        </div>
                        <div className='content-title'>
                            <Link to='/Expa-life-in-Budapest'><h1>{item.title}</h1></Link>
                        </div>
                        <div className='content'>
                            <p>{item.content}</p>
                        </div>
                    </div>
                </div>
                
                )
    }
    
    render(){
        return(
            <div className='container-fluid homeWrapper3'>
                {this.renderList()}        
            </div>
        )
    }    
}

export default ImageContent;

