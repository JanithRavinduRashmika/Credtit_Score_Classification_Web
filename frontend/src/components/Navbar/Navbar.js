import './Navbar.css'

const Navbar = ({ backgroundColor }) => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className='navbar' style={{ backgroundColor: backgroundColor }}>
        <ul>
            <li>CrediDecode</li>
        </ul>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Insights</li>
            <li onClick={() => scrollToSection('contacts')}>Contacts</li>
        </ul>

        <ul>
            <li>Sign In</li>
            <li>Sign Up</li>
        </ul>

    </div>
  )
}

export default Navbar