import React from "react";

const defaultStyle: React.CSSProperties = {
  width: 120,
  marginRight: 10,
  padding: 10,
  borderRadius: 10,
  border: "none",
  cursor: "pointer"
};
function ButtonFunc({ user }: { user: string }) {
  const sayHello = () => alert(`Hello ${user}!`);
  const handleClick = () => setTimeout(sayHello, 3000);

  return (
    <button style={defaultStyle} onClick={handleClick}>
      함수 인사👋
    </button>
  );
}

class ButtonClass extends React.Component<{ user: string }> {
  sayHello = () => alert(`Hello ${this.props.user}!`);
  handleClick = () => {
    setTimeout(this.sayHello, 3000);
  };

  render() {
    return (
      <button style={defaultStyle} onClick={this.handleClick}>
        클래스 인사👋
      </button>
    );
  }
}
export { ButtonFunc, ButtonClass };
