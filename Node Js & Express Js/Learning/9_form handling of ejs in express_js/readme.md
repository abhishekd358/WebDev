basically the form handling means we handle the user input

this form is present in .ejs file

form Tag have to attribute :
        1. method = POST/GET
        2. action = '/example'  it is route were we redirect user and on this route we can access the user input data in the form

        3. name="UserName"  this name is treat as a 'key' and user input in the textbox treat as its 'value'



    
for security and confidentiality we hide the user information that reflect in the url of the browser when user submit the form .for hiding information we encode the information of user in the url. for that we use middleware
        app.use(express.urlencoded({ extended: true })); 

        .urlencoded() does not take the argument


when user submit the form the information store in JSON format

to access the information use 
        res.body