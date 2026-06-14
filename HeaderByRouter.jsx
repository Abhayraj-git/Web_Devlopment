import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Error from "./ErrorInROuter";
import Nested from "./NestedRouterInHeader";
import UsersList from "./UsersList";
import UserDetail from "./UserListDetails";
import "./HEader.css";
export default function Header() {
  return (
    <div>
      <BrowserRouter>
        <div
          className="0"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "aqua",
            padding: "10px 20px",
            width: "100%",
          }}
        >
          <div className="1">
            <NavLink
              className={({ isActive }) => (isActive ? "LINK active" : "LINK")}
              style={{ textDecoration: "none" }}
              to="/"
            >
              <h1>Logo</h1>
            </NavLink>
          </div>
          <div className="2" style={{ marginLeft: "60px" }}>
            <ul style={{ display: "flex", gap: "20px" }}>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "LINK active" : "LINK"
                  }
                  style={{ textDecoration: "none" }}
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "LINK active" : "LINK"
                  }
                  style={{ textDecoration: "none" }}
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "LINK active" : "LINK"
                  }
                  style={{ textDecoration: "none" }}
                  to="/Contact"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "LINK active" : "LINK"
                  }
                  style={{ textDecoration: "none" }}
                  to="/Collage"
                >
                  Collage
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "LINK active" : "LINK"
                  }
                  style={{ textDecoration: "none" }}
                  to="/Users"
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<h1></h1>} />
            <Route path="/Home" element={<h1>Home</h1>} />
            <Route path="/About" element={<h1>About</h1>} />
            <Route path="/Contact" element={<h1>Contact</h1>} />
            <Route path="/Collage" element={<Nested />}>
              <Route path="Student" element={<h1>Student</h1>} />
              <Route path="Department" element={<h1>Department</h1>} />
              <Route path="Details" element={<h1>College Details</h1>} />
            </Route>
            <Route path="Users" element={<UsersList />} />
            <Route path="Users/:id" element={<UserDetail />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
