import { Link, useLocation } from 'react-router-dom';
import { showNextTopic } from "../../TeamCComponents/js/script";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function TeamC_Sidebar() {
    const { pathname } = useLocation();
let sidebarTitle = '';
let url = '';

switch (pathname) {

  /* CHAPTER 1 */
  case '/course1_sql':
    sidebarTitle = 'I: The SQL Queries';
    url = '/chapters_sql';
    break;
  case '/course1_svn':
    sidebarTitle = 'I: Subversion Control';
    url = '/chapters_svn';
    break;
  case '/course1_hprog':
    sidebarTitle = 'I: HTML Programming';
    url = '/chapters_hprog';
    break;

    /* CHAPTER 2 */
    case '/course2_sql':
      sidebarTitle = 'II: The SQL Queries';
      url = '/chapters_sql';
      break;
    case '/course2_svn':
      sidebarTitle = 'II: Subversion Control';
      url = '/chapters_svn';
      break;
    case '/course2_hprog':
      sidebarTitle = 'II: HTML Programming';
      url = '/chapters_hprog';
      break;

      /* CHAPTER 3 */
      case '/course3_sql':
        sidebarTitle = 'III: The SQL Queries';
        url = '/chapters_sql';
        break;
      case '/course3_svn':
        sidebarTitle = 'III: Subversion Control';
        url = '/chapters_svn';
        break;
      case '/course3_hprog':
        sidebarTitle = 'III: HTML Programming';
        url = '/chapters_hprog';
        break;
  default:
    sidebarTitle = '-NO TITLE-';
    url = '-URL DATA-'
    break;
}

    return (
        <>
          <div className="container" id="c_sidebar_main" style={{zIndex: '1'}}>
  <div className=" sidebar">
    <hr />
    <span className="d-flex justify-content-center" id="c_sidebar_sidebarTitle">{sidebarTitle}</span>
    <ul className="nav nav-pills flex-column mb-auto">
      {/* START OF SIDEBAR ITEM */}
      <li className="sidebarItem nav-item">
        <a onClick={() => showNextTopic(0)} className="sidebarItems nav-link" aria-current="page" id="c_sidebar_sidebaritems">
          HOME
        </a>
      </li>
      {/* END OF SIDEBAR ITEM */}
    </ul>
    <hr />
    <div className="d-flex justify-content-center"> {/* Added this container for center alignment */}
      <Link to={url} className="buttonReturn text-center" style={{ textDecoration: 'none', color: 'black', display: 'inline-block' }}>
        <div>
          <img src="/pics/return.png" className="c_sidebar_btnReturn" alt="return-icon" />
          <span className="returnTitle" style={{ marginLeft: '5px', color: 'white' }}>Back</span>
        </div>
      </Link>
    </div>
  </div>
</div>

        </>
    )
}

export default TeamC_Sidebar;
