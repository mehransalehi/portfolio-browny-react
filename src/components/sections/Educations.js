import './../../scss/Educations.scss';
import SectionHeader from '../elements/SectionHeader';
import EducationPart from '../elements/EducationPart';

let educations = [
    {
        id: 1,
        year: '2008 - 2010',
        title: 'master of computer science',
        university: 'university of north carolina',
        addr: 'north carolina, USA',
        timeline : '100%',
        description: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.',
    },
    {
        id: 2,
        year: '2004 - 2008',
        title: 'bachelor of computer science',
        university: 'university of north carolina',
        addr: 'north carolina, USA',
        timeline : '100%',
        description: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.',
    },
    {
        id: 3,
        year: '2010 - 2018',
        title: 'PHD of computer science',
        university: 'university of north carolina',
        addr: 'north carolina, USA',
        timeline : '60%',
        description: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.',
    }
];


function Educations() {
    return (
        <>
            {/* <!--education start --> */}
            <section id="education" className="education">
                <SectionHeader text="Educations" />
                <div className="container">
                    <div className="education-horizontal-timeline">
                        <div className="row">
                            {educations.map((edu) => <EducationPart key={edu.id} timeline={edu.timeline} year={edu.year} title={edu.title} universe={edu.university} address={edu.addr} description={edu.description} />)}
                        </div>
                    </div>
                </div>

            </section>{/* <!--/.education--> */}
            {/* <!--education end --> */}
        </>
    );
}


export default Educations;