# Befriend A Bear

## Overview

A website for playing a game revolving around answering questions on how to react in different scenarios whilst trying to make friends with a bear. The website features a home page with the game as well as instructions on how to play it, and a contact page to make the creator aware of any issues with the game or suggest any new content. For this website, the primary goal is for users to enjoy the game, share it with their friends and interact with the website's social media pages.

This website tries to make the game as intuitive and enjoyable as possible to play. It also tries to make getting in contact with the developers easy and possible through a number of channels.

# Index


## UX

### **Strategy**

The business goals of this website are:
* To raise awareness of the game and it's developer.
* To provide distinguished and intuitive UX to enable users to spend long enough on the site long enough to share the link with friends and interact on the website's social media pages.

The customer goals of this website are:
* To play a fun game.
* To intuitively understand how the game is played, but be able to find further information if needed.
* To learn some information about bears.
* To find something enjoyable they can share with their friends.
* To intuitively navigate to the contact page to detail any issues or recommendations.

Visitors to this website are searching for:
* A fun and unique game.
* A game which can be played more than once in an attempt to improve their score.
* A game which has content based on bears and their behaviour.

This website is the best way to help them achieve these things because:
* Few games have bear-based content.
* This website is:
    * Intuitive and easy to navigate.
    * Able to guide the user through the game in a way that is easy to understand.
    * Able to guide them to the goal of the website - to get in contact via the form or social media pages.

#### Client stories

1. As a new visitor to the website, I want to easily navigate around the site so that I can find what I’m looking for as quickly as possible.
2. As a new visitor to the website, I want to be able to find the rules of the game so that I can understand how to play.
3. As a new visitor to the website, I want to be able to play the game soon after visiting the site to have fun.
4. As a new visitor to the website, I want to understand how to fill out the form on the Contact page so that I can ask any questions I may have.
5. As an interested user, I want to be able to share the game with my friends so that they can play too.
6. As an interested user, I want to navigate to social media pages so that I can learn of any other games available or in development.
7. As a returning visitor to the website, I want to easily navigate to the contact page so that I can give suggestions of game developments.
8. As an animal lover, I want to be able to play a game related to animals so that I can learn more about them.

### **Scope**

Based on the simple customer and business goals of Befriend a Bear, the majority of the scope of the project will focus on the game and associated feedback and interactivity with some basic features to support the business goals of the website.

#### Initial Feature Plan

These items must be completed for initial release:

* A Home page containing a game which can be played until the user either fails or completes the game and can then be restarted.
* A contact form allowing the user to provide detailed descriptions of suggestions to improve or develop the game, or to ask questions about the game.

### **Structure**

#### Consistency Predictability and Learnability:

This website will follow convention for its navigational elements. Predictably, these will be found at the top right of the browser window on any screen size and will be consistent in their coloring and design (although smaller screen sizes will offer a drop down option for the menu, again following convention).
Consistency will also be applied to the title on both pages and any other boxes of information a user may need to understand quickly when visiting a page for the first time.
This will give the website a high learnability and will be largely intuitive for finding the game or moving through to the Contact page. 

#### Visibility:

The website will encapsulate the vast majority of the content of each page into the viewport so the user can immediately see and understand the purpose of the page.

#### Feedback:

Feedback will be added to the website for links as well as the submission button for the planned contact form. The form will also provide feedback should there be an error with any of the form entries.
Whilst playing the game, feedback will highlight to the user the impacts of their decisions as well as the outcome of the game.

### **Skeleton**

#### Wireframe mockups: 

** The wireframes for the Home page have been created not to show the layout of the page upon load, but to show how and where each element will be displayed throughout gameplay.**

Wireframes First Drafts:

* [Home](assets/images/readme-images/wireframe-draft-home.jpg)
* [Contact](assets/images/readme-images/wireframe-draft-contact.jpg)

Upon searching for and finding images for the website, it became clear that trying to fit one image across the majority of the viewport didn't make for the best UX. Not only was the image not always centered on the bear at different screen sizes, but depending on the image position the question and response content contrast was occasionally not sufficient. To rectify this, the layout was adapted to sandwich the question and response content between two images to provide a more impactful and clear message that better suits the image ratios. 

There were several additions to the Home page wireframes related to additional features added throughout the website's development. A "How to play" button was implemented within the Header of the Home page. The reason for this placement was so that it was one of the first items a user comes across and also so that it is easily accessible throughout gameplay. Another item not in the initial feature plan is the Friendship Score display which in the final Home wireframe is visible during the game next to Lives Remaining. 

