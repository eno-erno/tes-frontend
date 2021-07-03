import React, {Suspense } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import {Product,DetailProduct,Checkout} from '../../pages'
import {Navbar,HeaderTop} from '../../components/molecule';

export default function Navigation() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HeaderTop />
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Product />
                    </Route>
                    <Route path="/detail-product">
                        <DetailProduct />
                    </Route>
                    <Route path="/checkout">
                        <Checkout />
                    </Route>
                    <Route>
                        <Notfound />
                    </Route>
                </Switch>
            </Router>
        </Suspense>
    );
}
const Notfound = () => {
return (
    <h1>404</h1>
)
}