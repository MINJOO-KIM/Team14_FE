import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Nav = styled.nav`
  z-index: 10;
  position: absolute;
  bottom: 0;
  border-top: 1px solid ${(props) => props.theme.modal.black};
`;

const Tabs = styled.ul`
  display: flex;
`;

const Tab = styled.li`
  width: 130px;
  height: 56px;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;

const Text = styled.div`
  height: 12px;
  text-align: center;
`;

const NavigationBar = () => {
  return (
    <Nav>
      <Tabs>
        <Tab>
          <Link to="/">
            <Icon
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12.7615C5 11.4037 5 10.7249 5.27446 10.1281C5.54892 9.53139 6.06437 9.08958 7.09525 8.20596L8.09525 7.34882C9.95857 5.75169 10.8902 4.95313 12 4.95312C13.1098 4.95312 14.0414 5.75169 15.9047 7.34882L16.9047 8.20596C17.9356 9.08958 18.4511 9.53139 18.7255 10.1281C19 10.7249 19 11.4037 19 12.7615V17.0019C19 18.8875 19 19.8303 18.4142 20.4161C17.8284 21.0019 16.8856 21.0019 15 21.0019H9C7.11438 21.0019 6.17157 21.0019 5.58579 20.4161C5 19.8303 5 18.8875 5 17.0019V12.7615Z"
                stroke="#f5f5f5"
                stroke-width="2"
              />
              <path
                d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21"
                stroke="#f5f5f5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Icon>
            <Text>홈</Text>
          </Link>
        </Tab>
        <Tab>
          <Link to="/pop">
            <Icon
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="7" stroke="#f5f5f5" stroke-width="2" />
              <path
                d="M20 20L17 17"
                stroke="#f5f5f5"
                stroke-width="2"
                stroke-linecap="round"
              />
            </Icon>
            <Text>인기</Text>
          </Link>
        </Tab>
        <Tab>
          <Link to="/profile">
            <Icon
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="7"
                r="4"
                stroke="#f5f5f5"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M5.33788 18.3206C5.99897 15.5269 8.77173 14 11.6426 14H12.3574C15.2283 14 18.001 15.5269 18.6621 18.3206C18.79 18.8611 18.8917 19.4268 18.9489 20.0016C19.0036 20.5512 18.5523 21 18 21H6C5.44772 21 4.99642 20.5512 5.0511 20.0016C5.1083 19.4268 5.20997 18.8611 5.33788 18.3206Z"
                stroke="#f5f5f5"
                stroke-width="2"
                stroke-linecap="round"
              />
            </Icon>
            <Text>MY</Text>
          </Link>
        </Tab>
      </Tabs>
    </Nav>
  );
};

export default NavigationBar;
