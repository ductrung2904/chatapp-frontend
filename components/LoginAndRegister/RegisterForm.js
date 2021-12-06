import React, { useEffect, useState } from 'react'
import { isAuth, register } from '../../actions/auth';

export default function RegisterForm() {
    const [values, setValues] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        gender: '',
        phone: '',
        email: '',
        address: '',
        loading: false,
        error: '',
        message: ''
    })

    const { username, password, firstName, lastName, gender, phone, email, address, loading, message, error } = values;

    useEffect(() => {
        isAuth()
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log({ username, password, firstName, lastName, gender, phone, email, address })
        setValues({ ...values, loading: true, error: false });
        const user = { username, password, firstName, lastName, gender, phone, email, address };

        register(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            }
            else {
                setValues({
                    ...values,
                    username: '',
                    password: '',
                    firstName: '',
                    lastName: '',
                    gender: '',
                    phone: '',
                    email: '',
                    address: '',
                    loading: false,
                    message: data.message,
                    error: ''
                });
            }
        })
    }

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    }

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

    const registerForm = () => {
        return (
            <div className="form-container sign-up-container">
                <form onSubmit={handleSubmit}>
                    {showError()}
                    {showLoading()}
                    {showMessage()}
                    <h1>Tạo tài khoản mới</h1>
                    <div className="w-100 position-relative">
                        <div className="w-100">
                            <input
                                type="text"
                                name="username"
                                className="form-control"
                                placeholder="Tên đăng nhập"
                                value={username}
                                onChange={handleChange('username')}
                            />
                        </div>
                    </div>
                    <div className="w-100 position-relative"><div className="w-100">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={handleChange('password')}
                        />
                    </div>
                    </div>
                    <div className="w-100 position-relative">
                        <div className="row">
                            <div className="col-8">
                                <input
                                    type="text"
                                    name="firstName"
                                    className="form-control"
                                    placeholder="Họ"
                                    value={firstName}
                                    onChange={handleChange('firstName')}
                                />
                            </div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    name="lastName"
                                    className="form-control"
                                    placeholder="Tên"
                                    value={lastName}
                                    onChange={handleChange('lastName')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-100 position-relative">
                        <div className="w-100">
                            <input
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={handleChange('email')}
                            />
                        </div>
                    </div>
                    <div className="w-100 position-relative">
                        <div className="w-100">
                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                placeholder="Số điện thoại"
                                value={phone}
                                onChange={handleChange('phone')}
                            />
                        </div>
                    </div>
                    <div className="w-100 position-relative">
                        <div className="w-100">
                            <input
                                type="text"
                                name="address"
                                className="form-control"
                                placeholder="Địa chỉ"
                                value={address}
                                onChange={handleChange('address')}
                            />
                        </div>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline my-2 text-align-left w-100 pl-0">
                        <span className="mx-2">Giới tính:</span>
                        <div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    className="custom-control-input"
                                    value="Nam"
                                    onChange={handleChange('gender')} />
                                <label className="custom-control-label" htmlFor="male">Nam</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    className="custom-control-input"
                                    value="Nữ"
                                    onChange={handleChange('gender')} />
                                <label className="custom-control-label" htmlFor="female">Nữ</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit">Đăng ký</button>
                </form>
            </div>
        )
    }

    return (
        <React.Fragment>
            {registerForm()}
        </React.Fragment>
    )
}
