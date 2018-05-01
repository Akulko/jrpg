import BattleField from "../../components/locations/BattleField";
import { connect } from "react-redux";
import { step, logClear, heroChangeLocation, newMonster } from "../../store/modules/jrpg/actions/actions";

const mapStateToProps = state => {
  return {
    hero: state.hero,
    monster: state.monster,
    entries: state.entries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    attack: () => dispatch(step()),
    newMonster: () => dispatch(newMonster()),
    heroChangeLocation: location => dispatch(heroChangeLocation(location)),
    logClear: () => dispatch(logClear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleField);
