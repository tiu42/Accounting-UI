import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { publicRoute, privateRoute } from '~/routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import { useState } from 'react';
function App() {
    const [logedin, setLogedin] = useState(false);
    return (
        <Router>
            <Routes>
                {publicRoute.map((route, index) => {
                    const Layout = route.layout || DefaultLayout;
                    const Page = route.element;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout loged = {logedin} setlog={setLogedin}>
                                    <Page loged = {logedin} setlog={setLogedin}/>
                                </Layout>
                            }
                        />
                    );
                })}
                {privateRoute.map((route, index) => {
                    const Layout = route.layout || DefaultLayout;
                    const Page = route.element;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout loged = {logedin} setlog={setLogedin}>
                                    <Page loged = {logedin} setlog={setLogedin}/>
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
