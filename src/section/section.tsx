import './section.css';
import { Link } from 'react-router-dom';
function Section() {    
    
return(

    <>
    <section className='section'>
        <div className='section1'>  
                <div><h1 className='sec'>Stats show <span> reality</span> </h1>
                <h1>do your work based on reality</h1>
                </div>
                <Link to='/status'>
        <button>show status</button>
        </Link>

                </div>
                </section>
    </>
)


}
export default Section;