import React from "react";
/********Checking lifecycle methods functionality */
class Header extends React.Component {
    /****1-------- */
    constructor(props) {
        console.log(props);
        super(props);
        this.state = { favFood: "rice" }
    }
    /****1-------- */

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favFood: "pizza" })
        }, 1000)
    }
    /****1-------- */

    static getDerivedStateFromProps(state, props) {
        console.log(state, props);
        return { favFood: props.favFood }
    }
    /****1-------- */

    render() {
        return (
            <>
                <h1>food is {this.state.favFood}</h1>
            </>
        )
    }
}
export default Header;