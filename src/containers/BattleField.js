import BattleField from "../components/locations/BattleField";
import { connect } from "react-redux";
import { step, clearLog, enterLocation, newMonster } from "../store/modules/jrpg/actions";

const mapStateToProps = state => {
  return {
    hero: state.hero,
    location: state.location,
    monster: state.monster,
    entries: state.entries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    attack: () => dispatch(step()),
    newMonster: () => dispatch(newMonster()),
    enterLocation: location => dispatch(enterLocation(location)),
    clearLog: () => dispatch(clearLog())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleField);
