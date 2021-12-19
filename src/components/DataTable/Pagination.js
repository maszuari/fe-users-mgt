import React from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function Pagination(props){

    const [page, setPage] = React.useState(props.page);
    const [rowsPerPage, setRowsPerPage] = React.useState(props.rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}