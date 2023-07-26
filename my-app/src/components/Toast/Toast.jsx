import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../../assets/css/toastify.css"

function Toast() {

        //     Documentation
        //     https://fkhadra.github.io/react-toastify/introduction
    return   <>
    
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            closeButton={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored" 
            limit={3}
            />
        </>
    
    
    
};


export default Toast;