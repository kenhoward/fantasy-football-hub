import React from 'react';
import './Bets.scss';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import TableCell from '@material-ui/core/TableCell';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Paper from '@material-ui/core/Paper';
// import { AutoSizer, Column, SortDirection, Table } from 'react-virtualized';


function Bets() {
  return (
    <div className="spa-container">
        <h2>Bets</h2>
        <div className="bets-container">
          <div className="pending-bets">
            <h4>Pending Bets</h4>
          </div>
          <div className="established-bets">
          <h4>Established Bets</h4>
          </div>
        </div>
    </div>
  )
}

export default Bets;