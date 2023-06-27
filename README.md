# Password-Testing-App

This application allows you to test the strength of a password in real time. It features a password input field and three sections that indicate the strength of the password. The password strength is determined based on the following criteria:

- Easy: The password consists of only letters, digits, or symbols.
- Medium: The password is a combination of letters and symbols, letters and digits, or digits and symbols.
- Strong: The password contains letters, symbols, and numbers.

The color of the sections changes according to the strength of the password:

- If the password field is empty, all sections are displayed in gray.
- If the password has less than 8 characters, all sections are displayed in red.
- If the password is easy, the first section is displayed in red, and the rest are gray.
- If the password is medium, the first two sections are displayed in yellow, and the last one is gray.
- If the password is strong, all sections are displayed in green.

## Technologies Used
This application is built using the following technologies:

- HTML
- CSS
- TypeScript
- Angular (version 16.1.0)

## Development Setup

### Prerequisites

- Install [Node.js] which includes [Node Package Manager][npm]

### Setting Up a Project

Install the Angular CLI globally:

```
npm install -g @angular/cli
```

Create workspace:

```
ng new [PROJECT NAME]
```

Run the application:

```
cd [PROJECT NAME]
ng serve
```
