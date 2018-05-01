import React from "react";
import styled from "styled-components";
import startWindowBg from "../../assets/graphics/startWindowBg.png";
import redbutton from "../../assets/graphics/redbutton.png";

const Wrapper = styled.div`
  background: url(${startWindowBg});
  width: 352px;
  height: 417px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -208px 0 0 -176px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  border: none;
  background: rgba(0, 0, 0, 0.15);
  padding: 2px 9px;
  width: 205px;
  height: 23px;
  &:focus {
    outline: none;
  }
`;
const Text = styled.p`
  font-family: TrajanPro;
  margin: 2px;
`;
const Button = styled.button`
  background: url(${redbutton});
  height: 31px;
  color: #e7e7e7;
  width: 123px;
  border: none;
  font-family: TrajanPro;
  margin-top: 15px;
  &:focus {
    outline: none;
  }
`;

const Select = styled.select`
  padding: 2px 5px;
  width: 223px;
  height: 27px;
  background: rgba(0, 0, 0, 0.15);
  border: none;
  &:focus {
    outline: none;
  }
`;
const Option = styled.option``;
const CharBox = styled.div`
  width: 223px;
`;

const Right = styled.span`
  float: right;
`;
const HeroStats = styled.p`
  height: 23px;
  color: #202020;
  padding: 2px 9px;
  line-height: 22px;
  margin: 0;
`;

const HeroStatsBlack = HeroStats.extend`
  background: rgba(0, 0, 0, 0.15);
`;

class StartScreen extends React.Component {
  state = {
    name: "Герой",
    heroClass: ""
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleHeroClassChange = e => {
    this.props.heroChangeClass(e.target.value);
  };

  render() {
    const hero = this.props.hero;
    const heroCreate = this.props.heroCreate;

    return (
      <Wrapper>
        <Text>Назови себя, Герой!</Text>
        <Input value={this.state.name} onChange={this.handleNameChange} />
        <Text>Так ты, значит...</Text>
        <Select onChange={this.handleHeroClassChange}>
          <Option value="Mage">Маг</Option>
          <Option value="Thief">Вор</Option>
          <Option value="Warrior">Воин</Option>
        </Select>
        <CharBox>
          <HeroStats>
            Здоровье <Right>{hero.currentHp}</Right>
          </HeroStats>
          <HeroStatsBlack>
            Атака <Right>{hero.damage}</Right>
          </HeroStatsBlack>
          <HeroStats>
            Мана <Right>{hero.mana}</Right>
          </HeroStats>
          <HeroStatsBlack>
            Сила <Right>{hero.strength}</Right>
          </HeroStatsBlack>
          <HeroStats>
            Ловкость <Right> {hero.agility}</Right>
          </HeroStats>
          <HeroStatsBlack>
            Интеллект <Right>{hero.intelligence}</Right>
          </HeroStatsBlack>
        </CharBox>
        <Button onClick={() => heroCreate(this.state.name, this.state.heroClass)}>Начать историю!</Button>
      </Wrapper>
    );
  }
}

export default StartScreen;
