
import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    const target = e.target;
    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, description } = this.state;

    const randomNum = Math.ceil(Math.random() * 10000);
    const userData = {
      name,
      email,
      description,
      id: randomNum,
      role: "Member",
      photoUrl: "https://talkjs.com/docs/img/ronald.jpg"
    }
    localStorage.setItem('currentTalkjsUser', JSON.stringify(userData));
    this.props.history.push('/mynetwork');
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              name="name"
              onChange={this.handleChange}
              placeholder="Nome"
              className="input"
              required
            />
          
            <input type="email"
              name="email"
              onChange={this.handleChange}
              placeholder="E-mail"
              className="input"
              required
            />

            <textarea type="text"
              name="description"
              onChange={this.handleChange}
              placeholder="Descrição resumida"
              className="input textarea">
            </textarea>

            <input type="submit"
              className="button"
              placehoder="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
  
