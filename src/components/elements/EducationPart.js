import './../../scss/elements/_EducationPart.scss';


export default function EducationPart(props) {
    return (<>
        <div className="col-sm-4">
            <div className="single-horizontal-timeline">
                <div className="experience-time">
                    <h2>{props.year}</h2>
                    <h3>{props.title}</h3>
                </div>{/* <!--/.experience-time--> */}
                <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className="single-timeline-horizontal" style={{width:props.timeline}}></span>
                </div>
                <div className="timeline">
                    <div className="timeline-content">
                        <h4 className="title">
                            {props.university}
                        </h4>
                        <h5>{props.address}</h5>
                        <p className="description">
                            {props.description}
                        </p>
                    </div>{/* <!--/.timeline-content--> */}
                </div>{/* <!--/.timeline--> */}
            </div>
        </div>
    </>)
}