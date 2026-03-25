import Socials from './Socials.jsx';
import Card from './Card.jsx';
import Btn from './Btn.jsx';

const Sidebar = ({ isOpen }) => {
  return (
    // Add the 'open' class conditionally
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sideCon">
        <Card />

        <Btn/>
        <Socials />
      </div>
    </div>
  );
};

export default Sidebar;
