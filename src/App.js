import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { publicRoute, privateRoute } from '~/routes';
import DefaultLayout from './components/Layout/DefaultLayout';
function App() {
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
                                <Layout>
                                    <Page />
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
                                <Layout>
                                    <Page />
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
