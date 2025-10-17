## Learning Objectives

- Client side routing with React
- Input event handling
- Validation
## Project setup

1. Navigate to the directory where you want to create your project.
2. Run `npm create vite@latest`
3. Select: *__React__*
4. Select: *__JavaScript__*
5. Follow terminal instructions
6. Run `npm run dev` to ensure the project dev server starts correctly.
7. Delete everything in:
	1. `src/App.css`
	2. `src/App.jsx`
	3. `src/index.css`
8. Create a `components` directory within `src`

## Steps

1. Create a `Form` component within `components`
2. Create the basic form markup incl. conditionally rendered error message. 
3. Add state for the email input and error message.
4. Add `handleSubmit` function to the form to log `submitted!` to the console
5. Add `handleChange` function to update the email state, and add the value and onChange to the input: 
	`<input type="email" id="email" value={email} onChange={handleChange} />`
6. Create a function to verify that the email is correct
7. Update the `handleSubmit` function to use `verifyEmail`. An invalid email should display the error message, and a valid email should show the email in a window alert.