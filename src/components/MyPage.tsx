import { useState } from 'react';
import ChangePassword from './MyPageComponents/ChangePassword';
import ParentsInformation from './MyPageComponents/ParentsInformation';
import UserInformation from './MyPageComponents/UserInformation';
import './MyPage.css'

interface ContainerProps {
  username: string;
}

const MyPage: React.FC<ContainerProps> = ({ username }) => {
  const [informationState, setInformationState] = useState<number>(0)
    return(
      <div>
        <div className={'information-component-container'}>
        {
          informationState === 0 && (
            <UserInformation username={username}/>
          )
        }
        {
          informationState === 1 && (
            <ParentsInformation/>
          )
        }
        {
          informationState === 2 && (
            <ChangePassword/>
          )
        }
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className={'edit-box-container'}>
          <div className={'edit-box first-edit-box'}>
            <div className={'text-container'}>
              <div className={'div-tag-top'}>기본정보</div>
              <div className={'div-tag-bottom'}>이름, 전화번호, 학번, 상벌점</div>
            </div>

            <button onClick={() => setInformationState(0)}>보기</button>
          </div>

          <div className={'gap'}/>

          <div className={'edit-box second-edit-box'}>
            <div className={'text-container'}>
              <div className={'div-tag-top'}>보호자 정보</div>
              <div className={'div-tag-bottom'}>학부모, 담임선생님 정보</div>
            </div>

            <button onClick={() => setInformationState(1)}>보기</button>
          </div>

          <div className={'gap'}/>

          <div className={'edit-box third-edit-box'}>
            <div className={'text-container'}>
              <div className={'div-tag-top'}>비밀번호 변경</div>
              <div className={'div-tag-bottom'}>비밀번호를 변경합니다.</div>
            </div>

            <button onClick={() => setInformationState(2)}>수정</button>
          </div>

        </div>
      </div>

    )
};

export default MyPage;
