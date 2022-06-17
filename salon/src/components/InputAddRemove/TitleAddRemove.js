import React from 'react';

const TitleAddRemove = (props) => {
    return (
      <table className="table notablePadding quoteTable">
  <thead>
        <tr>
          <th className="text-capitalize">
            {props.data && props.data && props.data.name
              ? props.data.name
              : props.data && props.data.name}
          </th>
          <th>Duration</th>
          <th>Price</th>
          <th></th>
        </tr>
        </thead>
      </table>
      
    );
};

export default TitleAddRemove;