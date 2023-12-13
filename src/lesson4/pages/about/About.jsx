import { Link, Outlet } from "react-router-dom";
import css from "./about.module.css";

const About = () => {
  return (
    <main className={css.about}>
      <h2>About all countries</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nihil nemo
        veniam earum sequi dicta nisi. Culpa placeat eum saepe ipsam aliquam
        iure nostrum. Est qui modi fuga accusantium impedit at voluptatum ut
        nisi cum aut in suscipit, dignissimos excepturi ipsum animi possimus
        assumenda. Adipisci, repellendus pariatur. Aspernatur, corporis quaerat.
      </p>
      <ul>
        <li>
          <Link to="readmore">Read More</Link>
        </li>
        <li>
          <Link to="getinfo">Get Info</Link>
        </li>
        <li>
          <Link to="sendmessage">Send Message</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default About;
