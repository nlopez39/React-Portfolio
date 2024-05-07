//import style soon
import { RxAvatar } from "react-icons/rx";
export default function About() {
  return (
    <div className="mt-3" style={{ background: "#EDE3E4" }}>
      <h1>About Me</h1>
      <RxAvatar size={70} />

      <p className="mb-0">
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
