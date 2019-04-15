class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }
  render() {
    return (
      <div>
        <h1>Quotes</h1>
        {this.state.quote1}
      </div>
    );
  }
}

export default Quotes;
