import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>MEng Software Student at University of Calgary <span>2018-2019</span></h2>
                        <p>I recently decided to return to school to gain some skills in the Software domain.  Over the course of a year, I've learned how to apply the fundamentals of:</p>
                        <ul>
                          <li>
                            Object Oriented Programming
                          </li>
                          <li>
                            Full Stack Web Development
                          </li>
                          <li>
                            Data Structures and Algorithms
                          </li>
                          <li>
                            Supervised and Unsupervised Learning
                          </li>
                          <li>
                            Big Data processing
                          </li>
                          <li>
                            Software Requirements and Engineering
                          </li>
                          <li>
                            Software Testing
                          </li>
                          </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Junior Process Engineer at Rheaume Engineering <span>2017-2018</span></h2>
                        <p>Performed PSV sizing studies, basic process equipment sizing, and cost estimation.  Was also responsible for lab scale testing of sand separator product development. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Asset Integrity at ConocoPhillips <span>2015-2015</span></h2>
                        <p>Aided in implementation of integrity management programs for the Surmont Oil Sands processing facility.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Operations Engineering Intern at ConocoPhillips <span>2013-2014</span></h2>
                        <p>Provided technical support to operations engineers and field personnel in the Edson, AB area.  Optimized existing production, performed simulation and modeling, reviewed inactive wells and pipelines, and made recommendations on well site and gathering system compression.  Collaborated with exploration, completions, and facilities personnel on new wells added to the operational base.  </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>BSc Chemical Engineering Student at University of Calgary <span>2010-2015</span></h2>
                        <p>Completed my BSc Chemical Engineering with a cumulative 3.83 GPA.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
