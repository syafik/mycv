import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Skill extends Component {

	render () {
		return (
      	  <ScrollableAnchor id="skills">
	          <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
	          <div className="w-100">
	            <h2 className="mb-5">Skills</h2>
	            <div className="subheading mb-3">Programming Languages &amp; Tools</div>
	            <ul className="list-inline dev-icons">
	              <li className="list-inline-item">
	                <i className="fab fa-html5" />
	              </li>
	              <li className="list-inline-item">
	                <i className="fab fa-css3-alt" />
	              </li>
	              <li className="list-inline-item">
	                <i className="fab fa-js-square" />
	              </li>
	              <li className="list-inline-item">
	                <i className="fab fa-react" />
	              </li>
	              <li className="list-inline-item">
	                <i className="fab fa-digital-ocean" />
	              </li>
	              <li className="list-inline-item">
	                <i className="fab fa-github" />
	              </li>
	              <li className="list-inline-item">
	                <i className="fab fa-npm" />
	              </li>
	              <li className="list-inline-item">
	                <i className="fab fa-skype" />
	              </li>
	              <li className="list-inline-item">
	                <i className="fab fa-slack" />
	              </li>
	              <li className="list-inline-item">
	                <i className="fab fa-jira" />
	              </li>
	              <li className="list-inline-item">
	                <i className="fab fa-trello" />
	              </li>
	              <li className="list-inline-item">
	                <i className="fab fa-php" />
	              </li>
	              <li className="list-inline-item">
	                <i className="fab fa-java" />
	              </li>
	            </ul>
	            <div className="subheading mb-3">Usually working with : </div>
	            <ul className="fa-ul mb-0">
	              <li>
	                <i className="fa-li fa fa-check" />
	                  Backend Development, Building REST API
	              </li>
	              <li>
	                <i className="fa-li fa fa-check" />
	                  Ruby on Rails Web Development
	              </li>
	              <li>
	                <i className="fa-li fa fa-check" />
	                Database Postgresql and Mysql</li>
	              <li>
	                <i className="fa-li fa fa-check" />
	                Cross Functional Teams</li>
	              <li>
	                <i className="fa-li fa fa-check" />
	                Agile Development &amp; Scrum</li>
	            </ul>
	          </div>
	        </section>
          </ScrollableAnchor>
		)
	}
}