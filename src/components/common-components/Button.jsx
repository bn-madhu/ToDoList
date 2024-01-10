import React, { Fragment } from 'react';
import styled from 'styled-components';


const buttonStyles = () => `
  transition : all var(--duration);
  width: fit-content;
  height: 40px;
`;

const PrimaryFilled = (theme) =>`
  background-color : var(--primary);
  border : 1px solid var(--primary);
  color : var(--white);
  &:hover, &:focus{
    background-color : var(--primaryBgColorHover);
    border : 1px solid var(--primaryBgColorHover);
  `

const PrimaryOutline = (theme) =>`
  background-color : transparent;
  border : 1px solid var(--secondary);
  color : var(--secondary);
  &:hover, &:focus{
    background-color : var(--secondary_light);
    border : 1px solid var(--primaryBgColorHover);
  `

  const PrimaryButton = (theme) => `
    ${buttonStyles()}
    ${PrimaryFilled(theme)}
  }`;

  const outlineButton = (theme) => `
    ${buttonStyles()}
    ${PrimaryOutline(theme)}
  `;

const ButtonContainer = styled.button.attrs((btnTheme) => {
  return {
    className: `btn ${btnTheme === 'primary' ? 'filled' : '' }  ${btnTheme === 'outline' ? 'outline' : '' }`,
  };
})`
    ${({ theme, btnTheme }) =>
    (btnTheme === 'primary' && PrimaryButton(theme)) ||
    (btnTheme === 'outline' && outlineButton(theme))}
  `;

export const Button = (props) => {
  let { children, theme = 'primary', ...rest } = props;
  return (
    <>
      <ButtonContainer btnTheme={theme} {...rest}>
        {children}
      </ButtonContainer>
    </>
  );
}