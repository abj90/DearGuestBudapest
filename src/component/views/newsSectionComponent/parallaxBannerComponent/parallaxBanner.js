import React from 'react'; 
import {Parallax} from 'react-parallax';
import './parallaxBanner.css';



class ParallaxBanner extends React.Component{
	render(){
		
		return(
			<section>
				<div className='wrapper1'>
					<Parallax bgImage={require(`../../../.././asset/images/newsSection/${'a.png'}`)} strength={500}>
						<div className='banner' style={{width:'100%'}}>
							<div className='title'>
								<h1>News in Hungary</h1>
							</div>
						</div>	  
					</Parallax>
					{/*
					<div className='container'>
								<div className='row justify-content-md-center inner'>
									<div className="col-sm-4 col-md-8 col-lg-4 style1 align-self-start">
										<p>{item.content1}</p>
									</div>
									<div className="col-sm-4 col-md-8 col-lg-4 style2 align-self-end">
										<p>{item.content2}</p>
									</div>
								</div>
							</div>
					<div className='container-fluid spotlight'></div>
				*/}
				</div>
			</section>
		)
	}
}

export default ParallaxBanner;