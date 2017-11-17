/**
 * Created by MHC-PC on 2017/11/16.
 */
import React from 'react';

export default class StateUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            number:'',
            title:'未开',
            key:1
        }
    }

    onChange=(key)=>{
        return (e)=>{
            let number = e.target.value;
            console.log(key);
            if(number>=100){
                this.setState({
                    title:'沸腾',
                    number,
                    key
                })
            }else{
                this.setState({
                    title:'未开',
                    number,
                    key
                })
            }
        }
    }

    render(){
        const {number,key} = this.state;
        const number1 =number==''?'':key==1?number:Number(number)/2 ;
        const number2 =number==''?'':key==2?number:Number(number)*2 ;
        return (
            <div>
                <h2>StateUp</h2>
                <h2>child1*2=child2</h2>
                <div>{this.state.title}</div>
                <input type="text" value={number} onChange={this.onChange}/>
                <StateUpChild  change={this.onChange(1)} number={number1}  placeholder="child1"></StateUpChild>
                <StateUpChild  change={this.onChange(2)} number={number2}  placeholder="child2"></StateUpChild>
            </div>
        );
    }
}

class StateUpChild extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {placeholder,number,change} = this.props;
        return(
            <div>
                <input type="text" value={number} onChange={change}  placeholder={placeholder}/>
            </div>
        );
    }
}
