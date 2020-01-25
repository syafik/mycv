import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Interest extends Component {

	render() {
		return (
      	  <ScrollableAnchor id="interests">
	          <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
		          <div className="w-100">
		            <h2 className="mb-5">Interests</h2>
		            <p>Apart from being a web developer, I enjoy most of my time being outdoors especially in sport activity. 
		            Every week, i usually spend my time to do Soccer, Running and Cycling..</p>
		            <p className="mb-0">When forced indoors, I like playing game DOTA2 and also watching movies, especially action movies and I spend a large amount of my free time exploring the latest technology.</p>
		          </div>
	          </section>
          </ScrollableAnchor>
		)
	}
}