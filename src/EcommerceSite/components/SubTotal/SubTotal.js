import React,{Component} from 'react'
import {observer} from 'mobx-react'

import {
    SubTotalBlock,
    Txt,
    Amount
} from './styledComponent'

@observer
class SubTotal extends React.Component{

    render(){
        const {cartStore}=this.props;
        return <SubTotalBlock><Txt>SUBTOTAL</Txt>
        <Amount><span>&#8377;</span>{cartStore.totalCartAmount.toFixed(2)}</Amount></SubTotalBlock>
    }
}
export default SubTotal;