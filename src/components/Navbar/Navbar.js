import React from "react";
import { Link} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container">
            <Link to="/" className="navbar-brand fs-3 ubuntu">
              Simpsons 
            </Link>
          </div>
        </nav>
      );
};

export default Navbar;