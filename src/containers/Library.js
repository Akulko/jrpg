import { heroChangeLocation, heroManaRegen } from "../store/modules/jrpg/actions/actions";
import { connect } from "react-redux";
import Library from "../components/locations/Library";

function mapStateToProps(state) {
  return {
    hero: state.hero
  };
}

function mapDispatchToProps(dispatch) {
  return {
    heroChangeLocation: location => dispatch(heroChangeLocation(location)),
    heroManaRegen: mana => dispatch(heroManaRegen(mana))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
