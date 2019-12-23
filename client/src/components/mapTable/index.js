import React  from 'react';


const MapBooks = ({id, title, isbn, authors}, i) => (
    <tr key={i}>
        <th scope="row">{id}</th>
        <td>{title}</td>
        <td >{isbn}</td>
        <td >{authors}</td>
    </tr>
)

export {MapBooks};
