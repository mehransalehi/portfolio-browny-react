import './../../scss/elements/_SectionHeader.scss';


export default function SectionHeader(props) {
    return (<>
        <div className="section-heading text-center">
            <h2>{props.text}</h2>
        </div>
    </>)
}