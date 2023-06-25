import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #e9e9e9;
  padding: 0 20px 0 0;
  border-radius: 10px;
  overflow: hidden;
  
`;
export const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
 
`;
export const Button = styled.button`
  display: inline-block;
  background-color: #e9e9e9;
  width: 48px;
  height: 48px;
  border: 0;
  font-size: 18px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 4px 10px;
`;
