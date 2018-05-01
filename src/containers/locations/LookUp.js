import LookUp from "../../components/gui/LookUp";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    location: state.hero.location
  };
};

export default connect(mapStateToProps)(LookUp);
