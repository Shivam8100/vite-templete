import { useState } from "react";
import { Input, message } from "antd";
import CryptoJS from "crypto-js/core";
import JSEncrypt from "jsencrypt";
import PBKDF2 from "crypto-js/pbkdf2";
import AES from "crypto-js/aes";
import { useDispatch } from "react-redux";

import { api } from "@services/axios";
import { OauthService_URL } from "@redux/urls";
import { userLogin } from "@services/auth.service";

import {
  ButtonWrapper,
  FormWrapper,
  Heading,
  InputWrapper,
  SigninContainer,
} from "./login.style";
import { NOTIFICATION_MESSAGE } from "@constants/constant";

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .post(`${OauthService_URL}/generateKey?loginId=${formData.email}`, {})
      .then((response) => {
        if (response.status === 200) {
          let details = { password: formData.password };
          let secretPhrase = CryptoJS.lib.WordArray.random(16);
          //
          let salt = CryptoJS.lib.WordArray.random(128 / 8);
          //
          let aesKey = PBKDF2(secretPhrase.toString(), salt, {
            keySize: 128 / 32,
          });
          //
          let iv = CryptoJS.enc.Utf8.parse(formData.email);
          //
          let aesOptions = {
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
            iv: iv,
          };
          //
          let aesEncTrans = AES.encrypt(
            JSON.stringify(details),
            aesKey,
            aesOptions
          );

          let rsaEncrypt = new JSEncrypt();
          //
          rsaEncrypt.setPublicKey(response.data);
          let rsaEncryptedAesKey = rsaEncrypt.encrypt(
            aesEncTrans.key.toString()
          );

          let encryptedTransaction = {
            loginId: formData.email,
            encPassword: aesEncTrans.toString(),
            encSecretKey: rsaEncryptedAesKey,
          };
          dispatch(userLogin(encryptedTransaction));
        }
      })
      .catch((err) => {
        message.destroy();
        message.error(err?.message || NOTIFICATION_MESSAGE.SOMETHING_WRONG);
      });
  };

  return (
    <SigninContainer>
      <FormWrapper>
        <form autoComplete="off" className="form" onSubmit={handleSubmit}>
          <Heading>Login</Heading>
          <InputWrapper>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="floating-input"
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input.Password
              name="password"
              placeholder="Password"
              className="floating-pass"
              onChange={handleInputChange}
            />
          </InputWrapper>
          <ButtonWrapper>
            <button className="bbtn" type="submit">
              Submit
            </button>
          </ButtonWrapper>
        </form>
      </FormWrapper>
    </SigninContainer>
  );
};
export default Login;
