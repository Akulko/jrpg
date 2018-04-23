import StartScreen from "../components/StartScreen";
import { connect } from "react-redux";
import { heroCreate } from "../store/modules/jrpg/actions/actions";

const mapStateToProps = state => {
  return {
    hero: state.hero
  };
};

const mapDispatchToProps = dispatch => {
  return {
    heroCreate: (name, heroClass) => dispatch(heroCreate(name, heroClass))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
