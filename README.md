
<p align="center"><img width="20%" height="20%" alt="image" src="https://user-images.githubusercontent.com/72120258/170996396-1437e6c5-f0a7-434d-aebc-9102646e9e48.png"/></p>

# DB Runner

### App's Overview
<p>It is a simple prototype of a web application capable of running SQL queries and rendering the rows of any given dataset. The web app will provide the option to upload the CSV file of our choice and will convert it to a valid DB, which can be further re-rendered using SQL commands. The table is displayed in a datagrid with proper pagination and option to select single or multiple rows. The code editor prototype is built using good code practices.  </p>

<table>
  <tr>
    <td valign="top"><img  width="100%" alt="image" src="https://user-images.githubusercontent.com/72120258/170972423-e095cd7d-78d4-433d-8c4e-0d8467c0a4e5.png"/></td>
    <td valign="top"><img  width="100%" alt="image" src="https://user-images.githubusercontent.com/72120258/170972537-a56d294b-fc37-4b72-93c4-9ac9a91eeb18.png"/></td>
  </tr>
  <tr>
    <td valign="top"><img width="100%" alt="image" src="https://user-images.githubusercontent.com/72120258/170976213-a64a285d-ee8b-4650-bf4c-39997c0165d6.png"/></td>
    <td valign="top"><img align="right" width="100%" alt="image" src="https://user-images.githubusercontent.com/72120258/170972612-b9136d50-b0fc-439e-b33d-9722da6c0add.png"/></td>
  </tr>
</table>

### React 
<p>React JS is used to build and implement the functionality of this web app. </p>

> Packages/ libraries
     <p>Used Material UI for UI creation at some parts like TextInputs, Buttons and Datagrid :</p>
     `npm install @mui/material @emotion/react @emotion/styled` 
     
### Performance

* *The overall performance score of the website is shown below :* 
       <p><img width="927" alt="image" src="https://user-images.githubusercontent.com/72120258/170992711-5d25c5ca-ecdc-4614-8208-826269169bf4.png"></p>
       
* *The page loading time analysis report is shown below :*
       <p><img width="639" alt="image" src="https://user-images.githubusercontent.com/72120258/170993318-83b04389-f528-4967-8772-4d6d25080b4a.png"></p>
       
> * I have measured the overall performance of the web app using `Lighthouse` tool powered by google. It exposes the web app through various different test cases and good practices and finally generates a score.
> * For measuring the loading time of the web app I have used the performance tool provided in the `inspect` window.
> * The loading time of the website lies somewhere between `9ms - 15ms`. 
> * Removed unused javascript to do some optimization in the load time.


