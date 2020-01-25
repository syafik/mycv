import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Education extends Component {

	render() {
		return (
      	  <ScrollableAnchor id="education">
	          <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
	          <div className="w-100">
	            <h2 className="mb-5">Education</h2>
	            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
	              <div className="resume-content">
	                <h3 className="mb-0">Polytechnic of Bandung, Indonesia</h3>
	                <div className="subheading mb-3">Diploma of Computer Engineering</div>
	              </div>
	              <div className="resume-date text-md-right">
	                <span className="text-primary">2004 - 2007</span>
	              </div>
	            </div>
	            <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
	              <div className="resume-content">
	                <h3 className="mb-0">Computer University, Indonesia</h3>
	                <div className="subheading mb-3">Informatic Engineering</div>
	              </div>
	              <div className="resume-date text-md-right">
	                <span className="text-primary">August 2009 - Present</span>
	              </div>
	            </div>
	          </div>
	        </section>
        </ScrollableAnchor>
		)
	}
}