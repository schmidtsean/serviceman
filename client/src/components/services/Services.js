import { Component } from 'react';
import axios from 'axios';
import Service from './Service'
class Services extends Component {
  state = { services: [] }
  componentDidMount() {
    const { handymanId } = this.props
    axios.get(`/api/handymen/${handymanId}/services`)
      .then( res => {
        this.setState({ services: res.data })
      })
      .catch( err => console.log(err))
  }
  addPost = (service) => {
    const { handymanId } = this.props
    axios.post(`/api/handymans/${handymanId}/services`, { service })
      .then( res => {
        const { services } = this.state 
        this.setState({ services: [...services, res.data ]})
      })
      .catch( err => console.log(err))
  }
  deletePost = (id) => {
    const { handymanId } = this.props
    axios.delete(`/api/handymen/${handymanId}/services/${id}`)
      .then( res => {
        const { services } = this.state 
        this.setState({ services: services.filter( p => p.id !== id )})
      })
      .catch( err => console.log(err))
  }
  render() {
    const { services } = this.state
    return (
      <>
      
        { services.map( p => 
          <Service key={p.id} {...p} deletePost={this.deletePost} />
        )}
      </>
    )
  }
}
export default Services;
