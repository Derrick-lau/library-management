
# CW2 Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. Please runs cw2 - server to make this client work
2. Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# `Fuctionalities`

## Sign In：

Sign in with demo account: `barcode: 123456`, `password: 123456`. If login is successful, you will be redirected to the home page.
After you signed in, a token will be stored on the session storage.

## Navigation bar:
If `Home` has been clicked, you will be redirected to the home page.
If `Sign out` has been clicked, the token will be cleared and you will be redirected to sign in page.

## Home page:
There is a menu with 4 directories (Book, User, Loan, Log)

## Book:
Search Book: Type user`title` and/or Book `authors` and Click Search. The server will then return a list of books that includes requested `title` and/or Book `authors`.

Add book: Type Book `title`, `authors`, `isbn` and submit.

Delete book: Type Book `BookID` to specify the book, `isbn` and submit.

BookId can be acquired on the search field.
if the close button is clicked on Add and Delete modal, you need to re-type in search field to search a book.

## User:

Search User: Type User`Username` and/or User`barcode` and Click Search. The server will then return a list of users that includes requested `Username` and/or User`barcode`.

Add User: Type User`Username`, `Barcode` and select a member type either `staff` or `student` and submit.

Update User: Type User `UserId` to specify the user,`Barcode`, and select a member type either `staff` or `student` and submit.

Delete User: Type User`UserId` to specify the user, `barcode` and submit.

UserId can be acquired on the search field.
if the close button is clicked on Add, Update and Delete modal, you need to re-type in search field to search a user.


## Loan:

Search the user currently borrowing a book :  Type `BookId` and click Search. The server will then return a User currently borrowing that book.

Search a user's loan : Type `UserId` and click Search. The server will then return a list of the User's loans.

Add Loan: Type `BookId`, `UserId` and select `dueDate`and submit.

Update Loan: Type `LoanId` to specify the Loan, select a new `dueDate`and submit.

Delete Loan: Type `LoanId` to specify the Loan and submit.

##LoanId can be acquired on the search field.
##if the close button is clicked on Add, Update and Delete modal, you need to re-type in search field to search a Loan.


## Log:

Search audit logs: Select a `date` and search. The server will then return a list of logs on the date you have selected.


