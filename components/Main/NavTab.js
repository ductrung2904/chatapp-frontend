import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { isAuth, logout } from '../../actions/auth'
import { getUser } from '../../actions/user'

function NavTab({ username }) {
    const [userInfo, setUserInfo] = useState([])
    const PF = process.env.PUBLIC_FOLDER

    const loadUserInfo = () => {
        getUser(username).then(data => {
            if (data.error) {
                console.log(data.error);
            }
            else {
                setUserInfo(data);
            }
        })
    }

    useEffect(() => {
        loadUserInfo();
    }, [])

    const showUserInfo = () => {
        return (
            <>
                {userInfo && (
                    <div className="user__avatar">
                        <img src={PF + userInfo.profilePicture} alt="" title={userInfo.firstName + " " + userInfo.lastName} />
                        <div style={{ top: '55px' }} className="user__mode__icon__avt">
                            <div className="avatar"></div>
                        </div>
                        <div className="user__menu">
                            <a>
                                <span className="icon">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </span>
                                <span className="content">
                                    <span>Tài khoản</span>
                                </span>
                            </a>
                            <a>
                                <span className="icon">
                                    <i className="fa fa-cog" aria-hidden="true"></i>
                                </span>
                                <span className="content">
                                    <span>Cài đặt</span>
                                </span>
                            </a>
                            <a>
                                <span className="icon">
                                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                                </span>
                                {isAuth() && (
                                    <span className="content" onClick={() => logout(() => Router.replace(`/`))}>
                                        <span>Đăng xuất</span>
                                    </span>
                                )}
                            </a>
                        </div>
                    </div>
                )}
            </>
        )
    }

    return (
        <React.Fragment>
            <div className="user__container">
                {showUserInfo()}
            </div>
        </React.Fragment>
    )
}

export default NavTab
