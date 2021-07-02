import React from 'react';
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <img src={confLogo} alt="Logo de la conferencia"></img>
                </div>

                <div>
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"></img>
                    <h1> Cristian <br></br> Devia </h1>
                </div>

                <div>
                    <p>FrontEnd Engineer</p>
                    <p>@Aquelarre</p>
                </div>

                <div>
                    #PlatziConf
                </div>

            </div>
        )
    }

}
export default Badge;