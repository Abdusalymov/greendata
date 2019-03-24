import { connect } from 'react-redux';
import ListEmployees from '../compontens/ListEmployees';

const mapStateToProps = (state) => ({
    list: [...state],
    lastElem: state[state.length-1],
});

export default connect(
    mapStateToProps
)(ListEmployees);