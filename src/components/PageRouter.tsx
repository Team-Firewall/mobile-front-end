import ExploreContainer from './ExploreContainer';
import MyPage from './MyPage';

interface ContainerProps {
  name: string;
}

const PageRouter: React.FC<ContainerProps> = ({ name }) => {
    if(name=="MyPage"){
        return (
            <MyPage name={name}/>
        );
    }
    else{
        return (
            <ExploreContainer name={name}/>
        );
    }
};

export default PageRouter;
