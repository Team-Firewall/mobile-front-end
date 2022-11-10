import ExploreContainer from "./ExploreContainer";
import MyPage from "./MyPage";
import Points from "./Points";

interface ContainerProps {
  name: string;
  username: string;
}

const PageRouter: React.FC<ContainerProps> = (props) => {
  if (props.name == "MyPage") {
    return <MyPage username={props.username} />;
  }
  if (props.name == "Points") {
    return <Points username={props.username} />;
  } else {
    return <ExploreContainer name={props.name} />;
  }
};

export default PageRouter;
