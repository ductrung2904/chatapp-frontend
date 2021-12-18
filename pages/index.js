import Head from 'next/head'
import Script from 'next/script'
import LoginForm from '../components/LoginAndRegister/LoginForm';
import Register from '../components/LoginAndRegister/RegisterForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Realtime Chat App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="login_page">
        <div className="container" id="container">
          <Register />
          <LoginForm />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Bạn đã có tài khoản?</h1>
                <p>Để kết nối với chúng tôi, vui lòng đăng nhập.</p>
                <button className="ghost" id="signIn">Đăng nhập</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Khách hàng mới?</h1>
                <p>Đăng ký thông tin và tham gia cùng chúng tôi</p>
                <button className="ghost" id="signUp">Đăng ký</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script>
        {`
                    var signUpButton = document.getElementById('signUp');
                    var signInButton = document.getElementById('signIn');
                    var container = document.getElementById('container');
                    
                    signUpButton.addEventListener('click', () => {
                        container.classList.add("right-panel-active");
                    });
                    
                    signInButton.addEventListener('click', () => {
                        container.classList.remove("right-panel-active");
                    });
                `}
      </Script>
    </div >
  )
}