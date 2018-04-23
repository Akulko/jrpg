import { heroChangeLocation } from "../store/modules/jrpg/actions/actions";
import { connect } from "react-redux";
import Home from "../components/locations/Home";

function mapStateToProps(state) {
  return {
    hero: state.hero
  };
}

function mapDispatchToProps(dispatch) {
  return {
    heroChangeLocation: location => dispatch(heroChangeLocation(location))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
