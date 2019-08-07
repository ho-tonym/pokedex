import React from 'react'

const WeaknessAdvantage = ({
  take4,
  take2,
  take05,
  take025,
  take0,
}) => (
  <section id="bot-nav__weakness-advantage">
    {take4.length > 0
      && (
      <div className="types" id="take4">
        <h3>Take 4x:</h3>
        {take4}
      </div>
      )}
    {take2.length > 0
      && (
      <div className="types" id="take2">
        <h3>Take 2x:</h3>
        {take2}
      </div>
      )}
    {take05.length > 0
      && (
      <div className="types" id="take05">
        <h3>Take 0.5x:</h3>
        {take05}
      </div>
      )}
    {take025.length > 0
      && (
      <div className="types" id="take025">
        <h3>Take 0.25x:</h3>
        {take025}
      </div>
      )}
    {take0.length > 0
      && (
      <div className="types" id="take0">
        <h3>Take 0x:</h3>
        {take0}
      </div>
      )}
  </section>
)

WeaknessAdvantage.defaultProps = {
  take4: [],
  take2: [],
  take05: [],
  take025: [],
  take0: [],
};

export default WeaknessAdvantage
