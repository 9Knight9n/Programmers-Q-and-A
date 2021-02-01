
import React, { Component } from 'react';
import './CSS/email_vf.css';


class EmailVerification extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>        
    
                <body className="email_body"></body>
                <div className="email2"> We're thrilled to have you here! Get ready to dive into your new account. </div>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td bgcolor="#161547" align="center">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" className="table3">
                                
                                    <tr>
                                        <td align="center" valign="top" className="td11"></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#161547" align="center" className="td12">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" className="table1">
                                    <tr>
                                        <td bgcolor="#ffffff" align="center" valign="top" className="td1">
                                            <h1 className="email_h1">Welcome!</h1> <img src=" https://img.icons8.com/clouds/100/000000/handshake.png" width="125" height="120" className="email_img"/>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#161547" align="center" className="td13">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" className="table2">
                                    <tr>
                                        <td bgcolor="#ffffff" align="left" className="td2">
                                            <p className="email_p">We're excited to have you get started. First, you need to confirm your account. Just press the button below.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td bgcolor="#ffffff" align="left">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td bgcolor="#ffffff" align="center" className="td14">
                                                        <table border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td align="center" className="td3" bgcolor="#FFA73B"><a href="#" target="_blank" className="td4">Confirm Account</a></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td bgcolor="#ffffff" align="left" className="td5">
                                            <p className="email_p1">If that doesn't work, copy and paste the following link in your browser:</p>
                                        </td>
                                    </tr> 
                                    <tr>
                                        <td bgcolor="#ffffff" align="left" className="td6">
                                            <p className="email_p2"><a href="#" target="_blank" className="email_a3">https://bit.li.utlddssdstueincx</a></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td bgcolor="#ffffff" align="left" className="td7">
                                        <p className="email_p3">If you have any questions, just reply to this email—we're always happy to help out.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td bgcolor="#ffffff" align="left" className="td8">
                                        <p className="email_p4"><br/>404 Team</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#161547" align="center" className="td15">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" className="table4">
                                    <tr>
                                        <td bgcolor="#ffffff" align="center" className="td9">
                                            <h2 className="email_h2">Need more help?</h2>
                                            <p className="email_p5"><a href="#" target="_blank" className="email_a2">We&rsquo;re here to help you out</a></p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#161547" align="center" className="td16">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" className="table5">
                                    <tr>
                                        <td bgcolor="#161547" align="left" className="td10"> <br/>
                                        <p className="email_p6">If these emails get annoying, please feel free to <a href="#" target="_blank" className="email_a">unsubscribe</a>.</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    
            </React.Fragment>
            
         );
    }
}
 
export default EmailVerification;