import React from 'react';
import './table.scss';
import { Link } from 'react-router-dom'

const Table = (props) => {
  return (
    <div>
     <table class="table">
       <thead>
         <tr>
           <th>Incident</th>
           <th>Name</th>
           <th>Email</th>
           <th>Phone</th>
           <th>Status</th>
           <th>Status</th>
           <th>Value</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <th>01/23/2016</th>
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

// <tfoot>
//   <tr>
//     <th><abbr title="Incident">Incident</abbr></th>
//     <th><abbr title="Name">Name</abbr></th>
//     <th><abbr title="Email">Email</abbr></th>
//     <th><abbr title="Phone">Phone</abbr></th>
//     <th><abbr title="Status">Status</abbr></th>
//     <th><abbr title="Statute">Status</abbr></th>
//     <th><abbr title="Value">Value</abbr></th>
//   </tr>
// </tfoot>
