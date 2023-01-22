const  Category = ()=>{

    return (
        <>
        <div className="categories__item set-bg"  
        style={{backgroundImage:`url(${
            process.env.PUBLIC_URL+"img/categories/category-4.jpg"})`}}>
                <div className="categories__text">
                  <h4>Cosmetics</h4>
                  <p>159 items</p>
                  <a href="#">Shop now</a>
                </div>
              </div>
        </>
    )
}
export default Category