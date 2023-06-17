import { styled } from "styled-components"

export const RequestButton = styled.button`
  font-size: 0.875rem;
  padding: 0.8125rem 1.875rem;
  font-weight: 700;
  border: 0;
  border-radius: 30px;
  color: #fff;
  background: linear-gradient(to right, #31cf71, #00cc92, #00c8ac, #00c2be, #2dbbc7);
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`
