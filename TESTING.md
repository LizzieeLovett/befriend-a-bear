# Befriend A Bear Website - Testing Information

[Main README.md file](/README.md)

[View website in GitHub Pages](https://lizzieelovett.github.io/befriend-a-bear/)

## Testing

### Validation

- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
- [W3C Markup Validation Service]( https://validator.w3.org/)
- [JSHint](https://jshint.com/)
- The developer used **W3C CSS Validation Service**, **W3C  Markup Validation Service** and the **JSHint** validator to check the validity of the website code.

### Client stories testing:

The typical path through this website would be: 
- Home 
- As the website's main purpose is the game, the end goal is not for the users to make contact so there are no call to action buttons to encourage this. The Contact page need only be used for issues or suggestions.

### Testing client stories from UX section of README.md

1. As a new visitor to the website, I want to easily navigate around the site so that I can find what I’m looking for as quickly as possible.
    1. The navigation bar has the same design, and can be easily found at the top of each page of the website.
    2. The game title has the same design and can also be easily found, as well as linking to the Home page to reorient any users who want to return to the typical starting point.
    3. The page names used are fairly typical across most websites so users should be able to immediately infer the content each page should contain.

2. As a new visitor to the website, I want to be able to find the rules of the game so that I can understand how to play.
    1. The Home page contains a How to Play button with a modal explaining the rules.

3. As a new visitor to the website, I want to be able to play the game soon after visiting the site to have fun.
    1. The game can be started with one click on the Home page Start Game button.
    2. The How to Play button does not need to be reviewed before the game commences as it can still be opened during the game which will prevent any delay to the user.

4. As a new visitor to the website, I want to understand how to fill out the form on the Contact page so that I can ask any questions I may have or provide suggestions.
    1. The form on the Lessons page is broken down into common items (First Name, Last Name, Email, etc.) which a typical user should have no problem with, and the less common item, Reason for Contact, is a drop down item to make the experience much easier for the user.

5. As an interested user, I want to be able to share the game with my friends so that they can play too.
    1. The Share button in the footer allows the website's URL to be copied to the clipboard to facilitate game sharing.
    2. The social media icons in the footer lead to the website's social pages which can also be easily shared.

6. As an interested user, I want to navigate to social media pages so that I can learn of any other games available or in development.
    1. The social media icons in the footer lead to the website's social pages where any updates or new games will be detailed.

7. As a returning visitor to the website, I want to easily navigate to the contact page so that I can give suggestions of game developments.
    1. The navigation bar at the top of the page provides quick and easy access to the Contact page.

8. As an animal lover, I want to be able to play a game related to animals so that I can learn more about them.
    1. Whilst the game is not entirely factual, the game is based on bears and their behaviour and some of the questions and answers are based on reality which also adds to their humour.

### Manual (logical) testing of all elements and functionality on every page.

#### Home Page:

1. Navigation bar:
    1. Go to the Home page from a desktop.
    2. Change the screen size from desktop to tablet to verify that the navigation bar is responsive to the screen width.
    3. Change screen size to mobile and verify that the burger icon appears. 
    4. Click the burger icon to verify that the menu drops down.
    5. Click on the game title in the navigation bar to verify that it links to the Home page. 
    6. Click on each navigation menu item to verify that it links to the correct page. 
    7. Hover over each navigation menu item to verify that the hover colour change works as expected. 
    8. Hover over the How to play button to verify that the hover colour and border change works as expected.
    9. Click the How to play button to verify the modal appears.
    10. Click the Close button within the modal to verify it closes.

2. Compelling introduction and images section:
    1. Reduce and expand the width of the window to verify that the images and text in this section respond correctly and look good on all device widths. _During testing and upon screen load, the images were taking a few seconds to load. The image sizes were reduced to improve the load time of the page._
    2. Change the screen size to mobile and verify that one image no longer appears.
    3. Verify that the border radius responds appropriately for the different image and text combinations.

3. Start Game button:
    1. Hover over the Start Game button to verify that the hover colour and border change works as expected. _During testing the button did not have enough height for the hover status change and was spilling out so the height was adjusted to fix._
    2. Click the button to verify the game starts.

4. Options boxes:
    1. Check all screen sizes and verify that the position of the options boxes is appropriate and the content is legible.
    2. Hover over each button to verify that the hover colour and border change works as expected.
    
5. Lives Remaining and Friendship Score icons:
    1. Check all screen sizes and verify that the position of the options boxes is appropriate and the content is legible.

6. Game Logic:
    1. Start the game.
    2. Select the wrong answer to the first question. Verify that a new question is then presented with new text in the options box, and that red feedback for a wrong answer is displayed across the screen and in the Lives Remaining and Friendship Score icons.
    3. Check that the Lives Remaining and Friendship Score values have each decreased by 1.
    4. Select the correct answer to the next question. Verify that a new question is then presented with new text in the options box, and that blue feedback for a correct answer is displayed across the screen and in the Friendship Score icon. _During testing the feedback placement was not optimised for all screen sizes so this was amended to improve UX._
    5. Check that the Friendship Score value *only* has increased by 1.
    6. Select wrong answers until you reach zero Lives Remaining.
    7. Select another wrong answer. Verify that the game ends and you are presented with the correct score for your choices.
    8. Check that the text in the main question and response section includes a response for the question that was incorrect as well as text for the end of the game.
    9. Click Try Again and verify that a new game starts with Lives Remaining reset to 3 and Friendship Score reset to 0.
    10. Select only correct answers throughout the game. Verify that the game ends and you are presented with the correct score for your choices. Verify that the text in the game end popup has changed to confirm the maximum score for the game has been reached.
    11. Click Try Again. Play the game with a mixture of correct and incorrect answers. Select the correct answer for the final question and verify that the modal appears as expected.
    12. Click Try Again. Play the game with a mixture of correct and incorrect answers. Select the incorrect answer for the final question and verify that the modal appears as expected.
  
7. Footer: 
    1. Hover over the share and social media icons to verify colour transitions and title details occur as expected.
    2. Click on the share icon to verify a modal appears.
    3. Check that the link works by accessing from another tab.
    4. Hover over the copy icon to verify that the title shows the word Copy.
    5. Click the copy icon to verify that an alert appears to notify of the copy and then check that the link has been correctly copied.
    6. Click the Close button to verify that this closes the modal.
    7. Click on the social media icons to verify they open a separate tab for the link.
    8. Reduce and expand the width of the window to verify that the footer is responsive and looks good on all device widths. 

8. Review all functionality and responsiveness on mobile phone and tablet.

#### Contact Page:

1. Navigation bar: 
    1. Navigation bar code is identical on all html pages bar the How to play button. Verification already completed.

2. Contact form: 
    1. Try to submit the empty form to verify that a modal appears requesting a review of the answers and to try again.
    2. Close the modal to verify that an error message about the first specific missing required field appears.
    3. Repeat this process filling in one field at a time to confirm that the specific missing required field feedback is provided.
    4. Try to submit the form with an invalid email address to verify that a relevant error message appears after the modal is closed.
    3. Try to submit the form with all inputs valid and verify that a success message appears and that the form is submitted and the page refreshes.
    4. Reduce and expand the width of the window to verify that the page behaves as expected.

3. Footer:
     1. Footer code is identical on all html pages. Verification already completed.

4. Review all functionality and responsiveness on mobile phone and tablet.

#### 404 Page:

1. 404 Message: 
    1. View the error message across all screen widths and verify that the placement is optimised. _During testing the first heading was not in the correct place so this was corrected by making the text centred._

2. 404 Image: 
    1. View the image across all screen widths and verify that placement is optimised.
    2. Click the image to verify that this returns you to the Home page.

## Further testing: 

1. Asked friends and family to look at the site on their devices and feedback any issues they find. 
2. I viewed my website on several devices and found no further issues.
