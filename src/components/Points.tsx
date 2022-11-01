import './Points.css'
interface ContainerProps {
    username: string;
  }
  
const Points: React.FC<ContainerProps> = ({username}) => {
    return(
        <div>
            <div className="img">
                <img src="https://cdn.discordapp.com/attachments/1012275291122585620/1037021491088334929/2022-11-02_001154.png"></img>
                <span className="result">현재 {username} 님의 상벌점은 20점 입니다</span>
            </div>
        </div>
    )
}
export default Points