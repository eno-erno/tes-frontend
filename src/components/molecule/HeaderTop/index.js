import React from 'react';

const HeaderTop = () => {
    return (
        <>
            <div className="bg-light">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-3">
                    <select className="border-0 fz11 font-weight-bold">
                        <option value="1">Engglish</option>
                        <option value="2">Indonesia</option>
                    </select>
                    </div>
                    <div className="mx-auto fz13 font-weight-bold"><i className='fas fa-shipping-fast'></i> FREE SHIPPING OVER S100 PURCHASE</div>
                    <div className="col-3">
                    <ul className="d-flex mb-0 pl-0 justify-content-end" style={{listStyle:'none'}}>
                        <li className="nav-item">
                            <a className="nav-link fz12 text-dark font-weight-bold" href="#">Shipping</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fz12 text-dark font-weight-bold" href="#">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fz12 text-dark font-weight-bold" href="#">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

const Memoized = React.memo(HeaderTop)
export default Memoized;
