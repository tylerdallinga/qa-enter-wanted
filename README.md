<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Enter Wanted Test

This project is to create a web form that will generate the text to submit to the NCIC to add a warrant.

It is assumed that if incorrect entry occurs, the proper error message will be displayed to assist the user in correcting their mistakes.

Development on the application has been focused only on completing the form and validations, stylistic concerns are not being addressed at this time.

### The requirements are as follows for each field, and the results:

alpha: any alphabetical characters, upper or lower case

numeric: numbers only, 0-9

special: these are any characters other than numbers and letters, including blank spaces ' '

* Header: Required, 9-19 characters in length, any allowed
* MKE: Required, 2-4 alpha/special characters in length
* Originating Agency Identifier: Required, 9 alphanumeric characters in length
* Name: Required, 3-30 characters in length, any allowed
* Sex: Required, 1 character in length, alphabet only, F (female) M (male) and U (unknown) are the only accepted entries
* Race: Required, 1 character in length, alphabet only
* Height: Required, 3 characters in length, numeric only in FII format, where F is feet and I is inches
* Weight: Required, 3 characters in length, numeric only in lbs, use leading zero if necessary
* Hair: Required, 3-10 characters in length, alpha only
* Offense: Required, 5-15 characters in length, any allowed
* Date of Warrant/Violation: Required, 8 characters in length, numeric in MMDDYYYY format (allows dates from 1900 to today +1 day, to account for time zone differences)
* Drivers License: Optional, 1-20 characters in length, any characters allowed, if included requires DL State & DL Expiration Year
* DL State: Optional, 2 characters in length, State Abbreviations only, if included requires Drivers License & DL Expiration Year
* DL Expiration Year: Optional, 4 characters in length, numeric in YYYY format, if included requires Drivers License & DL State
* License Plate: Optional, 5-8 alphanumeric characters in length, if included requires License State & License Year
* License State: Optional, 2 characters in length, State Abbreviations only, if included requires License Plate and License Year
* License Year: Optional, 4 characters in length, numeric in YYYY format, if included requires License Plate and License Year

Upon successful entry, a text blob will be created, which consists of each of the values entered, separated by a '.' - any optional fields left blank will still be denoted in the blob by an additional '.'

## Project Instructions
This morning's stretch activity is a de-bugging treasure hunt!

#### Target #1
A bug has been introduced to the project that is described in the console.  Can you find it?  Gather the information you would need to report the bug (steps to reproduce, data used, etc).

#### Target #2
Fix the bug!

#### Target #3
Amazon's "Meowing Duck" has been replicated in the source.  Can you figure out where?

#### Target #4
A hidden message has been placed in various attributes of the elements in the code...  Use the inspector in Google's Dev Tools to look at each of the following to figure it out.
Part 1: The submit button's value
Part 2: The title "Enter Wanted"'s class
Part 3: The "Valid" message's alt value
Part 4: The version's parent tag type
Part 5: A comment at the bottom of the page's source

#### Target #5
The value of the "this.state" property "assembledQuery" in QueryEditor.js after clearing the form.

#### Target #6
A proposal for a validation fix for the height field, limiting it to feet/inches, with the first character for feet and the following two for inches...
1: What should the limits for both feet and inches be?
2: What file(s) would you need to make changes in?
3: Can you hypothesize what changes those should be?
    * In plain English
    * In code

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>