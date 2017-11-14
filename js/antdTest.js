/**
 * Created by MHC-PC on 2017/11/14.
 */
import React from 'react';
import { DatePicker} from 'antd'

export default class DateSelect extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <DatePicker></DatePicker>
        );
    }
}