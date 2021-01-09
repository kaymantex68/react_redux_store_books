import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/filter';
import Filter from '../components/Filter.jsx';
import {connect} from 'react-redux';



const mapStateToProps = ({ books }) => ({
    filter: books.filter
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(filterActions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Filter)

