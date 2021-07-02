import React from 'react';
import "../styles/Badge.css"
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {

    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"></img>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://s.gravatar.com/avatar/478892551ca54e1ddbb7584fa8b1643a?s=80" alt="Avatar"></img>
                    <h1> Cristian <br></br> Devia </h1>
                </div>

                <div className="Badge__section-info">
                    <h3>FrontEnd Engineer</h3>
                    <div>@Aquelarre</div>
                </div>

                <div className="Badge__footer">
                    #PlatziConf
                </div>

            </div>
        )
    }

}
export default Badge;