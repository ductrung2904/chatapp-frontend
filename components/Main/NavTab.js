import React from 'react'
import Router from 'next/router'
import { isAuth, logout } from '../../actions/auth'

function NavTab() {
    return (
        <div className="user__container">
            <div className="user__avatar">
                <img src="https://s120-ava-talk.zadn.vn/0/f/1/c/8/120/a8261386b7e2ab68b03882809a23c452.jpg" alt="" title="Đức Trung" />
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
        </div>
    )
}

export default NavTab
