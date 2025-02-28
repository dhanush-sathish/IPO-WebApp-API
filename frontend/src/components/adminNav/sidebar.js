import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollVertical, faCartShopping, faSquarePollHorizontal, faCommentDots} from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="vh-100" style={{ backgroundColor: "#f1f2f7", width: "15%" }}>
                <div className="d-flex align-items-center justify-content-center" style={{ height: "60px" }} id="heading">
                    <h5><span>Bluestock fintech</span></h5> 
                </div>
                <hr className="my-1" style={{ backgroundColor: "#87949d" }}></hr>

                <div className="m-5" id="Menu">
                    <h6 className="mx-2" style={{ color: "#87949d", fontSize: "15px" }}>MENU</h6>
                    <div className="w-100">
                        <ul className="list-group" style={{ backgroundColor: "#f1f2f7" }}>
                            <li className="list-group-item border-0" style={{ backgroundColor: "#f1f2f7"}}>
                                <FontAwesomeIcon icon={faSquarePollVertical} size="lg" className="icon-style" flip="horizontal"/>
                                Dashboard
                            </li>
                            <li className="list-group-item border-0" style={{ backgroundColor: "#f1f2f7" }}>
                                <FontAwesomeIcon icon={faCartShopping} size="lg" className="icon-style"/>
                                Manage IPO
                            </li>
                            <li className="list-group-item border-0" style={{ backgroundColor: "#f1f2f7" }}>
                                <FontAwesomeIcon icon={faSquarePollHorizontal} className="icon-style "size="lg"/>
                                IPO Subscription
                            </li>
                            <li className="list-group-item border-0" style={{ backgroundColor: "#f1f2f7" }}>
                                <FontAwesomeIcon icon={faCommentDots} size="lg" className="icon-style"/> 
                                IPO Allotment
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="m-5" id="Others">
                    <h6 className="mx-2" style={{ color: "#87949d", fontSize: "15px" }}>OTHERS</h6>
                    <div className="w-100">
                        <ul className="list-group" style={{ backgroundColor: "#f1f2f7" }}>
                            <li className="list-group-item border-0" style={{ backgroundColor: "#f1f2f7"}}>
                                <FontAwesomeIcon icon={faSquarePollVertical} size="lg" className="icon-style" flip="horizontal"/>
                                Settings 
                            </li>
                            <li className="list-group-item border-0" style={{ backgroundColor: "#f1f2f7" }}>
                                <FontAwesomeIcon icon={faCartShopping} size="lg" className="icon-style"/>
                                API Manager
                            </li>
                            <li className="list-group-item border-0" style={{ backgroundColor: "#f1f2f7" }}>
                                <FontAwesomeIcon icon={faSquarePollHorizontal} className="icon-style "size="lg"/>
                                Accounts
                            </li>
                            <li className="list-group-item border-0" style={{ backgroundColor: "#f1f2f7" }}>
                                <FontAwesomeIcon icon={faCommentDots} size="lg" className="icon-style"/> 
                                Help
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default Sidebar;
