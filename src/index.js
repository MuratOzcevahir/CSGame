import ReactDOM from "react-dom/client";
import App from "./component/App";
import WoodContext from "./component/context/AppContext";


var reactRoot = ReactDOM.createRoot(document.getElementById("root"))


reactRoot.render(
    <>
        <WoodContext>
            <App />
        </WoodContext>
    </>
);