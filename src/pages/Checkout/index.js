import BagImage from '../../asset/icon/Vector2.png';
import Close from '../../asset/icon/off_close.svg';
import Image from '../../asset/images/details.png';

import './index.css';

const Index = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <h1 className="font-weight-bold mb-0 text-center">YOUR BAG</h1>
                        <div className="">
                            <img src={BagImage} alt="" className="ml-3" style={{width:'1.6rem'}} />
                            <span className="cartTotal position-relative">10</span>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>PRODUCT</th>
                                    <th className="text-center" style={{width:'15%'}}>PRICE</th>
                                    <th className="text-center" style={{width:'15%'}}>QUANTITY</th>
                                    <th className="text-center" style={{width:'15%'}}>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex">
                                            <div className="d-flex align-items-center">
                                                <img src={Close} alt="" style={{cursor:'pointer'}} />
                                                <img src={Image} alt="" className="mx-5" />
                                                <div>
                                                    <h6 className="font-weight-bold mb-0">NIKE AIR EDGE 270</h6>
                                                    <p className="mb-0">Size: 8   Color <span style={{width:'5px',height:'5px',background:'red'}}></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">$97.99</td>
                                    <td className="text-center">
                                        <input type="text" value="1" className="p-2 py-1 text-center border-0" style={{width:'70px',background:'#FAFAFA'}} />
                                    </td>
                                    <td className="text-center">$97.99</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;