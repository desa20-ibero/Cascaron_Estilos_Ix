import { MdOutlineKeyboardBackspace } from "react-icons/md";

export const ProductDetail = ({setIdProductAF, setShowProductDetail}) => {

    const handleCloseDirectories = () => {
        setShowProductDetail(false);
        setIdProductAF(0);
        // setIsDisabled(false);
        // setModuleName("");
        //falta limpiar el id del modulo seleccionado
      }
        
    
      return (
        <div>
          <div className="d-flex justify-content-start mt-4 mb-2">
            <MdOutlineKeyboardBackspace
              className="pointer"
              style={{ fontSize: '2em' }}
              onClick={handleCloseDirectories}
            />      
        </div>
    
        <div className="row">
            <div className="col-md-12">
            <h5 style={{marginLeft:'25px'}}>Módulo</h5>
            </div>
        </div>    
        
        </div>
      )
}
