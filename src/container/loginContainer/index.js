import React, {
    Component
} from 'react';
import { connect } from 'react-redux';
import './login.scss';
import { googleLogin, loadCategories } from './action';

class LoginContainer extends Component {
    googleLogin() {
        this.props.googleLogin().then(user => {

        })
    }
    render() { 
        return(
            <div>
                <button onClick={this.props.googleLogin}>
                    login {this.props.email}
                </button>
                <button onClick={this.props.loadCategories}>
                    http 
                </button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state.loginReducer
});
const mapDispatchToProps = dispatch => ({
    googleLogin: () => dispatch(googleLogin()),
    loadCategories: () => dispatch(loadCategories()),
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);