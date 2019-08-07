import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
			<section className="colorlib-work" data-section="projects">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">My Work</span>
							<h2 className="colorlib-heading animate-box">Recent Projects</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<div className="project" style={{backgroundImage: 'url(images/logo.png)'}}>
								<div className="desc">
									<div className="con">
									<span>Website</span>
										<h3><i className="icon-chrome"></i> <a href="https://upostwebsite.com/" target="_blank" rel="noopener noreferrer">UPOST (in Progress)</a></h3>
										<h3><i className="icon-github"></i> <a href ="https://github.com/willisc92/upost" target="_blank" rel="noopener noreferrer">Source Code</a></h3>
										<small>
											<ul>
												<li>A personalizable event service platform for the University of Calgary that increases event awareness, while providing an incentivized engagement strategy to eliminate event food waste on campus.</li>
												<li>Built with React.JS, Django, and MySQL.</li>
												<li>Deployed with AWS.</li>
											</ul>
										</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<div className="project" style={{backgroundImage: 'url(images/tesla.PNG)'}}>
								<div className="desc">
									<div className="con">
										<span>Animation</span>
										<h3><i className="icon-chrome"></i> <a href="https://willisc92.github.io/Tesla-Visualization/" target="_blank" rel="noopener noreferrer">Tesla D3 Visualization</a></h3>
										<h3><i className="icon-github"></i> <a href ="https://github.com/willisc92/Tesla-Visualization" target="_blank" rel="noopener noreferrer">Source Code</a></h3>
										<small>
											<ul>
												<li>A visualization to visualize the sentiment regarding Tesla around the world over a couple of months and the reflection in stock price.</li>
												<li>Built with Javascript and D3.</li>
											</ul>
										</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<div className="project" style={{backgroundImage: 'url(images/twitter.png)'}}>
								<div className="desc">
									<div className="con">
										<span>Machine Learning and Data Processing</span>
										<h3><i className="icon-github"></i> <a href ="https://github.com/willisc92/Twitter_sleep_stress.git" target="_blank" rel="noopener noreferrer">Twitter Sleep-Stress Analysis</a></h3>
										<small>
											<ul>
												<li>Performed pre-processing of three months of Twitter data in order to perform supervised and unsupervised machine learning with the goal of determining any relationships between tweets indicating sleep and stress on Twitter.</li>
												<li>Built with Python, Apache Spark, and R.</li>
											</ul>
										</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
      </div>
    )
  }
}
