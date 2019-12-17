import React, { Component } from "react";
import axios from "axios";

class InsertPosts extends Component {
  constructor(props) {
    super(props);

    // no-useless-constructor
    // bind()를 이용하면 이벤트 핸들러 함수가 클래스의 인스턴스인 React 엘리먼트에 대한 참조를 유지할 수 있다.
    // 화살표 함수(() => {})를 사용할때는 bind(this)로 바인딩 하지 않는다.
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    title: "",
    author: "",
    content: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const posts = {
      title: this.state.title,
      author: this.state.author,
      content: this.state.content
    };

    axios
      .post("/api/insert", JSON.stringify(posts), {
        headers: { "Content-Type": "application/json;charset=UTF-8" }
      })
      .then(response => {
        console.log(response);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            title :
            <input
              type="text"
              placeholder="타이틀"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            author:
            <input
              type="text"
              name="author"
              placeholder="작가"
              value={this.state.author}
              onChange={this.handleChange}
            />
            content :
            <input
              type="text"
              placeholder="내용"
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">등록</button>
        </form>
      </div>
    );
  }
}

export default InsertPosts;
