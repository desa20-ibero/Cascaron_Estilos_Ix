import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import { QuickSearchToolbar } from './QuickSearchToolbar'
import { SinRegistros } from './SinRegistros'

export const GeneralDataTable = ({ rows, columns, actions }) => {
  const [pageSize, setPageSize] = useState(5)
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });
  
  const rowPerPage = [5, 10, 20, 50]


  if (rows.length == 0) {
    return <SinRegistros />
  }
  return (
    <div className="row">
      <div className="col-md-12">
      <Box id="box" sx={{ width: "100%" }} display="flex" justifyContent="space-between">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSizeOptions={rowPerPage}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              slots={{ toolbar: QuickSearchToolbar }}
              onCellClick={actions}
              autoHeight
            />
          </Box>
      </div>
    </div>
  )
}
