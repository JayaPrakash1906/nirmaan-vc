import React,{useState, useEffect} from "react";
//import './styles/style.css';
function Notification({isVisible, onClose, children}){
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(()=>{
        if(isVisible)
        {
                setIsAnimating(true);
        }
        else{
            const timer = setTimeout(()=> setIsAnimating(false), 200);
            return () => clearTimeout(timer);
        }
    }, [isVisible])

    if (!isAnimating && !isVisible) {
        return null;
    }
    return(
        <div
        className={`fixed top-[60px] right-[60px] transform translate-x-[-10px] bg-black bg-opacity-25 backdrop-blur-xs flex justify-items-right border-md ${isVisible ? 'animate-show' : 'animate-hide'}`}
        id="wrapper"
        onClick={handleClose}
      >
                    <div className="w-[400px]">
                <div className="bg-gray-200 p-5 rounded ">
                      {children}
                </div>
            </div>
        </div>
    )
}
export default Notification;