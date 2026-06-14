import { Link, Outlet, Route, Routes } from "react-router-dom";

export default function Nested() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>More Enquiry</h1>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Link to="Student">Student</Link>
        <Link to="Department">Department</Link>
        <Link to="Details">Collage Details</Link>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
