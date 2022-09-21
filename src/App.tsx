import CartItems from "./Components/CartItems";
import Navbar from "./Components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <CartItems />
            </div>
        </>
    );
}

export default App;
