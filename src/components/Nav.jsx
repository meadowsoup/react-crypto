import {Link} from 'react-router-dom';


function Nav() {
     return (
          <nav>
               <Link to="/">Price</Link>
               <Link to='/currencies'>Currencies</Link>
          </nav>
     )
}