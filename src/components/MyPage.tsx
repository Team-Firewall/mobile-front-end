import { useState } from 'react';
import ChangePassword from './MyPageComponents/ChangePassword';
import ParentsInformation from './MyPageComponents/ParentsInformation';
import UserInformation from './MyPageComponents/UserInformation';
import './MyPage.css'
import { IonButton, IonIcon } from '@ionic/react';
import { keyOutline, keySharp, peopleCircleOutline, peopleCircleSharp, personCircleOutline, personCircleSharp } from 'ionicons/icons';

interface ContainerProps {
  username: string;
}

const MyPage: React.FC<ContainerProps> = ({ username }) => {
  const [informationState, setInformationState] = useState<number>(0)
    return(
      <div>
        <div className={'edit-box-container'}>
          <IonButton fill="outline" onClick={()=>setInformationState(0)}>
            <IonIcon slot="start" ios={personCircleOutline} md={personCircleSharp}></IonIcon>
            내 정보
          </IonButton>
          <IonButton fill="outline" onClick={()=>setInformationState(1)}>
            <IonIcon slot="start" ios={peopleCircleOutline} md={peopleCircleSharp}></IonIcon>
            보호자 정보
          </IonButton>
          <IonButton fill="outline" onClick={()=>setInformationState(2)}>
            <IonIcon slot="start" ios={keyOutline} md={keySharp}></IonIcon>
            재설정
          </IonButton>
        </div>
        <div className={'information-component-container'}>
          {
            informationState === 0 && (
              <UserInformation username={username}/>
            )
          }
          {
            informationState === 1 && (
              <ParentsInformation username={username}/>
            )
          }
          {
            informationState === 2 && (
              <ChangePassword username={username}/>
            )
          }
        </div>
      </div>

    )
};

export default MyPage;
