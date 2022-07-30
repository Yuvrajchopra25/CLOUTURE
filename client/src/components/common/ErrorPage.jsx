// Error page

import { styled, Box, Typography } from "@mui/material";

const MainContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 50vh;
    width: 100%;
    background-color: green;
`;

const ErrorBox = styled(Box)`
    margin-top: 18em;
    height: auto;
    width: 50%;
    background-color: rgba(255, 0, 0, 0.8);
    border: 2px double blue;
    border-radius: 1em;
`;

const Number = styled(Typography)`
    font-size: 3em;
    text-align: center;
    margin-bottom: 2em;
`;

const ErrorMessage = styled(Typography)`
    font-size: 2em;
    text-align: center;
`;

const ErrorPage = () => {
  return (
    <>
        <MainContainer>
            <ErrorBox>
                <Number>404 Error Page</Number>
                <ErrorMessage>Page Not Found</ErrorMessage>
            </ErrorBox>
        </MainContainer>
    </>
  )
}

export default ErrorPage;