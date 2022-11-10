import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { idCardOutline,idCardSharp,ribbonOutline,ribbonSharp,personCircleOutline, personCircleSharp, archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, logOutOutline, logOutSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: '마이페이지',
    url: '/page/MyPage',
    iosIcon: idCardOutline,
    mdIcon: idCardSharp
  },
  {
    title: '상/벌점 조회',
    url: '/page/Points',
    iosIcon: ribbonOutline,
    mdIcon: ribbonSharp
  },
  {
    title: '로그아웃',
    url: '/logout',
    iosIcon: logOutOutline,
    mdIcon: logOutSharp
  },
  {
    title: '개',
    url: '/page/Archived',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: '발',
    url: '/page/Trash',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: '중',
    url: '/page/Spam',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();
  if(location.pathname=='/'||location.pathname=='/ruleTable'){
    //로그인을 하지 않았을때 아무것도 출력하지 않음.
    return (
      <></>
    )
  }
  else{
    return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>김진효 student</IonListHeader>
            <IonNote>2-2 class 6 number</IonNote>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
            
          {/* 카피라이트랑 로그아웃 버튼 추가 */}
        </IonContent>
      </IonMenu>
    );
  }
};

export default Menu;
