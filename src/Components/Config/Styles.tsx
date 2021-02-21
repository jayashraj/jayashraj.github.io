import styled from "styled-components";
import { motion } from "framer-motion";

/** Fills full page
 *
 * Currently used by About, Archive and Projects I guess
 */
const StyledPage = styled(motion.div)`
  background-color: ${(props) => `${props.theme.background}`};
  //flex: 1; //fils remaining space in the middle between header and footer
  margin: 10px 0 10px 0;
  padding: 20px;
  height: 100%;
  border-radius: 3px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.27);
  p {
    color: ${(props) => `${props.theme.text}`};
  }

  h2 {
    color: ${(props) => `${props.theme.heading}`};
  }
  a {
    text-decoration: none;
  }
  h2:hover {
    color: ${(props) => `${props.theme.text}`};
  }
`;

const StyledPost = styled(motion.div)`
  background-color: ${(props) => `${props.theme.background}`};
  height: 100%;
  margin: 10px 0 10px 0;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.27);
  p {
    color: ${(props) => `${props.theme.text}`};
  }
  ul {
    margin-left: 20px;
    li::marker {
      color: ${(props) => `${props.theme.text}`};
    }
  }
  a {
    color: ${(props) => `${props.theme.heading}`};
  }
`;

const FewLines = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => `${props.theme.background}`};
  height: 100%;
  margin: 10px 0 10px 0;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.27);
  font-size: 16px;
  p {
    color: ${(props) => `${props.theme.text}`};
  }
  .date-content {
    opacity: 50%;
  }
`;

const Heading = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dotted ${(props) => `${props.theme.text}`};
  margin-bottom: 10px;
  h1 {
    color: ${(props) => `${props.theme.heading}`};
  }
  p {
    color: ${(props) => `${props.theme.text}`};
  }
  .date-content {
    opacity: 50%;
  }
`;

const SimpleDiv = styled(motion.div)`
  flex: 1;
`;

const StyledButton = styled.button`
  background-color: ${(props) => `${props.theme.background}`};
  border: solid 1px ${(props) => `${props.theme.text}`};
  color: ${(props) => `${props.theme.text}`};
  font-size: 12px;
  margin-top: 5px;
  padding: 5px;

  &:hover {
    color: ${(props) => `${props.theme.hover}`};
  }
  @media all and (min-width: 768px) {
    position: absolute;
    right: 20px;
  }
`;

export { StyledPage, StyledPost, Heading, SimpleDiv, FewLines, StyledButton };
