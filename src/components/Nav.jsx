import { Link } from 'react-router-dom';


function Nav() {
     return (
          <nav className='nav'>
               <Link to="/">
                    <div>Crypto Prices</div>
               </Link>
               <Link to='/currencies'>
                    <div>Currencies</div>
               </Link>
          </nav>
     );
}

export default Nav;






// import { Link } from "react-router-dom";

// export default function Nav(props) {
//   return (
//     <div className="nav">
//       <Link to="/">
//         <div>CRYPTO PRICES</div>
//       </Link>
//       <Link to="/currencies">
//         <div>CURRENCIES</div>
//       </Link>
//     </div>
//   );
// }
