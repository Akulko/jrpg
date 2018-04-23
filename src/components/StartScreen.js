import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Input = styled.input``;
const Text = styled.p``;
const Button = styled.button``;
const Select = styled.select``;
const Option = styled.option``;
const CharBox = styled.div``;
const HeroImg = styled.img``;
const HeroStats = styled.p``;

class StartScreen extends React.Component {
  state = {
    name: "",
    heroClass: ""
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleHeroClassChange = e => {
    this.setState({ heroClass: e.target.value });
  };

  render() {
    return (
      <Wrapper>
        <Text>Назови себя, Герой!</Text>
        <Input value={this.state.name} onChange={this.handleNameChange} />
        <Text>Так ты, значит...</Text>
        <Select onChange={this.handleHeroClassChange}>
          <Option>Маг</Option>
          <Option>Вор</Option>
          <Option>Воин</Option>
        </Select>
        <Text>Взгляни на себя!</Text>
        <CharBox>
          <HeroImg />
          <HeroStats>Здоровье: {}</HeroStats>
          <HeroStats>Атака: {}</HeroStats>
          <HeroStats>Мана: {}</HeroStats>
          <HeroStats>Золото: {}</HeroStats>
        </CharBox>
        <Button onClick={() => this.props.heroCreate(this.state.name, this.state.heroClass)}>Начать историю!</Button>
      </Wrapper>
    );
  }
}

export default StartScreen;
