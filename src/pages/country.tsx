import '../css/country.css';
import React, { Suspense, lazy } from 'react';
import Loading from "../Component/Loading";
const MyComponent = lazy(() => import('../Component/MyComponent'))

export default function Country() {
    return (
        <div className="all">
            <Suspense fallback={<Loading/>}>
                <MyComponent/>
            </Suspense>
        </div>
    );
}
