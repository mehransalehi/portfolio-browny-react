import { useEffect,useRef } from 'react';
import './../../scss/elements/_LinkButton.scss'




function LinkButton(props){
    let thisButton = useRef();
    useEffect(()=>{
        thisButton.current.classList.add('loaded');
    },[]);
    return (
        <>
            <a className="linkbutton transform-down" href={props.link} download ref={thisButton}>{props.text}</a>
        </>
    );
}

export default LinkButton;