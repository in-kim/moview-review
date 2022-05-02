import styled from 'styled-components';

const TitleComponent = (props: JSX.ElementChildrenAttribute) => {
    const {children} = props;

    return (
        <Title>{children}</Title>
    )
}

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: #024959;
  text-align: left;
  margin-bottom: 20px;
`;

export default TitleComponent