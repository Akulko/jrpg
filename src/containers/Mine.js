import { heroChangeLocation, heroMine } from "../store/modules/jrpg/actions/actions";
import { connect } from "react-redux";
import Mine from "../components/locations/Mine";

function mapStateToProps(state) {
  return {
    hero: state.hero
  };
}

function mapDispatchToProps(dispatch) {
  return {
    heroChangeLocation: location => dispatch(heroChangeLocation(location)),
    heroMine: gold => dispatch(heroMine(gold))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Mine);
