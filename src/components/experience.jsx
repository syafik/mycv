import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Experience extends Component {

	render () {
		return (
      	  <ScrollableAnchor id="experience">
	          <section className="resume-section p-3 p-lg-5 d-flex justify-content-center">
	          <div className="w-100">
	            <h2 className="mb-5">Experience</h2>
	            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
	              <div className="resume-content">
	                <h3 className="mb-0">Fullstack Ruby on Rails Developer</h3>
	                <div className="subheading mb-3">Relevant Mobile, USA</div>
	                <p>
	                	Working Remotely with other team members in various background and countries. Using Ruby on Rails and responsible on backend and frontend stuff. 
Creating new feature and maintenance for Relevant mobile product, especially Mobile Loyalty Restaurant products that has more than 1000 restaurants connected and around 1 million active users.
	                </p>
	              </div>
	              <div className="resume-date text-md-right">
	                <span className="text-primary">October 2012 - Present</span>
	              </div>
	            </div>
	            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
	              <div className="resume-content">
	                <h3 className="mb-0">Ruby on Rails Team Lead Developer</h3>
	                <div className="subheading mb-3">41Studio, Indonesia</div>
	                <p>
	                	1. Managing, Guiding, Supporting my team to finish the project. <br />
2. Explore new technology on web development.<br />
3. Responsible for Database Design based on client specification detail.
	                </p>
	              </div>
	              <div className="resume-date text-md-right">
	                <span className="text-primary">May 2011 - September 2012</span>
	              </div>
	            </div>
	            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
	              <div className="resume-content">
	                <h3 className="mb-0">Web Developer</h3>
	                <div className="subheading mb-3">Ascend Points, Indonesia</div>
	                <p>
	                	1. Converted mock-ups into HTML, JavaScript, AJAX and JSON. <br />
2. Utilised programming capabilities in Ruby on Rails, SQL and JavaScript and other libraries as needed.<br />
3. Kept abreast of emerging technologies, software and trends, and applied them to projects.<br />
4. Oversaw troubleshooting of technical issues to solve problems within a reasonable time frame.<br />
	                </p>
	              </div>
	              <div className="resume-date text-md-right">
	                <span className="text-primary">February 2008 - September 2010</span>
	              </div>
	            </div>
	          </div>
	        </section>
          </ScrollableAnchor>
		)
	}
}