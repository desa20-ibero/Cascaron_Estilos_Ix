

import { UseColumn } from "../../../hooks/useColumn";
import { ActivoFijoColum } from "../hooks/ActivoFijoColumn";
import { fakeproductusAF } from "../../../fakeData/fakeProductsAF";
import { GeneralDataTable } from "../../../helpers/GeneralDatatable";

export const GridProducts = ({setIdProductAF, setShowProductDetail}) => {

    //  const { productsAF } = useSelector((state) => state.productsAF) || [];

    const productsAF = fakeproductusAF;

    const handleEdit = ( idProductAF) => {
      setShowProductDetail(true);
      setIdProductAF( idProductAF );
    }  
    
    const actionsGrid = (params) => {
      params.field == 'EditarColumn' ? handleEdit(params.row.id): ''
    }

    const [columns] = UseColumn(ActivoFijoColum)
  
    return (    
        <GeneralDataTable rows={ productsAF } columns={ columns } actions={ actionsGrid }/>    
    )
}
