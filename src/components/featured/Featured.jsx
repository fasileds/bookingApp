import "./featured.css";

export default function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImage"
          src="https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="featuredTitle">
          <h1>Dubai</h1>
          <h1>123</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImage"
          src="https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="featuredTitle">
          <h1>Losangeles</h1>
          <h1>123</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImage"
          src="https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="featuredTitle">
          <h1>Greeck</h1>
          <h1>123</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImage"
          src="https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="featuredTitle">
          <h1>Rome</h1>
          <h1>123</h1>
        </div>
      </div>
    </div>
  );
}
