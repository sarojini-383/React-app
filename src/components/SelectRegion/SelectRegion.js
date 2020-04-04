import React from 'react';

class SelectRegion extends React.Component {

    // OnChange = (e) => {
    //     this.props.onChangeSelectedRegion(e.target.value)
    // }
    render() {
        return <select className="reg" onChange={this.props.onChange}>
        <option value="All" >All</option>
        {this.props.countryRegions.map(item =>
            <option  value={item} >{item}</option>)}
                    </select>
    }
}

export { SelectRegion }

