class Body extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      fruits: []
    };
  }
componentDidMount(){
    fetch('/api/v1/fruits.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ fruits: data }) });
  }
render(){
    return(
      <React.Fragment>
      <div class="ui menu">
        <div class="header item">
          Our Company
        </div>
        <a class="item">
          About Us
        </a>
        <a class="item">
          Jobs
        </a>
        <a class="item active">
          Locations
        </a>
      </div>
      <div>
        <AllFruits fruits={this.state.fruits} />
      </div>

      </React.Fragment>
    )
  }
}