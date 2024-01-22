// src/components/navigation/Sidebar.js

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav>
      <h1>side bar content</h1>
      <ul>
        <li>
          <Link to="/modules/1">Module 1</Link>
        </li>
        <li>
          <Link to="/components/1">Component 1</Link>
        </li>
        <li>
          <Link to="/elements/1">Element 1</Link>
        </li>
        <li>
          <Link to="/functions/1">Function 1</Link>
        </li>
        {/* ... other links */}
      </ul>
    </nav>
  );
}

export default Sidebar;
