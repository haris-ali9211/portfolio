import React,{useState, useEffect} from'react'
import './portfolio.css'
import IMG1 from '../../assets/image/portfolio1.jpg'
import axios from 'axios'
import Fade from 'react-reveal/Fade';
const Portfolio=()=>{

  const [data, setapiData] = useState([])
  const [datalength, setdatalength] = useState(4)

  console.log("🚀 ~ file: portfolio.jsx ~ line 9 ~ Portfolio ~ data", data.length)

//   useEffect(() => {
    
//     fetch("https://e-commerce12.p.rapidapi.com/products/toprated?rating=4&page=1&limit=50")
//     // .then(response => response.json())
//     .then(response => {
//       setapiData(response);
//       console.log("🚀 ~ file: portfolio.jsx ~ line 9 ~ useEffect ~ data", response)
            
//         })
//         .catch(err => {
//             console.error(err);
//         })


// }, [])

useEffect(() => {
  const getProducts = async () => {
      try {
          const res = await axios.get("https://api.github.com/users/haris-ali9211/repos");
          setapiData(res.data);
      } 
      catch (err) { }
      };
      getProducts();
}, []);


  return(
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">



        {data.slice(0,datalength).map((obj,key)=>{
        console.log("🚀 ~ file: portfolio.jsx ~ line 45 ~ obj", obj.language)
          
          return(
            <Fade top cascade>
          <article className="portfolio_item">
          <div className="portfolio_item-image">
          <img src={IMG1} alt=""/>
          </div> 
          <div className="portfolio-item-detail">
            <h3>{obj.name}</h3>
            <div className=''>
            {/* <p>language : {obj.language}</p> */}
            <p></p>
            </div>
            <a href={obj.html_url } className="btn" target='_blank'> Github </a>
            {/* <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank'> Live Demo </a> */}
          </div>
        </article>
        </Fade>
          )
        })}


        



      </div>
        <a className="load-more btn btn-primary" onClick={()=> setdatalength(datalength+4)}>show more</a>
    </section>);
}
export default Portfolio;