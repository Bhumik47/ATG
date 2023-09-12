import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "../Svgs/SearchIcon";
import Logo from "../Svgs/Logo";
import DropDownArrow from "../Svgs/DropDownArrow";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-#FFF justify-content-center">
        <div
          class="container-fluid"
          style={{ marginLeft: "4.5rem", marginRight: "4.5rem" }}
        >
          <Logo />
          <form
            className="form-inline mx-auto"
            style={{
              width: "22.5rem",
              height: "2.625rem",
              borderRadius: "21px",
              background: "#F2F2F2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="input-group"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="input-group-append">
                <button
                  style={{
                    borderTopLeftRadius: "50%",
                    borderBottomLeftRadius: "50%",
                    border: "none",
                  }}
                  type="submit"
                >
                  <SearchIcon />
                </button>
              </div>
              <input
                className="search-bar"
                style={{
                  height: "2.625rem",
                  background: "#F2F2F2",
                  border: "none",
                  width: "90%",
                  borderRadius: "21px",
                  outline: "none",
                }}
                type="search"
                placeholder="Search for your favorite groups in ATG"
                aria-label="Search"
              />
            </div>
          </form>
          <div className="sign-in" style={{ display: "flex" }}>
            <p>
              Create account. <span>It’s free!</span>
            </p>
            <DropDownArrow />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
