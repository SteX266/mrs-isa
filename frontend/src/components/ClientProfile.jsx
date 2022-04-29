
const ClientProfile = (props) =>  {  
    return <>



    
<div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value=""/></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Phone Number</label><input type="text" class="form-control" placeholder="enter phone number" value=""/></div>
                    <div class="col-md-12"><label class="labels">Address Line</label><input type="text" class="form-control" placeholder="enter address line" value=""/></div>
                    <div class="col-md-12"><label class="labels">Street number</label><input type="text" class="form-control" placeholder="enter street number" value=""/></div>
                    <div class="col-md-12"><label class="labels">City</label><input type="text" class="form-control" placeholder="enter city" value=""/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""/></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"/></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Loyalty points</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;15</span></div><br/>
                <div class="d-flex justify-content-between align-items-center experience"><span>Client tier</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;PLATINUM</span></div><br/>
                <div class="d-flex justify-content-between align-items-center experience"><span>Benefits</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;15% off on all reservations</span></div><br/>
                <div class="d-flex justify-content-end align-items-center experience"><button class="btn btn-danger delete-button" type="button" data-toggle="modal" data-target="#exampleModal">Delete Profile</button></div><br/>
                
            </div>
        </div>
    </div>
</div>



</>
}

export default ClientProfile;