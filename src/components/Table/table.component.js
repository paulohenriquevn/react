import React from 'react';
import { TableStyle } from './table.style';

const Table = props => (
  <TableStyle striped>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(item => (
        <tr key={item.id}>
          <th scope="row">{item.name}</th>
          <td>{item.description}</td>
          <td>{item.url}</td>
        </tr>
      ))}
    </tbody>
  </TableStyle>
);

export default Table;
