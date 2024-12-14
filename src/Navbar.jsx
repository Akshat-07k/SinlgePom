import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to={`/`} style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px 20px",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;