Another change resulting from an increased scope was the 404 error page. This was added to improve UX on the chance that the user would navigate to a non existent page. As the website currently has only two main pages, this is unlikely to happen. However, this addition does provide some future proofing should the website be developed further at a later date.

The social media icons contained within the footer of each page were centered rather than being displayed on the right hand side. This decision was influenced by the business goals of the website to encourage sharing of the game through the website link and social media links.

Wireframes Final Versions:

* [Home](assets/images/readme-images/wireframe-final-home.jpg)
* [Contact](assets/images/readme-images/wireframe-final-contact.jpg)
* [404](assets/images/readme-images/wireframe-final-404.jpg)

#### Implemented Features

Both pages feature a typical header that users will be familiar with; a responsive navigation bar which includes the game title in the centre of the header and links to the website’s other page in the top right. They all also feature a footer with page sharing details as well as social media icons which link to the game's facebook and twitter pages. The icon for sharing within the footer triggers a modal to appear which displays the url of the website and provides a button to *copy to clipboard* to better faciliate the sharing of the website. Once copied, an *alert* appears notifying the user of this action.

Throughout the website, links and buttons provide *feedback* to the user when clicked or hovered over in the form of font or border changes to make the user intuitively infer what their actions on the website will result in.
 
##### Home:
 
The header of the Home page only contains an instructional, *interactive modal*. This is included in the header so that it is easily located throughout any stage of the game and can be referred back to at any time on this page.

The main focal point of the page includes *photographs* relevant to the game content surrounding a compelling introduction which entices users into the game. Nestling the introduction between the images this way helps to draw the user's eye quickly to the most important part of the page. On smaller screen sizes, only one image is displayed as this gives a cleaner view of the introduction and therefore better conveys the purpose of the website, and also reduces the mobile users’ data consumption.

The last feature visible upon page load is the *Start Game button* which, when clicked, changes the layout of the lower half of the page to include more *interactive buttons*. It also changes the text content of what was the introduction to the first in a serious of questions for the game. The recycling of this area makes the most of the space and takes advantage of the user's eye naturally being drawn to that area.

Now, as well as the interactive buttons we have some *icons* displayed at the bottom left of the screen for Lives Remaining and Friendship Score. Throughout gameplay, the numbers displayed within these icons will change depending upon whether the user gets each question right or wrong. For an incorrect answer, the Lives Remaining and Friendship Score decrease by one and the number displayed withing the icons will flash red. At the same time, the word "Wrong" will flash across the screen in red to reinforce the consequence of the user's action. Conversely, for a correct answer, the Friendship Score will increase by one and the number will flash blue, as well as having the word "Correct" flash across the screen in blue for maximum feedback to the user on each question without interfering with gameplay.

When the game ends, either through the user running out of lives or reaching the end of the question bank, a modal appears revealing the score of the user. Along with the score, there is some text that, depending on the score, either congratulates the user for achieving the maximum score possible or encourages them to try again. 
 
##### Contact:
 
The Contact page contains a *contact form* that a user can fill in for multiple reasons. The form contains fields for first and last name, email, a dropdown for the reason for contact and details for anything that may be relevant.

At the end of the form there is an *Enquire Now* button which triggers a *modal* to appear when clicked. The content on the modal depends on the data within the form. As well as the usual html validation checks, custom javascript loops through each form field to check for errors. If errors are detected, this is fed back to the user via the modal and the form is not submitted. If the fields pass *validation*, the user is thanked for their submission and the form is submitted.
 
#### Sprint 1 Features
 
- 

#### Sprint 2 Features (Future)

- 
 
### **Surface**

#### Colour Scheme

The website has a dark green colour scheme with brown accents to reinforce the game's forest setting.

#### Typography



## Technologies Used

#### Languages
- 

#### Libraries and Frameworks
- 

#### Tools
- 

#### Other Resources
- [Balsamiq](https://balsamiq.com/wireframes/) - This project used **Balsamiq** to create the draft wireframes.

## Testing 
 


## Challenges and Reflections



## Deployment
 
 ### Deploying the Project


 
### How to run this project locally
 

 
## Credits
 
### Media


 
### Code
 

 
### Acknowledgements
 
- 
 
### Disclaimer
 
The content of this website is for educational purposes only.
