import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

export default class About extends Component {
  render() {
    return (
      <ScrollableAnchor id="about">
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div className="w-100">
              <h1 className="mb-0">Syafikli
                <span className="text-primary">Musyafako</span>
              </h1>
              <div className="subheading mb-5">
                <a href="mailto:name@email.com">syafikli_musyafako@yahoo.com</a>
              </div>
              <p className="lead mb-5">
                Motivated IT developer with 9 years of progressive experience in the mid till high level industry. Offering expertise in Ruby on Rails, Database MySQL, Postgresql, 3rd Party connectivity and other trend technologies. Energetic self-starter and team builder able to navigate high-stress situations and achieve goals on time. 
              </p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/syafikli/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://github.com/syafik" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" />
                </a>
                <a href="https://twitter.com/syafikli" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.facebook.com/syafikli" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.instagram.com/syafikli" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </section>
        </ScrollableAnchor>
      )
  }
}
