import { Link } from 'react-router-dom';
import './index.css';
import Image1 from '../../asset/images/image 3.png';
import Image2 from '../../asset/images/image 4.png';
import Image3 from '../../asset/images/image 8.png';
import Image4 from '../../asset/images/image 6.png';
import Image5 from '../../asset/images/image 7.png';
import Icon from '../../asset/icon/Rectangle.png';

const Index = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-sm-5 text-center">
                        <img className="w-100" src={Image1} alt="" />
                        <div className="d-flex mt-3">
                            <div className="w-25 p-1"><img className="w-100" src={Image2} alt="" /></div>
                            <div className="w-25 p-1"><img className="w-100" src={Image3} alt="" /></div>
                            <div className="w-25 p-1"><img className="w-100" src={Image4} alt="" /></div>
                            <div className="w-25 p-1"><img className="w-100" src={Image5} alt="" /></div>
                        </div>
                        <p className="mb-0 text-left mt-5"><i className='fas fa-shipping-fast'></i> FREE SHIPPING OVER S100 PURCHASE</p>
                    </div>
                    <div className="col-12 col-sm-6 position-relative">
                        <p className="mb-0">MEN'S SHOE</p>
                        <h1 className="mb-0 font-weight-bold">NIKE AIR EDGE 270</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <div className="d-flex">
                            <div className="btnVideo text-center">
                                <img src={Icon} alt="" />
                            </div>
                            <h3 className="mb-0 ml-3">PLAY VIDEO</h3>
                        </div>
                        <h4 className="mt-3 font-weight-bold">SELECT SIZE (US)</h4>
                        <div className="d-flex w-75">
                            <div className="row">
                                <div className="col px-1">
                                    <div className="btnSize text-center border ">
                                        <h4 className="mb-0">8</h4>
                                    </div>
                                </div>
                                <div className="col px-1">
                                    <div className="btnSize text-center border ">
                                        <h4 className="mb-0">8</h4>
                                    </div>
                                </div>
                                <div className="col px-1">
                                    <div className="btnSize text-center border ">
                                        <h4 className="mb-0">8</h4>
                                    </div>
                                </div>
                                <div className="col px-1">
                                    <div className="btnSize text-center border ">
                                        <h4 className="mb-0">8</h4>
                                    </div>
                                </div>
                                <div className="col px-1">
                                    <div className="btnSize text-center border active">
                                        <h4 className="mb-0">8</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex w-75 mt-2">
                            <div className="row">
                                <div className="col px-1">
                                    <div className="btnSize text-center border ">
                                        <h4 className="mb-0">8</h4>
                                    </div>
                                </div>
                                <div className="col px-1">
                                    <div className="btnSize text-center border ">
                                        <h4 className="mb-0">8</h4>
                                    </div>
                                </div>
                                <div className="col px-1">
                                    <div className="btnSize text-center border ">
                                        <h4 className="mb-0">8</h4>
                                    </div>
                                </div>
                                <div className="col px-1">
                                    <div className="btnSize text-center border ">
                                        <h4 className="mb-0">8</h4>
                                    </div>
                                </div>
                                <div className="col px-1">
                                    <div className="btnSize text-center border">
                                        <h4 className="mb-0">8</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 className="mt-3 font-weight-bold">SELECT COLORS</h4>
                        <div className="d-flex ">
                            <div className="colors active" style={{background:'red'}}></div>
                        </div>
                        <div className="bg-dark text-white p-2 btnBag font-weight-bold position-absolute"><Link to="/checkout" className="text-white">ADD TO BAG - $95.97</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;