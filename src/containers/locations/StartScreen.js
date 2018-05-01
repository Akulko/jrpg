import StartScreen from "../../components/locations/StartScreen";
import { connect } from "react-redux";
import { heroCreate, heroChangeClass } from "../../store/modules/jrpg/actions/actions";

const mapStateToProps = state => {
  return {
    hero: state.hero
  };
};

const mapDispatchToProps = dispatch => {
  return {
    heroChangeClass: heroClass => dispatch(heroChangeClass(heroClass)),
    heroCreate: (name, heroClass) => dispatch(heroCreate(name, heroClass))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
