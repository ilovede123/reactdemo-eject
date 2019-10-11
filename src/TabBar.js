import React from "react"
import { TabBar } from 'antd-mobile';
import { withRouter, Route } from "react-router-dom"
import Cxk from "./pages/Cxk"
import Chat from "./pages/Chat"
import Friend from "./pages/Friend"
import My from "./pages/My"
@withRouter
class TabBars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '/cxk',
            hidden: false,
            fullScreen: true,
        };
    }
    componentDidMount() {
        this.props.history.push("/cxk")
    }

    componentWillReceiveProps(nextProps) {

        let path = nextProps.location.pathname
        // if (path == "/detail") {
        //     this.setState({
        //         hidden: true
        //     })
        // }
        console.log(path)
        this.setState({
            selectedTab: path
        })
    }
    render() {
        // console.log(this.props)
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="蔡徐坤"
                        key="cxk"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(' + require("./assets/icons/cxk.png") + ') center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(' + require("./assets/icons/cxks.png") + ') center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === '/cxk'}
                        badge={'您有一条新信息'}
                        onPress={() => {
                            this.props.history.push("/cxk")
                        }}
                        data-seed="logId"
                    >
                        <Route path="/cxk" component={Cxk} />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(' + require("./assets/icons/chat.png") + ') center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(' + require("./assets/icons/chats.png") + ') center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="微信"
                        key="Koubei"
                        badge={999 + "+"}
                        selected={this.state.selectedTab === '/chat'}
                        onPress={() => {
                            this.props.history.push("/chat")
                        }}
                        data-seed="logId1"
                    >
                        <Route path="/chat" component={Chat} />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="Friend"
                        key="Friend"

                        selected={this.state.selectedTab === '/friend'}
                        onPress={() => {
                            this.props.history.push("/friend")
                        }}
                    >
                        <Route path="/friend" component={Friend} />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === '/my'}
                        onPress={() => {
                            this.props.history.push("/my")
                        }}
                    >
                        <Route path="/my" component={My} />
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default TabBars