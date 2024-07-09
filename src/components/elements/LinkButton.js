import './../../scss/elements/_LinkButton.scss'


function LinkButton(props){
    return (
        <>
            <a className="linkbutton" href={props.link} download>{props.text}</a>
        </>
    );
}

export default LinkButton;