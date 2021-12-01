import React from "react";
import "../css/icomoon.css";
import "../css/common.css";
import "../css/table.css";
import "../css/sidebars.css";
import "../css/menu-details.css";
import logo from "../images/logo.png";
import user from "../images/user.png";
import sidemenuJson from "../constants/sidemenu.json";
class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subsideMenu: false,
      name: "",
    };
  }

  openPopUp(data) {
    this.setState({ subsideMenu: true, name: data.name });
  }
  closepopup() {
    this.setState({ subsideMenu: false, name: "" });
  }

  render() {
    return (
      <div class="sidemenufull">
        <div class="sidebar_main">
          <div class="logo">
            <a href="" class="logo-sm">
              <img src={logo} alt="logo" />
            </a>
            <a href="" class="logo-expand">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <nav class="nav">
            <div class="nav_list main_nav">
              {sidemenuJson.mainMenu.map((data) => {
                return (
                  <a
                    href="#"
                    class="nav_link"
                    onClick={this.openPopUp.bind(this, data)}
                  >
                    <i class={`icon-${data.icon}  nav_icon`}></i>
                    <span class="nav_name">{data.name}</span>
                  </a>
                );
              })}
            </div>
            <div class="nav_list">
              {sidemenuJson.notification_menu.map((data) => {
                return (
                  <a href="#" class="nav_link">
                    <i class={`icon-${data.icon} nav_icon`}></i>
                    <span class="nav_name">{data.name}</span>
                  </a>
                );
              })}

              <a href="#" class="nav_link user">
                <img src={user} alt="user" />
                <span class="nav_name">User Name</span>
              </a>
              <a href="#" class="nav_link toggle">
                <i className="fa fa-bars"></i>
              </a>
            </div>
          </nav>
          {this.state.subsideMenu ? (
            <div class="menu_details">
              <span
                onClick={this.closepopup.bind(this)}
                className="close_sidemenu"
              ></span>
              <h3>{this.state.name}</h3>
              <p>Here you will find list of options for Studies section.</p>
              <div class="nav">
                <div class="nav_list">
                  {sidemenuJson.subMenu.map((data) => {
                    return (
                      <a href="#" class="nav_sublink">
                        <i class={`icon-${data.icon} nav_icon`}></i>
                        <span class="nav_name">{data.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default SideMenu;
