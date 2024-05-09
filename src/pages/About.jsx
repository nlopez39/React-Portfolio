//import style soon
import { RxAvatar } from "react-icons/rx";
export default function About() {
  return (
    <div className="mt-3" style={{ background: "#EDE3E4" }}>
      <h1>About Me</h1>
      <img
        src="./images/aboutMe.jpeg"
        style={{ height: "200px", borderRadius: "95px" }}
      ></img>
      {/* <RxAvatar size={70} className="mt-5" /> */}

      <p className="mt-5">
        Hi there! I'm Nelly Lopez, a passionate full-stack developer with a love
        for coding and building innovative solutions. With expertise in both
        front-end and back-end technologies, I enjoy bringing ideas to life
        through clean and efficient code. My journey in the world of development
        has been exciting and fulfilling, and I'm always eager to take on new
        challenges and learn new technologies.
        <p className="mt-3">
          I invite you to explore my portfolio to see some of my recent projects
          and creations. From web applications to mobile apps, each project
          represents a unique opportunity for me to showcase my skills and
          creativity. Feel free to reach out if you have any questions or would
          like to collaborate on a project together!
        </p>
      </p>
    </div>
  );
}
