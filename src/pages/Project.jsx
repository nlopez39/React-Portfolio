import { projects } from "../projects";

export default function Project() {
  return (
    <div className="mt-3">
      <section id="projects" className="container text-center">
        {/* <h1 className='section-title'>Projects</h1> */}
        <div className="row">
          {projects.slice(0, 6).map(
            (
              project // Slice the projects array to display only the first 6 projects
            ) => (
              <div className="col-md-4" key={project.id}>
                <div className="card mb-4">
                  <img
                    src={project.img}
                    className="card-img-top img-fluid"
                    alt={project.name}
                  />
                  <div className="card-body" style={{ background: "#8E443D" }}>
                    <h5 className="card-title" style={{ color: "#EDE3E4" }}>
                      {project.name}
                    </h5>
                    <a
                      href={project.demo}
                      className="btn btn me-md-2 demo-btn"
                      // style={{
                      //   background: "#0F0E0E",
                      //   color: "#EDE3E4",
                      // }}
                    >
                      Demo
                    </a>
                    <a
                      href={project.repo}
                      className="btn btn github-btn"
                      // style={{ background: "#0F0E0E", color: "#EDE3E4" }}
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
