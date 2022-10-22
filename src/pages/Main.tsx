import React from 'react';
import { IonInput, IonItem, IonLabel, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { AiFillExclamationCircle } from 'react-icons/ai'
import './Main.css';

const Main: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='title'>
					<img src={'https://raw.github.com/GBSWHS/CI-Signature/main/symbol/symbol-only.png'}
					className={'gbsw-logo'} alt={'school-logo'}/>
					<div className={'tag-top'}>경북소프트웨어고등학교</div>
					<div className={'tag-bottom'}>상벌점 시스템</div>
        </div>

				<div className='login_container'>
					<IonItem fill="outline">
						<IonLabel position="floating">아이디</IonLabel>
						<IonInput placeholder="학년, 반, 번호"></IonInput>
					</IonItem>
					<br />
					<IonItem fill="outline">
						<IonLabel position="floating">비밀번호</IonLabel>
						<IonInput type="password"></IonInput>
					</IonItem>
					<div className={'exclamation-phrases'}>
						<AiFillExclamationCircle style={{marginBottom: '-2.5px', color: '#f00', fontSize: '14px'}}/>
						<span>비밀번호를 잊으셨다면 선생님께 문의해주세요.</span>
					</div>
				</div>

        {/* 버튼, 상벌점 정보 바로가기 버튼 */}
        {/* https://ionicframework.com/docs/api/button */}
      </IonContent>
    </IonPage>
  );
};

export default Main;
