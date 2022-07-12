import React from "react";
import autoBind from "auto-bind";
import Swal from "sweetalert2";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      character: 50,
    };

    autoBind(this);
    // this.onChangeTitleEventHandler = this.onChangeTitleEventHandler.bind(this);
    // this.onChangeBodyEventHandler = this.onChangeBodyEventHandler.bind(this);
    // this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    // this.resetState = this.resetState.bind(this);
  }

  onChangeTitleEventHandler(e) {
    let number = 50;
    this.setState((prevState) => {
      return {
        ...prevState,
        title: e.target.value.slice(0, number),
        character:
          number - e.target.value.length < 0
            ? 0
            : number - e.target.value.length,
      };
    });
  }

  onChangeBodyEventHandler(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: e.target.value,
      };
    });
  }

  resetState() {
    this.setState({
      title: "",
      body: "",
    });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state.title, this.state.body);
    Swal.fire({
      title: "Notes created!",
      test: "Do you want to cotinue",
      icon: "success",
      confirmButtonText: "Cool",
    });
    this.resetState();
  }

  render() {
    return (
      <div className="note-input">
        <div className="note-input__title">
          <h2>Create Notes</h2>
        </div>
        <div className="note-input__title__char-limit">
          Limit Title Character: {this.state.character}
        </div>
        <form className="note-input__body" onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onChangeTitleEventHandler}
          />
          <textarea
            placeholder="Body"
            rows={12}
            value={this.state.body}
            onChange={this.onChangeBodyEventHandler}
          ></textarea>
          <button type="submit">Save Notes</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
