import { connect } from "react-redux";
import BriefInfo from "../components/gui/BriefInfo";

function mapStateToProps(state) {
  return {
    hero: state.hero
  };
}

export default connect(mapStateToProps)(BriefInfo);
