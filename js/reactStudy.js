/**
 * Created by MHC-PC on 2017/11/15.
 */
import React from 'react';

export default class ReactStudy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }
    componentDidMount(){
         this.timer = setInterval(this.handlerle,1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    // handlerle = ()=>{}写法需要babel-preset-stage-0插件
    handlerle = ()=>{
        let nowDate=new Date();
        this.setState({
            time:nowDate
        });
    }
    render() {

        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        );
    }
}
