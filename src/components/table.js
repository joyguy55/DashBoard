import React from 'react';
import './table.scss';
import { Link } from 'react-router-dom'

const Table = (props) => {
  return (
    <div className="column is-10">
     <table className="table">
       <thead>
         <tr>
           <th>Incident</th>
           <th>Name</th>
           <th>Email</th>
           <th>Phone</th>
           <th>Status</th>
           <th>Statute</th>
           <th>Value</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <Link to="/Matter">
            <th>01/23/2016</th>
           </Link>
           <td>Spencer J White Sr.</td>
           <td>new@email.com</td>
           <td>(234)-234-2346</td>
           <td>Claim</td>
           <td>0 days</td>
           <td>$ 295</td>
         </tr>
       </tbody>
     </table>
    </div>
  );
}

export default Table;
