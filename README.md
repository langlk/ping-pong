# Ping-Pong

#### _Epicodus Project in JavaScript, HTML, and CSS, August 19, 2017_

#### By Kelsey Langlois

## Description

_Website that takes a positive integer and prints all integers from 1 to that integer, replacing multiples of 3 with the word Ping, multiples of 5 with the word Pong, and multiples of 15 with the word Ping-Pong._

## Setup/Installation Requirements

_You can view this project on GitHub pages at [langlk.github.io/ping-pong](https://langlk.github.io/ping-pong/). To install on your own computer, follow the steps below:_

* Clone this repository
* Open index.html in web browser of your choice

## Specifications

* Program will return an error if input is empty.
  * Example Input: ""
  * Example Output: "Error: Invalid Input"
* Program will return an error if input is not an integer.
  * Example Input: 3.14
  * Example Output: "Error: Invalid Input"
* Program will return an error if number is less than 1.
  * Example Input: 0
  * Example Output: "Error: Invalid Input"
* Ping-Pong method will return a number unchanged if the number is not divisible by 3 or 5.
  * Example Input: 1
  * Example Output: 1
* Ping-Pong method will return "Ping" if an input number is divisible by 3.
  * Example Input: 6
  * Example Output: Ping
* Ping-Pong method will return "Pong" if an input number is divisible by 5.
  * Example Input: 20
  * Example Output: Pong
* Ping-Pong method will return "Ping-Pong" if an input number is divisible by 15.
  * Example input: 30
  * Example Output: Ping-Pong
* Program will create a list containing only the number 1 if the input is 1.
  * Example Input: 1
  * Example Output: 1
* Program will create a list from one to n for any input number n.
  * Example Input: 2
  * Example Output: 1, 2
* Program will replace numbers in the list with the values returned from Ping-Pong method.
  * Example Input: 15
  * Example Output: 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, Ping-Pong

## Support and contact details

_Please contact Kelsey Langlois at [kels.langlois@gmail.com](mailto:kels.langlois@gmail.com) with questions, comments, or issues._

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript

### License

Copyright (c) 2017 **Kelsey Langlois**

*This software is licensed under the MIT license.*
