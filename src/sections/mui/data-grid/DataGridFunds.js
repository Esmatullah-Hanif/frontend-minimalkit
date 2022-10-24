import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// @mui
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { IconButton, Typography } from '@mui/material';
// components
import Iconify from '../../../components/iconify/Iconify';
import { fCurrency, fNumber } from '../../../utils/formatNumber';
import { fDateTime } from '../../../utils/formatTime';

// data
import { supabase } from '../../../components/supabaseClient';


// ----------------------------------------------------------------------

const columns = [
  {
    field: 'pub_date',
    headerName: 'Date',
    width: 175,
    renderCell: (params) =>
    <Typography variant="body2">
      {fDateTime(params.value)}
    </Typography>
  },
  {
    field: 'funding_amount',
    headerName: 'Amount',
    width: 160,
    renderCell: (params) =>
    <Typography variant="body2">
      {fCurrency(params.value)}
    </Typography>
  },
  {
    field: 'funding_round',
    headerName: 'Round',
    width: 160,
  },
  {
    field: 'company',
    headerName: 'Company',
    width: 200,
  },
  {
    field: 'guid',
    headerName: 'Source',
    width: 300,
    renderCell: (params) => 
    <Typography variant="body2" sx={{ textDecoration: 'underline' }} noWrap>
      <a href={`${params.value}`} target="_blank" rel="noreferrer">{params.value} </a>,
    </Typography>
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
    .from('funding_round_news_items')
    .select()
    .order('pub_date', { ascending: false })
    setTabledata(data)
    console.log("data--", data);
  }

  return <DataGrid 
  columns={columns}
  rows={tableData}
  getRowId={(row: any) => row.id}
  components={{ Toolbar: GridToolbar }}
  componentsProps={{
    toolbar: {
      showQuickFilter: true,
      quickFilterProps: { debounceMs: 500 },
    },
  }}
  />;

}

// DataGridBasic.propTypes = {
//   data: PropTypes.array,
// };

export default DataGridFunds 
