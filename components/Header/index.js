import { connect } from 'react-redux'
import Header from './Header.js';

export default connect(mapStateToProps)(Header);

function mapStateToProps(state) {
  return {...state.clock};
}