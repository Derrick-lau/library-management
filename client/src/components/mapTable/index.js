import React from 'react';


const MapTable = books.map((mapItem) => {
    return(
        <Fragment key={mapItem.id}>
        <tr>
            <th scope="row">{mapItem.id}</th>
            <td>{mapItem.title}</td>
            <td >{mapItem.isbn}</td>
            <td >{mapItem.authors}</td>
            <td ><Button variant="danger" size="sm" onChange={()=>{}}>Detele</Button></td>
        </tr>
        </Fragment>
    )
})


export default MapTable;
