import { Link, useLocation } from "react-router-dom";
import "../styles/Breadcrumbs.css";
import generateCrumbs from "../js/generateCrumbs";

export default function Breadcrumbs() {
  const location = useLocation()
  const crumbs = generateCrumbs(location);
  return (
    <nav className="nav">
      {crumbs.map((crumb, idx) => (
        <span key={idx}>
          <Link to={crumb.path}>
            {crumb.label}
          </Link>
          {idx < crumbs.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
};
