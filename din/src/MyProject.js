import { useState } from 'react';
import './MyStyle.css';
import Modal from './modal';
import MyInputs from './MyInputs';
import { LoanContext } from './context/Loancontext';
export default function MyProject(){
    const [errorMsg,seterrorMSG] = useState(null)
    const [showModal,setshowModal] = useState(false)
    const [LoanInput,setLoanInput] = useState({
        name_and_lastname:"",
        email:"",
        phoneNmb:"",
        isValid:false,
        scpiality:"",
    });
    const btndisabled = 
    LoanInput.name_and_lastname == "" || 
    LoanInput.email == "" || 
    LoanInput.phoneNmb == "" || 
    LoanInput.isValid == false ||
    LoanInput.scpiality == "" ;
    let btnclasses = "";
    if(btndisabled == true){
        btnclasses = "disb"
    }
    else{
        btnclasses=""
    }
    function HundleFormSubmit(event){
        event.preventDefault();
        const {phoneNmb,email} = LoanInput;
        seterrorMSG(null)
        if(phoneNmb.length < 8 || phoneNmb.length > 12){
            seterrorMSG('error phone number');
        }else if(email.includes('@gmail.com')==false){
            seterrorMSG('please, use an email with the right format < @gmail.com >')
        }
        setshowModal(true);

    }


    function HundleDivClick(){
        if(showModal==true){
            setshowModal(false)
        }
        else{
        }
    }
    
    function deleteSideEffectNameInput(value){
        return(
            setLoanInput({...LoanInput, name_and_lastname:value})
        )
    }
    function deleteSideEffectEmailInput(value){
        return(
            setLoanInput({...LoanInput,email:value})
        )
    }
    function deleteSideEffectPhoneNumbInput(value){
        return(
            setLoanInput({...LoanInput,phoneNmb:value})
        )
    }
    return(
            <div className="flex" onClick={HundleDivClick} style={{flexDirection:"column"}}>
                <form className='flex' id="StyleForm" style={{flexDirection:"column"}}>
                    <h1>Welcome to Elec-dino-platform</h1>
                    <hr></hr>
                    <LoanContext.Provider value={{value:LoanInput.name_and_lastname, handleChange : deleteSideEffectNameInput ,labelTitle:"First name and Last name",placeHolder:"First name & last name"}}>
                    <MyInputs />
                    </LoanContext.Provider>

                    <LoanContext.Provider value={{value:LoanInput.email, handleChange : deleteSideEffectEmailInput ,labelTitle:"Email",placeHolder:"exemple@gmail.com"}}>
                        <MyInputs  />
                    </LoanContext.Provider>
                    

                    <LoanContext.Provider value={{value:LoanInput.phoneNmb, handleChange : deleteSideEffectPhoneNumbInput ,labelTitle:"Phone Number",placeHolder:"Enter your phone number"}}>
                        
                        <MyInputs />
                    </LoanContext.Provider>
                    

                    {/* <label>Name & Lastname</label>
                    <input value={LoanInput.name_and_lastnam} onChange={(event)=>{
                        setLoanInput({...LoanInput, name_and_lastnam:event.target.value})
                    }} /> */}

                    {/* <label>Email</label>
                    <input placeholder='exemple@gmail.com' value={LoanInput.email} onChange={(event)=>{
                        setLoanInput({...LoanInput,email:event.target.value})
                    }} /> */}

                    {/* <label>Phone Number</label>
                    <input type='number' value={LoanInput.phoneNmb} onChange={(event)=>{
                        setLoanInput({...LoanInput,phoneNmb:event.target.value})
                    }}/> */}

                    <label style={{marginTop:"30px"}}>are you students</label>
                    <input type='checkbox' checked={LoanInput.isValid} onChange={(event)=>{
                        setLoanInput({...LoanInput,isValid:event.target.checked})
                    }}/>
                    <label style={{marginBottom:"5px"}}>your speciality is:</label>
                    <select value={LoanInput.scpiality} onChange={(event)=>{
                        setLoanInput({...LoanInput,scpiality:event.target.value})
                    }}>
                        <option>Select one</option>
                        <option>Eletrotechnical</option>
                        <option>Industrial electic</option>
                        <option>electronic</option>
                    </select>
                    <button id='butSub' className={btnclasses} disabled={btndisabled} onClick={HundleFormSubmit}>Open</button>
                    
                </form>
                <Modal errorMsg={errorMsg} isVisible={showModal} /> 
            </div>
    );
}