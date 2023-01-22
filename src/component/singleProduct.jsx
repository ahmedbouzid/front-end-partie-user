
import {useState, useEffect} from "react";
import productService from "../service/productService";

const SingleProduct=()=>{
    const [inputText, setInputText] = useState("");

    const [product,setProduct ]=useState()
    const getAll=()=>{
        productService.getAll().then((res)=>{
            setProduct(res.data.data)

        }).catch((err)=>{
            console.log(err)
        })
    }
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
    const filteredData = product?.filter((el) => {
        if (inputText === '') {
            return el;
        }
        else {
            return el.reference.toLowerCase().includes(inputText)
        }
    })
useEffect(()=>{
    getAll()
},[])
    return (
      <>
      <div className="col-12 " style={{textAlign:"center" ,margin:"2rem 0 3rem 0"}}
>
        <input    
         id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={inputHandler}
          style={{
            width:"30%",
            margin:"2rem 0",
            height:"50%"
          }}
          />

      </div>
      
      {filteredData?.map((item,index)=>{
     return ( <> 

        <div className="col-lg-3 col-md-4 col-sm-6 mix women">
        <div className="product__item">
            <div className="product__item__pic set-bg" 
            style={{backgroundImage:`url(${"http://localhost:4440/getImage/"
            + item.galeries[0].name})`}}
        >
                <div className="label new">New</div>
                <ul className="product__hover">
                    <li><a href="img/product/product-1.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                    <li><a href="#"><span className="icon_heart_alt" /></a></li>
                    <li><a href="#"><span className="icon_bag_alt" /></a></li>
                </ul>
            </div>
            <div className="product__item__text">
                <h6><a href="#">{item.reference}</a></h6>
                <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                </div>
                <div className="product__price">{item.price}</div>
            </div>
        </div>
    </div>
    </>
     )
    
      })}
        
      </>
    )
}
export default SingleProduct;
