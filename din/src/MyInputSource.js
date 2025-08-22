import { useContext } from 'react';
import { LoanContext } from './context/Loancontext';
export default function MyInputSource(){
    const InputContext = useContext(LoanContext);
    return(
        <>
        <label>{InputContext.labelTitle}</label>
                            <input value={InputContext.value} onChange={(event)=>{
                                InputContext.handleChange(event.target.value)
                            }} placeholder={InputContext.placeHolder} />
        </>
    );
}