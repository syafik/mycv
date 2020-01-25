import React, { Component } from 'react'
import About from './about'
import Experience from './experience'
import Education from './education'
import Skill from './skill'
import Interest from './interest'

export default class MainContent extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <About></About>
        <hr className="m-0" />
        <Experience></Experience>
        <hr className="m-0" />
        <Education></Education>
        <hr className="m-0" />
        <Skill></Skill>
        <hr className="m-0" />
        <Interest></Interest>
      </div>
      )
  }
}
