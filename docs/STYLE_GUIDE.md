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
