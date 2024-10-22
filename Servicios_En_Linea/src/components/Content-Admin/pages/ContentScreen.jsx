

import { useSelector } from 'react-redux'
import { useState } from 'react'
import { ContentLayout } from '../layout/ContentLayout'
import { GridProducts } from '../components'
import { ProductDetail } from '../components/ProductDetail'


export const ContentScreen = () => {

  const [ IdProductAF, setIdProductAF] = useState(0);
  const [ showProductDetail, setShowProductDetail] = useState(false);

  return (
    <ContentLayout>
      <div className="d-flex bd-highlight mb-2 justify-content-center">
        <div className="p-2 bd-highlight  ">
          <h4 className='color-title'>Productos Activo Fijo</h4>
        </div>
      </div>      

      <div className="row mt-5">
        {
          showProductDetail ? ( 
          <ProductDetail setIdProductAF={setIdProductAF} setShowProductDetail={ setShowProductDetail }/>
        ) : (<GridProducts setIdProductAF={setIdProductAF} setShowProductDetail={ setShowProductDetail } />)
        }
      </div>     
    </ContentLayout>
  )
}
