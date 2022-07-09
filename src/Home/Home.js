// import { Link } from 'react-router-dom';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Home = () => {
    return ( 
        <div className = "home">
            <div className="leftContent">
                <h1>Learning is not attained by chance,it must be sought for with ardour and diligence </h1>
                <h3>Work Experience based learning programs for developers</h3>
                <p><span style={{fontWeight : "bold"}}> Build</span> professional projects
                </p>
                <p><span style={{fontWeight : "bold"}}> Master</span> Development with real life experience
                </p>

                <div className='leftContent_container'>
                    <h2><FontAwesomeIcon icon="fa-solid fa-circle-play" />Upskill Yourself</h2>
                    <div className='leftContainer_buttons'>
                        <button className='Flip_Color1'>Explore Programs</button>
                        <button className='Flip_Color2'>Purchase Course</button>
                    </div>
                </div>
            </div>
            <div className="rightContent">
                <img src="https://cdn.vectorstock.com/i/1000x1000/87/49/e-learning-concept-big-laptop-vector-23228749.webp" alt="" />
            </div>
        </div>
    );
}

 
export default Home;
// https://img.freepik.com/free-vector/student-with-laptop-studying-online-course_74855-5293.jpg?size=626&ext=jpg&ga=GA1.2.192673790.1657352447
//https://cdn.vectorstock.com/i/1000x1000/87/49/e-learning-concept-big-laptop-vector-23228749.webp