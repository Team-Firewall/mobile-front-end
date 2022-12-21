import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import "./ChangePassword.css";
interface ContainerProps {
  username: string;
}
const ChangePassword: React.FC<ContainerProps> = (params) => {
  const [currentPassword, setCurrentPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [checkPassword, setCheckPassword] = useState<string>('')
    
  // const [username, setUserName] = useState<string>('테스트')
  return (
    <div>
      <div className={"user-information-box"}>
        <div className={"basic-information-container mypage-card"}>
          <Box>
            <div className={"subheading"}>비밀번호 재설정</div>
            <div className="">
              <TextField
                id="demo-helper-text-aligned"
                label="현재 비밀번호"
                
                type={'password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              {
                <div className={'error-message'}>비밀번호가 일치하지 않습니다.</div>
              }
            </div>

            <div className="">
              
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;
