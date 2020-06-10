import React from 'react';

class SelectRegion extends React.Component {


    render() {
        return <select className="reg" onChange={this.props.onChange}>
        <option defaultValue="All" >All</option>
        {(this.props.countryRegions!=undefined)?
        this.props.countryRegions.map(item =>
            <option  value={item} >{item}</option>):null}
        
                    </select>
    }
}

export { SelectRegion }

