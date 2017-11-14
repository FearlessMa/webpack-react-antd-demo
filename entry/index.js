/**
 * Created by MHC-PC on 2017/11/14.
 */
import React from 'react';
import ReactDom from 'react-dom';
import 'main';
import 'font';
//import {DatePicker} from 'antd';
import DateSelect from 'js/antdTest';

function nodeDiv (){

    let element = document.createElement('div');
    element.setAttribute('id','app');
    return element;
}

document.body.appendChild(nodeDiv());

ReactDom.render(
    <div>
        <div className='test'>this is a template</div>
        <div>
            <i className="iconfont icon-mokuaifangda iconStyle "></i>
            <br/>
            <i className="iconfont icon-xiaoxiguangbo iconStyle"></i>
            <br/>
            <i className="iconfont icon-pingtaiguanli iconStyle"></i>
            <br/>
            <br/>
            <i className="iconfont icon-xinyongqia-copy iconStyle"></i>
        </div>
        <DateSelect></DateSelect>
    </div>,
    document.getElementById('app')
);
//<div><img src="../img/a.jpg" alt="test"/></div>
