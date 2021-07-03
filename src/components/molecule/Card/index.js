import React from 'react';
import {Link} from 'react-router-dom'
import Image1 from '../../../asset/images/image 3.png';
import './index.css';

const Card = ({data,id}) => {
    return (
        <>
            <div className="col-12 col-sm-3 mb-4">
              <Link to="/detail-product" className="Card">
                  <img className="img-fluid" src={Image1} alt=">{data.name}" />
                  <div className="d-flex mt-2 px-1">
                    <h6 className="mb-0 w-75 font-weight-bold text-dark">{data.name}</h6>
                    <p className="mb-0 w-25 fz12 text-right text-dark">${data.price}</p>
                  </div>
                  <p className="mb-0 fz11 text-dark px-1">Men Shoes</p>
              </Link>
            </div>
        </>
    )
}

const Memoized = React.memo(Card)
export default Memoized;
