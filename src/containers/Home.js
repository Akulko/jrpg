import { enterLocation } from "../store/modules/jrpg/action";
import { connect } from "react-redux";
import Home from "../components/locations/Home";

function mapStateToProps(state) {
  return {
    hero: state.battle.hero,
    location: state.battle.location
  };
}

function mapDispatchToProps(dispatch) {
  return {
    enterLocation: location => dispatch(enterLocation(location))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
