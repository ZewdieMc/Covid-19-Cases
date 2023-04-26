import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import covid from '../assests/images/coronavirus.png';

const NavBar = () => {
  const { name } = useParams();
  return (
    <nav>
      { name && <Link className="back-arrow" to="/"><FaArrowLeft /></Link>}
      <div className="logo">
        <img src={covid} style={{ height: '30px', width: '30px', transition: 'all 0.5s ease' }} alt="" />
        <div><h2>Covid-19 cases</h2></div>
      </div>
      <div className="search">
        <span>search</span>
      </div>
    </nav>
  );
};
export default NavBar;
