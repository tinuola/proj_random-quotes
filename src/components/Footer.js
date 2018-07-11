import React from 'react';

const FooterRow = {
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '90%',
  color: '#333333',
  fontSize: '.9em',
  textAlign: 'right',
  lineHeight: '.5'
}

const Link = {
  color: 'red',
  textDecoration: 'none'
}

const Footer = () => (
  <div style={FooterRow}>
    <p>Built by <a style={Link} href="https://github.com/tinuola/random-quotes">TechTinu</a></p>
    <p>A <a style={Link} href="https://www.freecodecamp.org/">Free Code Camp</a> Project</p>
  </div>
)

export default Footer;