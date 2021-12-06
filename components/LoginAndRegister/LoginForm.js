import React, { useEffect, useState } from 'react'
import { authenticate, isAuth, login } from '../../actions/auth'
import Router from 'next/router'

export default function LoginForm() {
    const [values, setValues] = useState({
        username: '',
        password: '',
        error: '',
        message: '',
        loading: false
    });

    const { username, password, error, message, loading } = values;

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        setValues({ ...values });
        const user = { username, password };

        login(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            }
            else {
                authenticate(data, () => {
                    Router.push(`/main`);
                })
            }
        })
    }

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    }

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

    const loginForm = () => {
        return (
            <div className="form-container sign-in-container">

                <form onSubmit={handleSubmit}>
                    <h1>Đăng nhập</h1>
                    <div className="social-container">
                        <a href="a.html" className="social"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="a.html" className="social"><i className="fa fa-google" aria-hidden="true"></i></a>
                        <a href="a.html" className="social"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                    <span>hoặc sử dụng tài khoản</span>
                    {showError()}
                    {showMessage()}
                    {showLoading()}
                    <div className="w-100 position-relative">
                        <div className="w-100">
                            <input
                                type="text"
                                name="username"
                                className="form-control"
                                placeholder="Nhập Tên đăng nhập"

                                value={username}
                                onChange={handleChange('username')} />
                        </div>
                    </div>
                    <div className="w-100 position-relative">
                        <div className="w-100">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Nhập Mật khẩu"

                                value={password}
                                onChange={handleChange('password')} />
                        </div>
                    </div>
                    <a href="a.html">Quên mật khẩu</a>
                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
        )
    }

    return (
        <React.Fragment>
            {loginForm()}
        </React.Fragment>
    )
}
