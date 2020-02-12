import React from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Sider extends React.Component {
  state = {
    theme: "light",
    current: "1"
  };

  changeTheme = value => {
    this.setState({
      theme: value ? "dark" : "light"
    });
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Dashboard</span>
              </span>
            }
          >
            <Menu.Item key="customers">Customers</Menu.Item>
            <Menu.Item key="invoices">Invoices</Menu.Item>
            <Menu.Item key="payments">Payments</Menu.Item>
            <Menu.Item key="quotes">Quotes</Menu.Item>
            <Menu.Item key="po">Purchase Orders</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Reports</span>
              </span>
            }
          >
            <Menu.Item key="5">Sales Report</Menu.Item>
            <Menu.Item key="6">Audit Report</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>System</span>
              </span>
            }
          >
            <Menu.Item key="9">Settings</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Sider;
