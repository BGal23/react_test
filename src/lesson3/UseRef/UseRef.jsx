import css from "./style.module.css";
import { useUser } from "./UserContext.jsx";

export const LeftPanel = () => {
  const user = useUser();
  return (
    <div className={css.left}>
      <p>User name {user.name}</p>
      <button onClick={() => user.setIsLogged(true)}>
        Click here to log user
      </button>
    </div>
  );
};

export const RightPanel = () => {
  const user = useUser();
  return (
    <div className={css.right}>
      This user is {user.isLogged === true ? "" : "not"} logged
    </div>
  );
};

export const Dashbord = () => {
  return (
    <div className={css.dashbord}>
      <LeftPanel />
      <RightPanel />
    </div>
  );
};
