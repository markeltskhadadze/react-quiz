import { Component } from "react"
import classes from './Layout.module.css'


class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>



                <main className>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout