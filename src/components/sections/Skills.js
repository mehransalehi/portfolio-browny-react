import { useState, useEffect, useRef } from 'react';
import './../../scss/Skills.scss';
import SkillBar from './../elements/SkillBar';


function Skills(props) {
    let skills = [
        {
            id: 1,
            text: 'html 5',
            value: '90%'
        }, {
            id: 2,
            text: 'css 3 animation',
            value: '80%'
        }, {
            id: 3,
            text: 'communication',
            value: '70%'
        }, {
            id: 4,
            text: 'creativity',
            value: '90%'
        }, {
            id: 5,
            text: 'adobe photoshop',
            value: '85%'
        }, {
            id: 6,
            text: 'adobe illustrator',
            value: '75%'
        }, {
            id: 7,
            text: 'sketch',
            value: '60%'
        }, {
            id: 8,
            text: 'adobe after effects',
            value: '90%'
        },
    ]
    const [scrollReached, setScrollReached] = useState(false);
    const skillSection = useRef();

    useEffect(()=>{
        if (props.scrollTop + 300 > skillSection.current.offsetTop) {
            setScrollReached(true);
        }
    },[props.scrollTop]);
    return (
        <>
            {/* <!--skills start --> */}
            <section id="skills" className="skills" ref={skillSection}>
                <div className="skill-content">
                    <div className="section-heading text-center">
                        <h2>skills</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="single-skill-content">
                                    {skills.map((skill, index) => {
                                        if (index < 4) {
                                            return (
                                                <SkillBar key={skill.id} scroll={scrollReached} text={skill.text} value={skill.value} />
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-skill-content">
                                    {skills.map((skill, index) => {
                                        if (index > 3) {
                                            return (
                                                <SkillBar key={skill.id} scroll={scrollReached} text={skill.text} value={skill.value} />
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        </div>{/* <!-- /.row --> */}
                    </div>	{/* <!-- /.container --> */}
                </div>{/* <!-- /.skill-content--> */}

            </section>{/* <!--/.skills--> */}
            {/* <!--skills end --> */}
        </>
    );
}


export default Skills;