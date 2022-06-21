import Header from "./components/header/Header";
import TaskList from "./components/task-list/TaskList";
import styled from "styled-components";
import './main.scss';

const ContentWrapper = styled.div`
  width: 50vw;
  max-height: 80vh;
  background-color: var(--darker-green);
  border-radius: .8rem;
  box-shadow: .5rem .5rem 1rem rgba(0,0,0,1);
  color: #FFF;
`

const TodoList = () => {
  return (
    <ContentWrapper>
      <Header />
      <TaskList />
    </ContentWrapper>
  );
}

export default TodoList;
