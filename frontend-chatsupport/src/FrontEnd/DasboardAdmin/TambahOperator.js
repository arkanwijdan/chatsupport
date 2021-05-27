import React from 'react'
import './tambahoperator.css'

const TambahOperator = () => {
    return (
        <div className="dashboard">
            <h1 className="title">TAMBAH OPERATOR</h1>
            <div className="box-items">
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6" >
                       <h6>Firstname : </h6>
                       <input class="inputname" id="inputfirstname" placeholder="First Operator"/>
                    </div>
                    <div class="form-group col-md-6">
                        <h6>Lastname : </h6>
                        <input type="lastname" class="inputname" id="inputlastname" placeholder="Last Name Operator"/>
                    </div>
                </div>
                <div class="form-group">
                    <h6>Username :</h6>
                    <input type="text" class="form-control1" id="inputAddress" placeholder="Username Operator"/>
                </div>
                <div class="form-group">
                    <h6>Password :</h6>
                    <input type="password" class="form-control1" id="inputAddress2" placeholder="Password Operator"/>
                </div>
                <div class="form-group">
                    <h6>NIK :</h6>
                    <input type="text" class="form-control1" id="inputAddress3" placeholder="NIK Operator"/>
                </div>
                <button type="submit" class="btn btn-primary btn-lg active">Sign in</button>
            </form>
            </div>
            
        </div>
    )
}

export default TambahOperator
