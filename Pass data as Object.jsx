import React from 'react';
import ReactDOM from 'react-dom';
class Customer extends React.Component  {
    render()  {
        return <h2>I am from {this.props.customerDetails.contry}!</h2>;
    }
}
class Details extends React.Component  {
    render()  {
        const customerinfo = {city : 'Bangalor', contry : 'india'}; 
        return(
            <div>
                <h1>Hello</h1>
                <Custumor customerDetails={customerinfo} />
            </div>
        );
    }
}
ReactDOM.render(<detail />, document.getElementById('root'));