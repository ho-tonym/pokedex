import React from 'react'

const InfoSection = ({ id, onClick, title, isOpen, children }) => (
  <>
    <button
      id={id}
      type="button"
      className="collapsible"
      onClick={onClick}
    >
      {title}
      <span />
    </button>
    <div className={`content ${isOpen ? "display-block" : ""}`}>
      {children}
    </div>
  </>
)

InfoSection.defaultProps = {
  id: "",
  onClick: () => null,
  title: "N/A",
  isOpen: false,
  children: "",
};

export default InfoSection
