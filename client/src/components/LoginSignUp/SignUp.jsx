import { Box, styled } from "@mui/material";

const SignUpBox = styled(Box)`
  height: 500px;
  width: 100%;
  background-color: red;
`;

const SignUp = () => {
  return <SignUpBox>Sign Up</SignUpBox>;
};

export default SignUp;
