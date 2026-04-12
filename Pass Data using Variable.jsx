import React from 'react';
import ReactDOM from 'react-dom';
class Customer extends React.Component  {
    render()  {
        return <h2>I am from {this.props.city}!</h2>;
    }
}
class Details extends React.Component  {
    render()  {
        return(
            <div>
                <h1>Hello</h1>
                <Custumor city="mumbai" />
            </div>
        );
    }
}
ReactDOM.render(<detail />, document.getElementById('root'));