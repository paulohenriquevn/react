import React from 'react';
import { TableStyle } from './table.style';

const Table = props => (
  <TableStyle striped>
    <thead>
      <tr>
        {props.header.map(item => (
          <th>{item.titulo}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {props.data.map(item => (
        <tr key={item.id}>
          {props.header.map(headerItem => (
            <td>{item[headerItem.valor]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </TableStyle>
);

export default Table;
