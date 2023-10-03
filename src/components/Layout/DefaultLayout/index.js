import Header from './Header';
import Nav from './Nav-bar';
import Footer from './Footer';
function DefaultLayout({ children, loged, setlog }) {
    return (
        <div>
            <div className="default-layout">
                <Nav loged = {loged} setlog = {setlog}/>
                <div className="container">
                    <Header setlog={setlog} loged={loged}/>
                    <div className="content">{children}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
