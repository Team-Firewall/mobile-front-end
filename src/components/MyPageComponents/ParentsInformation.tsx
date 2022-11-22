import { useState } from "react";
import "./Parentslnformation.css";
interface ContainerProps {
  username: string;
}
const UserInformation: React.FC<ContainerProps> = (params) => {
  //여기 usesate 어디감 ㅋㅋ
    
  // const [username, setUserName] = useState<string>('테스트')
  return (
    <div>
      <div className={"user-information-box"}>
        <div className={"basic-information-container mypage-card"}>
          <div>
            <div>
              <div className={"mainheading"}>보호자 정보</div>
              <div className={'division1'}>학부모 연락처</div>
             <div className={('general-sentence')}></div>
              <div className={"general-sentence"}>
              </div>
            </div>
          </div>
          <div className={"division"}>학부모1 전화번호</div>
          <div className={"general-sentence"}>010-1234-5678</div>
          <div className={"division"}>학부모2 전화번호</div>
          <div className={"general-sentence"}>010-1234-5678</div>
          <div className={'division1'}>담임선생님 연락처</div>
          <div className={'division'}>선생님 성함</div>
          <div className={'division'}>남소율 선생님</div>
          <div className={'division'}>선생님 연락처</div>
          <div className={"general-sentence"}>010-1234-5678</div>
        </div> 


        <div className={"exclamation-phrases"}>
          * 정보에 이상이 있으면 선생님께 문의해 주세요.
        </div>
      </div>
    </div>
  );
};
export default UserInformation;
