Product Requirement

To create an application with facebook like features ( posts , timeline )

Implementation

1) First I created a server,js and connected it to socket.io 

 All the socket functionality is implemented in server.js 


2) Front End

The App component has a post container which is comprised of below components that make up the POST UI

-Post Title: Container for Profile Name, Image and Time of Post

-Post Content - Container for text content of the post

-Action Buttons: Action buttons related to the post

-Likes Count: Count of the people who liked the post

-Main Comment: Container for comments section 
 -Comment Details - Name and content of the person commenting on the post
 -Comment Action Buttons - Action buttons related to the particular comment
 -ReplyToComments - Form to submit a REPLY to a COMMENT

-ReplyToComments: Form to submit a COMMENT to the POST

-AddPosts: Button which allows you to add a new post

-AddNewPosts: Form which opens in a modal and asks you for a name(profile name since we dont have a login feature) and post content for a new post

3) Back End

-REST API created using mockapi.io
-We have an array of posts stored in the database
-Each object is a post which has the below schema:

createdAt: date
id: number
imgUrl: string
profileName: string
text: string
comments: array of objects

-Each comment object has the below schema:

createdAt: date
text: string
commented_by: string
UserProfileImage: string
postedByImage: string
postId: number

4) Integration

-Explain how API calls happen in the App

I have one document which contains ---
				 let postData = {
				      "createdAt": new Date(),
				      "text": "sample text",
				      "imageUrl": "http://via.placeholder.com/36x36",
				      "profileName":"sample name",
				      comments: []
				    }

which ever comment just press enter to comment any posts.






START PROCESS ---->>>>


1- start server.js -----     node server.js

2- go to project folder ---- > a) npm install
								  npm start




Please let me know your doubts if any.