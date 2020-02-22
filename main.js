let customerCommunicationObj1=new customerCommunicationModel();
    customerCommunicationObj1.emailId="Nahidfatima01@gmail.com";
    customerCommunicationObj1.mobileNo="8269881294";

let customerCommunicationObj2=new customerCommunicationModel();
    customerCommunicationObj2.emailId="Nahidfatima02@gmail.com";
    customerCommunicationObj2.mobileNo="8269881293";


let customerCommunicationArrayObj=new Array();
    customerCommunicationArrayObj.push(customerCommunicationObj1);
    customerCommunicationArrayObj.push(customerCommunicationObj2);


let customerLoginObj=new customerLoginModel();
    customerLoginObj.userName="Nahid@123";
    customerLoginObj.password="123";



let customerModelObj=new customerModel();
    customerModelObj.firstName="Nahid";
    customerModelObj.lastName="Ansari";
    customerModelObj.age=28;
    customerModelObj.customerLogin=customerLoginObj;//one to one
    customerModelObj.customerCommunicationList=customerCommunicationArrayObj;//one to many



    //Display as Javascript object in console
    console.log(customerModelObj);

    //Display as Json object in console
    let customerModelJson=JSON.stringify(customerModelObj);//serialization
    console.log(customerModelJson);

    let customerModelObj1=JSON.parse(customerModelJson);
    console.log(customerModelObj1);