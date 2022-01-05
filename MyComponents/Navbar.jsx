import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
export const Navbar = () => {
    return (
      <nav class="navbar navbar-light ">
      <div class="container-fluid">
        <form className="d-flex">
          <div className="header"> Your city</div>
          <input className="form-control  my-50 me-2" type="search" placeholder="London" aria-label="Search"/>
          {/* <button class="btn btn-outline-primary btn-sm" type="submit">Search</button> */}
        </form>
      </div>
    </nav>
    )
}

