import React from 'react'
import WeaknessList from './WeaknessList'

const WeaknessAdvantage = ({ defence }) => (
  <section id="bot-nav__weakness-advantage">
    <WeaknessList typeArray={defence.take4} id="take4" title="Take 4x:" />
    <WeaknessList typeArray={defence.take2} id="take2" title="Take 2x:" />
    <WeaknessList typeArray={defence.take05} id="take05" title="Take 0.5x:" />
    <WeaknessList typeArray={defence.take025} id="take025" title="Take 0.25x:" />
    <WeaknessList typeArray={defence.take0} id="take0" title="Take 0x:" />
  </section>
)

export default WeaknessAdvantage
