import Category from "./category"

const Categories = ()=>{



return (
    <>
    
    {/* Categories Section Begin */}
  <section className="categories">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 p-0">
        <Category/>

        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
              <Category/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
            <Category/>

            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
            <Category/>

            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
            <Category/>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Categories Section End */}
    </>
)
}

export default Categories