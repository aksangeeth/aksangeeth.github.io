import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/"><i className="las la-home"></i></Link>
      <Link to="/social"><i className="las la-photo-video"></i></Link>
      <Link to="/work"><i className="las la-briefcase"></i></Link>
    </nav>
  );

}

export default BottomNav;