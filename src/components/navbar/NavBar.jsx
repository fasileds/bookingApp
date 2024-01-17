import "./navbar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navCountiner">
        <span className="logo">FasilBooking</span>
        <div className="navItem">
          <button className="navButton">Register</button>
          <button className="navButton">Log In</button>
        </div>
      </div>
    </div>
  );
}
