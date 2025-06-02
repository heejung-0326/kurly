import React, {useState} from 'react';
import './css/login.css';

function Login(props) {
  let bottom = '';
  const [name, setName] = useState('');
  const [pw_name, setPw] = useState('');

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const pwChange =(e) => {
    setPw(e.target.value);
  }
  if(name){
    bottom=<p>사용자가 입력한 ID는 {name}이고, 패스워드는 {pw_name} 입니다. </p>
  }else{
    bottom='';
  }

  const onDateReset=(e)=>{
    setName('');
    setPw('');
  }
  return (
    <>
    <form>
      <fieldset>
        <h3>로그인</h3>
        
        <label for="id" aria-label="id"></label>
        <input type="text" id="id" name="name" value={name} onChange={nameChange} placeholder='아이디를 입력해주세요'/>

        <label for="pw" aria-label="pw"></label>
        <input type="password" id="pw" name="pw_name" value={pw_name} placeholder='비밀번호를 입력해주세요'onChange={pwChange}/>

        <ul className="find">
          <li>아이디찾기</li><span>&nbsp;</span>
          <li>비밀번호 찾기</li>
        </ul>

        <div className="btn_group">
          <button type="submit" className="btn1">로그인</button>
          <button type="submit" className="btn2">회원가입</button>
          <p>
            <button type="button" className="btn3" onClick={onDateReset}>초기화</button>
          </p>
        </div>
        {bottom}
      </fieldset>
    </form>
    </>
  );
}

export default Login;