import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/filter';
import Filter from '../components/Filter.jsx';
import {connect} from 'react-redux';



const mapStateToProps = ({filter}) => ({
    filter: filter.items,
    searchQuery: filter.searchQuery,
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(filterActions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Filter)

