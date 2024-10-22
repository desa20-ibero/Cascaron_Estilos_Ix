import { FaRegEdit} from 'react-icons/fa'
import { GridActionsCellItem } from '@mui/x-data-grid'


export const ActivoFijoColum = [
  {
    field: 'id',
    headerName: 'Id',
    width: 30,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    editable: false,
    hide:true
  },
  {
    field: 'activo',
    headerName: 'Activo',
    width: 100,
    headerClassName: 'super-app-theme--header',
    editable: false,
    headerAlign: 'center',
  },
  {
    field: 'marca',
    headerName: 'Marca',
    width: 150,
    headerClassName: 'super-app-theme--header',
    editable: false,
    headerAlign: 'center',
  }, 
  {
    field: 'modelo',
    headerName: 'Modelo',
    width: 200,
    headerClassName: 'super-app-theme--header',
    editable: false,
    headerAlign: 'center',
  },
  {
    field: 'serie',
    headerName: 'Serie',
    width: 100,
    headerClassName: 'super-app-theme--header',
    editable: false,
    headerAlign: 'center',
  },
  {
    field: 'descripcion',
    headerName: 'Descripcion',
    width: 300,
    minWidth: 300,
    maxWidth: 500,
    headerClassName: 'super-app-theme--header',
    editable: false,
    headerAlign: 'center',
  },
  {
    field: 'resguardo',
    headerName: 'Resguardo',
    width: 100,
    headerClassName: 'super-app-theme--header',
    editable: false,
    headerAlign: 'center',
  },
  {
    field: 'estatus',
    headerName: 'Estatus',
    width: 100,
    headerClassName: 'super-app-theme--header',
    editable: false,
    headerAlign: 'center',
  },
  {
    field: 'EditarColumn',
    headerName: 'Editar',
    type: 'actions',
    width: 100,
    headerClassName: 'super-app-theme--header',
    editable: false,
    getActions: () => {
      return [
        <>
          <GridActionsCellItem
            label="Edit"
            icon={<FaRegEdit size={'1.5em'} className="actionsCell" />}
          />
        </>,
      ]
    },
  }, 
  // {
  //   field: 'fecha',
  //   headerName: 'Fecha',
  //   width: 200,
  //   headerClassName: 'super-app-theme--header',
  //   editable: false,
  //   headerAlign: 'center',
  //   valueFormatter: params => 
  //   moment(params?.value).format('DD/MM/YYYY'),
  // },
 
]
