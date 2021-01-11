import { bindActionCreators } from 'redux';
import * as bookCardActions from '../actions/cart';
import BookCard from '../components/BookCard.jsx';
import {connect} from 'react-redux';



const mapStateToProps = ({cart},{id}) => ({
    addedCount: cart.items.reduce(
        (count,book) => count +(book.id===id ? 1:0), 0,
    ),
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(bookCardActions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(BookCard)