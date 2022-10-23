import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// @mui
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
// data
import { supabase } from '../../../components/supabaseClient';
// components
import Iconify from '../../../components/iconify/Iconify';



// ----------------------------------------------------------------------

const columns = [
  {
    field: 'earliest_date',
    headerName: 'Date',
    width: 120,
  },
  {
    field: 'funding_amount',
    headerName: 'Amount',
    width: 160,
  },
  {
    field: 'funding_round',
    headerName: 'Round',
    width: 160,
  },
  {
    field: 'company_name',
    headerName: 'Company',
    width: 120,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   flex: 1,
  //   valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
  // {
  //   field: 'action',
  //   headerName: ' ',
  //   width: 80,
  //   align: 'right',
  //   sortable: false,
  //   disableColumnMenu: true,
  //   renderCell: () => (
  //     <IconButton>
  //       <Iconify icon="eva:more-vertical-fill" />
  //     </IconButton>
  //   ),
  // },
];

const DataGridFunds = () => {
  const [tableData, setTabledata, data] = useState ([]);
  console.log("tableData--", tableData)

  const [rows, setRows] = useState (tableData);

  useEffect(() => {
    getFundsData();
  }, []);

  async function getFundsData() {
    const { data } = await supabase
    .from('FundingRoundsDemo')
    .select()
    setTabledata(data)
    console.log("data--", data);
  }

  return <DataGrid 
  columns={columns}
  rows={tableData}
  getRowId={(row: any) => row.id}
  // checkboxSelection
  // disableSelectionOnClick 
  components={{
    Toolbar: GridToolbar,
  }}
  />;

}

// DataGridBasic.propTypes = {
//   data: PropTypes.array,
// };

export default DataGridFunds 
