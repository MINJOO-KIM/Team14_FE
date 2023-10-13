import React, { useState } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import ModalButton from "../../components/ModalButton";
import theme from "../../theme";
import Post from "../../components/Post";
import PostInfos from "../../components/PostInfos";

const Container = styled.div`
  width: 310px;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

const InputBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input`
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 100%;
  height: 44px;
  padding: 12px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.modal.black};
  font-size: 14px;
  border: none;
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.white};
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  gap: 8px;
`;

const imageSample = {
  image: "/sample3.png",
};

const ALLOWED_TEXT_REG_EXP = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ|0-9| \t|]+$/;
const NOT_ALLOWED_TEXT_REG_EXP = /[{}[\]/?.;:|)*~`!^\\\-_+<>@#$%&=('"₩€£¥•“’‘]/;

const isEmptyValue = (value) => {
  if (!value.length) {
    return true;
  }
  return false;
};

const UploadPage = () => {
  const [name, setName] = useState("");
  const [inputHashtag, setInputHashtag] = useState("");
  const [hashtags, setHashtags] = useState([]);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    if (!ALLOWED_TEXT_REG_EXP.test(newName)) {
      setName("");
      return;
    }
    setName(newName);
  };

  const handleNameKeyDown = (e) => {
    if (e.code !== "Enter" && e.code !== "NumpadEnter") {
      return;
    }
    e.preventDefault();
  };

  const handleInputHashtagChange = (e) => {
    const newHashtag = e.target.value;
    if (NOT_ALLOWED_TEXT_REG_EXP.test(newHashtag)) {
      setInputHashtag("");
      return;
    }
    setInputHashtag(newHashtag);
  };

  const addHashtag = (e) => {
    const ALLOWED_COMMANDS = ["Comma", "Enter", "Space", "NumpadEnter"];
    if (!ALLOWED_COMMANDS.includes(e.code)) {
      return;
    }

    let newHashtag = e.target.value.trim();
    if (isEmptyValue(newHashtag) || hashtags.length >= 2) {
      return setInputHashtag("");
    }
    if (newHashtag.includes(",")) {
      newHashtag = newHashtag.split(",").join("");
    }
    if (isEmptyValue(newHashtag)) {
      return;
    }

    setHashtags((prevHashtags) => {
      return [...new Set([...prevHashtags, newHashtag])];
    });
    setInputHashtag("");
  };

  const handleHashtagKeyDown = (e) => {
    if (e.code !== "Enter" && e.code !== "NumpadEnter") {
      return;
    }
    e.preventDefault();
    if (!ALLOWED_TEXT_REG_EXP.test(e.target.value)) {
      setInputHashtag("");
    }
  };

  const handleHashtagClick = (e) => {
    const deleteTarget = e.target.textContent.slice(1);
    const newHashtags = hashtags.filter((hashtag) => hashtag !== deleteTarget);
    setHashtags(newHashtags);
  };

  const handleUploadClick = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    console.log("업로드 API 요청", name.trim());
    console.log("업로드 API 요청", hashtags);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    console.log("취소버튼 클릭");
  };

  return (
    <Layout>
      <Container>
        <ImageBox>
          <Post
            image={imageSample.image}
            info={
              <PostInfos
                name={name || "닉네임(필수)"}
                hashtags={hashtags}
                onClick={handleHashtagClick}
              />
            }
          />
        </ImageBox>
        <InputBox>
          <label htmlFor="name">
            <Input
              id="name"
              value={name}
              placeholder="닉네임(필수)"
              onChange={handleNameChange}
              onKeyDown={handleNameKeyDown}
              type="text"
              maxLength={12}
              required
            />
          </label>
          <label htmlFor="hashtags">
            <Input
              id="hashtags"
              value={inputHashtag}
              placeholder="해시태그를 등록해보세요! (최대 2개)"
              onChange={handleInputHashtagChange}
              onKeyUp={addHashtag}
              onKeyDown={handleHashtagKeyDown}
              type="text"
              maxLength={8}
            />
          </label>
          <ButtonBlock>
            <ModalButton
              text="취소"
              isTextBlack
              bgColor={theme.modal.gray}
              onClick={handleCancelClick}
            />
            <ModalButton
              text="업로드"
              isTextBlack
              bgColor={theme.white}
              onClick={handleUploadClick}
            />
          </ButtonBlock>
        </InputBox>
      </Container>
    </Layout>
  );
};

export default UploadPage;