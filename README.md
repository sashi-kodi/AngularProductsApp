1. This Products App has been created in Angular framework.
2. Got an issue with CORS while accessing the json url provided ( "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json"
).
3. Created a Node Server at port 3000 which would serve these products json file at the end point "/products".
4. Created Products Service which would make a HTTP Get call using HttpClient to this end point and fetch the products data.
5. Created a Product Component that would loop over the products fetched and display them.
6. Created a Carousel Component that would show the images.
7. Created a Custom directive to close the carousel and overlay when clicked outside.
8. Used mediaqueries and Flexbox layout for responsiveness.