import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import "./ChangePassword.css";
import { IonButton } from "@ionic/react";
interface ContainerProps {
  username: string;
}
const ChangePassword: React.FC<ContainerProps> = (params) => {
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");

  // const [username, setUserName] = useState<string>('테스트')
  return (
    <div>
      <div className={"user-information-box"}>
        <div className={"basic-information-container mypage-card"}>
          <Box>
            <div className={"subheading"}>비밀번호 재설정</div>
            <div className="gap-input-area">
              <TextField
                id="demo-helper-text-aligned"
                label="현재 비밀번호"
                fullWidth
                type={"password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              {
                <div className={"error-message"}>
                  기존 비밀번호와 일치하지 않습니다.
                </div>
              }
            </div>

            <div className="gap-input-area">
              <TextField
                id="demo-helper-text-aligned"
                label="새 비밀번호"
                fullWidth
                type={"password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              {<div className="error-message">비밀번호는 4자 이상이어야 합니다.</div>}
            </div>
            <div className="gap-input-area">
              <TextField
                id="demo-helper-text-aligned"
                label="새 비밀번호 확인"
                fullWidth
                type={"password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              {<div className="error-message">새 비밀번호를 확인해 주세요</div>}
            </div>
            <IonButton
              // href="/logout"
              color="primary"
              expand="block"
              className="logout-button"
            >
              {/* <IonIcon slot="start" ios={logOutOutline} md={logOutSharp}></IonIcon> */}
              재설정
            </IonButton>
          </Box>
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;
