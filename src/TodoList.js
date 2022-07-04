import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TaskList from "./components/task-list/TaskList";
import styled from "styled-components";
import "./main.scss";

const ContentWrapper = styled.div`
  position: relative;
  width: 40vw;
  max-height: 35rem;
  background-color: var(--darker-green);
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 1);
  border: 0.1rem solid #000;
  color: #fff;
  perspective: 800px;
  transform: skew(45deg, -15deg);
  ::before {
    content: "";
    display: block;
    position: absolute;
    left: -1rem;
    width: 1rem;
    height: 100.5%;
    background-color: #333;
    transform: skewY(-45deg);
    border-top-right-radius: 0.6rem;
    border: 2px solid black;
  }
  ::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -1rem;
    left: -1.5%;
    width: 101%;
    height: 1rem;
    background-color: #222;
    transform: skewX(-45deg);
    border-top-right-radius: 0.6rem;
    border: 2px solid black;
    box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 1);
  }
`;

const TodoList = () => {
  return (
    <ContentWrapper>
      <Header />
      <TaskList />
      <Footer />
    </ContentWrapper>
  );
};

export default TodoList;
