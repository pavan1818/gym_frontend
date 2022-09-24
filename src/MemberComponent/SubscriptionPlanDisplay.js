import React from 'react'
import axios from 'axios'
import AdminServices from '../services/AdminServices';


class SubscriptionplanComponents extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            localities:[],
            center: []
        }
     
    }

   

//     // componentDidMount(){

//     //     AdminServices.getCenters().then((response) => {
//     //         this.setState({center:response.data})
//     //     })
       
//     // }

    componentDidMount(){

        AdminServices.getCenters().then((response) => {
            debugger    
            this.setState({center:response.data});
        })

        AdminServices.getLocalities().then((response) => {
            this.setState({localities:response.data});


        })
       
    }

    render(){
        return(
            <div>

                <label>
                Location : 
                 <select id="dropdown"> 
                    {this.state.localities.map((locality) => (
                     <option key={locality} value={locality}>
                    {locality}
                    </option>
                    ))}
                </select>
                </label>
                
            <br></br>
            <br></br>

            <label>
            Fitness_Centers : 
                <select>
                <option value="" disabled="disabled" selected="selected">select a type</option>
                    <option value="Gyms">Gyms</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Zumba">Zumba</option>
                    <option value="Swmming">Swmming</option>
                    <option value="Dance">Dance</option>
                </select>
            </label>

                <h1 style={{textAlign:'center', color:'green'}}>Center's List</h1>
                <table className = "table  table-striped" style={{border:'2px solid black'}}>                    
                    <thead>
                        <tr>
                            <th>CENTER-Id</th>
                            <th>CENTER-NAME</th>
                            <th>CONTACT</th>
                            <th>ADDRESS</th>
                            <th>DESCRIPTION</th>
                            <th>LOCALITY</th>
                            {/* <th>OWNER-ID</th>*/}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.center.map(
                                center =>
                                <tr key = {center.id}>
                                    <td>{center.id}</td>
                                    <td>{center.name}</td>
                                    <td>{center.contact}</td>
                                    <td>{center.address}</td>
                                    <td>{center.description}</td>
                                    <td>{center.locality}</td>
                                    {/* <td>{center.owner_id}</td> */}                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SubscriptionplanComponents
