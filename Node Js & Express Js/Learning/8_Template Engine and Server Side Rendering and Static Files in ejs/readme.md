-template engine there are lots.

-template engine use to render the html files with embedded javascript

-this helps for the server side rendering i.e ssr

-ssr(server side rendering) is nothing but fetching the data from db or from user and render that info into html pages

-to use template engine install ejs(embedded javascript)
    >npm install ejs


-.ejs files always created into the 'views' folder

- .ejs file render in the particular route using
    .render() method

- .render() does not require the absolute file path it automatically detect . we have to need only pass the .ejs file name 
        ex: .render('index.ejs', {obj})

    obj : is the obj have the values we can this value dynamically use in index.ejs file

index.ejs :-------->
                <body>
                    <h1>Hey, Yoooo <%= obj.name%>!!!!! Now you learn how to render the .ejs Files</h1>
                    <h4>Country of <%= obj.name%> is <%= obj.country%> </h4>
                </body>

<%= > ---> output data
<% for %> -----> looping 
<% if %>  ------> conditions
<%# %>  ----> comments







+++++++++++++++++++++++++++++++ Static File ++++++++++++++++++++++++++

static file are like css , images , videos , javascript

- we can't give css external file base styling to the index.ejs so that we have to make folder name as 'public' in that create style.css which going to apply on index.ejs 
- for that we have to make it static folder i.e public

- to make static file we have to use a middleware i.e static

    syntax: epress.static()

- in static() method , we have to pass the absolute path of the folder that we want to make static

- conventionally, public is folder were we save over static files


- below id the code

    app.use(epxress.static(path.join(path.resolve, 'public')))

-index.ejs 
        <link rel="stylesheet" href="style.css">