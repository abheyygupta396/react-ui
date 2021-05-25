import React from 'react';
import { Button, Avatar } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

const Content = ({children}) => {
    return (
        <div className='content' style={{ backgroundColor: "#F5F5F5", height: 395, marginTop: -50}}  >
            <div className="card text-left" >  
{/* */}         
                <div class="card-body" style={{ margin: 40 }}>

                    <br />
                    <div style={{ display: 'flex', flexDirection: 'row', fontSize: 12 }}>


                        {/* .............................................. */}

                       
                        <table style={{ marginTop: 30, marginLeft: -30, fontFamily: 'Ariel, Helvetica,default' }}>
                        {children}
                            <b style={{ marginTop: 90, fontSize: 12 }} class="card-title">Patient Information</b>
                            <tr>
                                <td>


                                    <div>
                                        <img style={{ borderRadius: 200, width: 90, height: 90, marginTop: 30 }} src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Service" />


                                    </div>

                                </td>
                            </tr>
                        </table>

                        {/* .............................................. */}

                        <table  style={{ marginTop: 80, marginLeft: -100, fontSize: 12, fontFamily: 'Ariel, Helvetica,default' }}>
                            <tr>
                                <td >
                                    <b style={{ fontSize: 20 }}>Sara Smith</b>
                                    <tr>
                                        <td>Phone:</td>
                                        <td>
                                            <b>302-865-9685</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>
                                            <b>ss@gmail.com</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Gender:</td>
                                        <td>
                                            <b>Female</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>age:</td>
                                        <td>
                                            <b>45</b>
                                        </td>
                                    </tr>
                                </td>

                                <br /><br />

                            </tr>
                        </table>

                        {/* .............................................. */}

                        <table className='multiple1' style={{ marginTop: 95, fontFamily: 'Ariel, Helvetica,default', fontSize: 14 }}>
                            <tr>
                                <td>
                                    <tr>
                                        <td>Surgery:</td>
                                        <td>
                                            <b>Rotator cuttoff</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Surgery Date:</td>
                                        <td>
                                            <b>15 Aug 2020</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Height(cm):</td>
                                        <td>
                                            <b>163</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Weight(lb):</td>
                                        <td>
                                            <b>110</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>BMI:</td>
                                        <td>
                                            <b>19</b>
                                        </td>
                                    </tr>
                                </td>


                                <br />
                            </tr>
                        </table>

                        {/* ..............................  */}

                        <table className='multiple1' style={{ marginTop: 95, fontFamily: 'Ariel, Helvetica,default' }}>
                            <tr>
                                <td style={{ fontSize: 15 }}>Anesthiologist:</td>
                                <td>
                                    <b style={{ fontSize: 15 }}>12345</b>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: 15 }}>Anesthiologist Phone:</td>
                                <td>
                                    <b style={{ fontSize: 15 }}>301-888-7453</b>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: 15 }}>Anesthiologist Email:</td>
                                <td>
                                    <b style={{ fontSize: 15 }}>christiana@h3a.com</b>
                                </td>
                            </tr>

                        </table>

                        {/* .............................. */}

                        <table className='multiple' style={{ marginTop: 80, marginRight: -15 }}>
                            <tr>
                                <td>
                                    <tr>
                                        <h3>Surgery Clearance</h3>
                                    </tr>
                                    <Avatar variant="h1" style={{ backgroundColor: 'green', marginLeft: 30, width: 80, height: 80 }}>
                                        Yes
                                     </Avatar>
                                </td>
                            </tr>

                        </table>

                    </div>

                </div>
                <div id="btnBack">
                    <Button style={{ fontSize: 10 }} color="primary" id="btn" >
                        <b>List of prior surgeries</b>
                    </Button>
                    <Button style={{ fontSize: 10 }} id="btn" >
                        <b>List of medical diagnosis</b>
                    </Button>
                    <Button style={{ fontSize: 10 }} id="btn" >
                        <b>List of medications</b>
                    </Button>
                    <Button style={{ fontSize: 10 }} id="btn" >
                        <b>Airway evaluation</b>
                    </Button>
                    <Button style={{ fontSize: 10 }} id="btn" >
                        <b>Anesthisia clearance and recomendation</b>
                    </Button>

                </div>
                <Divider />
                <br />

                <div style={{ marginLeft: '1%', marginTop: 0, fontSize: 14 }}>
                    <table>
                        <th>First time surgery</th>
                        <tr>
                            <td>No</td>
                        </tr>
                    </table>
                    <table>
                        <th>Family history of surgical complications</th>
                        <tr>
                            <td>No</td>
                        </tr>
                    </table>
                    <br />
                    <table>
                        <th>If yes, please provide more detail</th>
                        <tr>
                            <td>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation.
        </td>
                        </tr>
                    </table>
                    <b style={{ fontSize: 11 }}>Previous surgeries</b>
                    <table>
                        <tr>
                            <th>Surgery Type</th>
                            <th>Date</th>
                            <th>Anesthesia Type</th>
                            <th>Surgical Complications</th>
                            <th>Anesthetic Complications (nausea, vomating, difficult intubation)</th>
                            <th></th>
                        </tr>

                        <tr>
                            <td>Shoulder reconstruction</td>
                            <td>January 2008</td>
                            <td>General "Breathing Tube"</td>
                            <td>No</td>
                            <td>No</td>
                            <td>  <DeleteIcon /> <CreateIcon />  </td>
                            <tr>



                            </tr>

                        </tr>
                    </table>



                    <Button variant="contained" color="primary" style={{ fontSize: 10 }}>
                        +Add Surgery
                </Button>
                    <br />
                </div>

            </div>


        </div>



    );

}



export default Content;