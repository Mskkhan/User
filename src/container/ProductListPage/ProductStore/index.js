import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../action";
import { generatePublicUrl } from '../../../urlConfig';
import "./style.css";

import { Link } from "react-router-dom";
import Card from "../../../component/UI/Card";
import { MaterialButton } from "../../../component/Material";
import Rating from "../../../component/UI/Rating";
import Price from "../../../component/UI/Price";

/**
 * @author
 * @function ProductStore
 **/

const ProductStore = (props) => {

  const product = useSelector(state => state.product);
  const [priceRange, setPriceRange] = useState(
    {
      under5k: 5000,
      under10k: 10000,
      under15k: 15000,
      under20k: 20000,
      under30k: 30000,
      under40k: 40000,

    }
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(props);
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);
  return (
    <>



      {
        Object.keys(product.productsByPrice).map((key, index) => {
          return (
            <Card
            headerLeft={`${props.match.params.slug}  under ${priceRange[key]}`}
            headerRight={
              <MaterialButton
                title={"VIEW ALL"}
                style={{
                  width: "96px",
                }}
                bgColor="#2874f0"
                fontSize="12px"
              />
            }
            style={{
              width: "calc(100% - 40px)",
              margin: "20px",
            }}
            >
              
              <div style={{ display: "flex" }}>
                {
                  product.productsByPrice[key].map(product =>
                    <Link
                      to={`/${product.slug}/${product._id}/p`}
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "#000",
                      }}
                      className="productContainer">
                      <div className="productImgContainer">
                        <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
                      </div>
                      <div className="productInfo">
                        <div style={{ margin: "5px 0" }}>{product.name}</div>
                        <div>
                          <span>4.3</span>&nbsp;
                          <span>3323</span>
                        </div>

                        <div className="productPrice"> {product.price}</div>
                      </div>

                    </Link>
                  )
                }

              </div>
            </Card>


          );
        })
      }
    </>
  )


}

export default ProductStore;