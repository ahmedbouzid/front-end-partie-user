import SingleProduct from "./singleProduct"

const NewProduct=()=>{
    return(
    <>

{/* Product Section Begin */}
<section className="product spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="section-title">
          <h4>New product</h4>
        </div>
      </div>
      
    </div>
    <div className="row property__gallery">
     <SingleProduct/>

    </div>
  </div>
</section>
{/* Product Section End */}

        </>
    )
}
export default NewProduct