import React from 'react';
import ReactDOM from 'react-dom';
class Custumor extends React.Component  {
    constructor (props)  {
        super (props);
        this.info = {location:"Tamil Nadu"}
    }
    render()  {
        return <h2>I am from {this.props.city},{this.info.location}!</h2>;
    }
}
class Details extends React.Component  {
    render()  {
        return(
            <div>
                <h1>Hello</h1>
                <Custumor city="chennai" />
            </div>
        );
    }
}
ReactDOM.render(<detail />, document.getElementById('root'));