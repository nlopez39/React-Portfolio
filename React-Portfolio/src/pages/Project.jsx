import {projects} from '../projects';

export default function Project(){
    return (
        <div>
        <section id="projects"
        className="container text-center">

    
          <h1 className='section-title'>Projects </h1>
           
                 {projects.map((project) =>{
                return(
            <div className='row'>
            <div className='col-md-6'>
            <div className="card mb-4"> 
                        <div className="card-body"> 

                     <div key={project.id}>
                      <img src= {project.img} alt={project.name} ></img>
                      <div>
                        <a href={project.demo}>Repository</a>
                      </div>
                    </div> </div>
                    </div>
                    </div>
                    

            </div>
                );
            })}
           
           
           
      
          </section>
        </div>
        
      );
};