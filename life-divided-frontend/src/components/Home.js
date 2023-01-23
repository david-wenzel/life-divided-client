import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home(sections) {
  return (
    <div id='home'>
      <h1 className='logo'><span id='blur'>LIFE</span>/  <span id='life'>divided</span></h1>
      <p id='about'>The process of dividing one's life into specific areas of concern is a crucial aspect of goal-setting and personal development. This practice allows individuals to compartmentalize their various responsibilities and objectives, thereby facilitating the creation of targeted and actionable plans to achieve them. By breaking down one's life into distinct areas of focus, such as career, health, relationships, personal growth, and finances, individuals are able to identify the specific steps required to achieve their goals in each area and allocate the appropriate resources to them. Additionally, by keeping track of progress in each area, individuals are able to adjust their plans as necessary and ensure that they are making steady progress towards their overall objectives. Furthermore, by regularly reviewing and re-evaluating the different areas of concern, individuals can ensure that they are not neglecting any important aspect of their lives and that their goals are aligned with their values and priorities. In essence, dividing one's life into areas of concern serves as a means to effectively organize and manage one's responsibilities and objectives, ultimately leading to the attainment of personal and professional goals.  </p>
      <NavLink id='enterButton' to={'/sections'}>Separate Your Concerns</NavLink>
    </div>
  )
}
