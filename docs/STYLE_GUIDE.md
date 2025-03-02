kerocyte
kerocyte
Invisible
ShopSmart

Hyfum — 2/25/25, 9:35 PM
Yea pls
I’m Just Here — 2/25/25, 9:35 PM
Image
non of the functions work here just just a basic boring outline
Hyfum — 2/25/25, 9:36 PM
Yea this is okay we also need like  a shopping list section
I’m Just Here — 2/25/25, 9:37 PM
ok I can add that as well in this template
I’m Just Here — 2/25/25, 10:42 PM
I also completed the task: Create a basic React frontend with routing and placeholder screens


here is some pictures of the site so far
Image
Image
Image
Image
Image
Hyfum — 2/25/25, 10:42 PM
Ok hold up
Don’t make commits to the GitHub
I’m Just Here — 2/25/25, 10:43 PM
i didnt do anything to github yet
Hyfum — 2/25/25, 10:43 PM
I’m gonna have to set up the thing for the styling guide
Cuz we have to name the branches a certain way and stuff
I’m Just Here — 2/25/25, 10:43 PM
ok let me know when that is done until then I have a basic start
Hyfum — 2/25/25, 10:45 PM
Ok
I’m Just Here — 2/27/25, 8:06 PM
When do I push stuff
Hyfum — 2/27/25, 8:06 PM
sry i have just been doing a ton of leetcoding
kerocyte — 2/27/25, 8:06 PM
You can push to your own branch
Hyfum — 2/27/25, 8:06 PM
ill do the style stuff tomorrow
juts wait
kerocyte — 2/27/25, 8:06 PM
Just not dev
Oh nvm
Hyfum — 2/27/25, 8:07 PM
i gotta put something for how to name brancehs
kerocyte — 2/27/25, 8:07 PM
Wanna just reuse style guide from 490
Hyfum — 2/27/25, 8:07 PM
just wait until tomorrow ill do it in the morning
yea but not exact
unless if u can do it saffy
but i would do it tomorrow morning
just change it a bit
kerocyte — 2/27/25, 8:07 PM
Ok I’ll change a bit
Hyfum — 2/27/25, 8:07 PM
ok
kerocyte — 2/28/25, 12:49 AM
can someone send the repo link
am i blind
I’m Just Here — 2/28/25, 12:55 AM
https://github.com/haitham-awad/ShopSmart
GitHub
GitHub - haitham-awad/ShopSmart
Contribute to haitham-awad/ShopSmart development by creating an account on GitHub.
GitHub - haitham-awad/ShopSmart
kerocyte — 2/28/25, 1:03 AM
it says i dont have push access
ill paste it here for now
# Style Guide

*All implemented tasks must have comments on top of file/group of code describing what has been implemented, input, and output (including types if applicable)*

## General Requirements
 - Every implemented task will include comments at the top of the file explaining:
Expand
README.md
3 KB
.MD file
just download it
rename it to STYLING_GUIDE.MD
and make a folder called docs in the root
and put it inside
@Hyfum
it is basically same styling guide as the resume project we did
i just reworded the examples and changed the bullets
but the format is same
like pascal for frontend
snake for backend
test naming etc
Hyfum — 2/28/25, 6:13 AM
Oh mb I’ll give u access soon
Hyfum — Yesterday at 7:49 AM
safwan u gotta accept the github invitation
and i think youll be able to push
﻿
# Style Guide

*All implemented tasks must have comments on top of file/group of code describing what has been implemented, input, and output (including types if applicable)*

## General Requirements
 - Every implemented task will include comments at the top of the file explaining:
   - **What has been implemented**
   - **Input and output types (if applicable)**

## Front-End Requirements
  
**File Structure**
- Each file should contain one component.
- Use JSX syntax.

**Code Style**
- File names should be Pascal Case **LoginForm.jsx`**.
- Use .jsx for file extensions.
- Use Pascal Case for component naming **`LoginForm`**
- Camel case for variables/consts **`loginVar`**
- Have alt for all img tags **`<img src="picture.jpg" alt="This is a picture"/>`**
- Use arrow functions for loops and mapping.

**Testing Standards**
- Test files should use the same name as the component with a `.test.jsx` suffix.
  - Example: For `Login.jsx`, name the test file `Login.test.jsx`.

**Testing Structure**
- Use clear and descriptive test cases with `it` or `test` statements.
  - Example:
    ```javascript
    it('renders the Button component', () => {
      // test implementation 
    });
    ```
- Use `describe` blocks to group related tasks.
  - Example when testing a **`Button Component`**:
    ```javascript
    describe('Button component', () => {
      it('renders correctly', () => {
        // render tests 
      });

      it('handles click events', () => {
        // click event tests
      });
    });
    ```

## Back-End Requirements

**File Naming and Code Style**
- Use snake case for functions like **`login_var`**.
- Snake case for variables.
- Snake case for file names.
- File names should be short and relevant.
- Run **`black backend`** and **`black tests`** within root folder for general formatting before pull request.

**Testing Standards**
- Test files should be inside **`backend`** folder and should be prefaced with **`test_[folder]_[filename].py`**.
   - Example testing routers/user.py should have following test file **`test_routers_user.py`**.
- Sample files used in tests should be put in **`test_files`** folder.

  
README.md
3 KB
