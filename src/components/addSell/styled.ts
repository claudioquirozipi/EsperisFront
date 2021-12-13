import styled from "styled-components";

export const TitleSC = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const ContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.1);
  background: white;
`;

export const RowSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonSC = styled.button`
  padding: 0.5rem 1.5rem;
  background: palevioletred;
  color: white;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
`;
