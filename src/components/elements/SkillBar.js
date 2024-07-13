import './../../scss/elements/_SkillBar.scss'

function SkillBar(props) {
    return (<>
        <div className="barWrapper">
            <span className="progressText">{props.text}</span>
            <div className="single-progress-txt">
                <div className="progress ">
                    <div
                        className="progress-bar"
                        style={props.scroll ? {width : props.value} : {}}
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="10" 
                        aria-valuemax="100">
                    </div>
                </div>
                <h3>{props.value}</h3>
            </div>
        </div>{/* <!-- /.barWrapper --> */}
    </>
    )
}

SkillBar.propTypes = {

}

export default SkillBar

