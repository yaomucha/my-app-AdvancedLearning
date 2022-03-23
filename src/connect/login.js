import { connect } from 'react-redux'
import {getSumit} from '../reducer/system'
import Login from '../components/Login';

export default connect(
    (state) => ({
        count: state.get('system').submit
    }),
    (dispatch) => ({
        getSumit: (values) => dispatch(getSumit(values))
    })
  )(Login)