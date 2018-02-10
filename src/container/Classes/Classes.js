import React from "react";
import './class.less';
import Header from "../../components/Header/Header";
import {Link} from 'react-router-dom';
export default class Classes extends React.Component{
    render(){
        return (
            <div>
                <Header title="分类" hasReg={false} hasBack={true}/>
                <ul className="class-container">
                  <li>
                    <Link to="/lists/phone">
                      <i className="iconfont icon-msnui-tel" style={{color:'red'}}/>
                      <div>
                        <p>手机、智能硬件</p>
                        <p>手机、手机配件、平板电脑</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/lists/computer">
                      <i className="iconfont icon-diannao" style={{color:'green'}}/>
                      <div>
                        <p>电脑、平板</p>
                        <p>台式机/平板电脑/平...</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/lists/earphone">
                      <i className="iconfont icon-erji" style={{color:'orange'}}/>
                      <div>
                        <p>外设、办公、酷新奇</p>
                        <p>外设产品/办公设备</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/lists/household">
                      <i className="iconfont icon-leijiayongdianqix" style={{color:'blue'}}/>
                      <div>
                        <p>家用电器</p>
                        <p>大家电/生活电器</p>
                      </div>
                    </Link>
                  </li>

                </ul>
            </div>
        )
    }
}