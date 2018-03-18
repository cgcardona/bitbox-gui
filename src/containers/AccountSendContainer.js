import { connect } from 'react-redux'
import AccountSend from '../components/AccountSend'
import {
  updateAccountSendValue
} from '../actions/AccountSendActions';

const mapStateToProps = (state) => {
  return {
    configuration: state.configuration.wallet,
    wallet: state.wallet,
    accountSend: state.accountsend
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccountSendValue: (prop, value) => {
      dispatch(updateAccountSendValue(prop, value))
    }
  }
}
 
const AccountSendContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountSend)
 
export default AccountSendContainer