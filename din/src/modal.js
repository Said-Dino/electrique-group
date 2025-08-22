import './MyStyle.css'
export default function Modal({isVisible, errorMsg = null}){
    if(isVisible===true)
        {
    return(
        <div id="modal">
            <div id="modal-content">
                <h1 style={{color:errorMsg ? "red" : "green"}}>{errorMsg != null ? errorMsg : "bienvenue chez dans notre platforme"}</h1>
                {/* <h1>the form has been submit successfully</h1> */}
            </div>
        </div>
    );
    } else{
    return (<></>);
}
}
