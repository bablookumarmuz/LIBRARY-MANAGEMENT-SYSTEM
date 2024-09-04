<?php
session_start();
if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !==true)
{
 header("location: index.php");
}
?>
<!DOCTYPE html>
<html>
<head>
 <title>Book Details</title>
 <link rel="stylesheet" type="text/css" href="style.css"> 
</head>
<body>
 <header>
 <h1>Book Details</h1>

 </header>
 <main>
 <section id="bookDetails">
 <h2 id="bookTitle"></h2>
 <p id="bookAuthor"></p>
 <p id="bookDescription"></p>
 <p id="bookPrice"></p>
 <p id="bookAvailability"></p>
 <a id="amazonLink" href="" target="_blank">Buy on Amazon</a>
 </section>
 </main>
 <script src="script.php"></script>
</body>
</html>
<script>
 
// slide show of the book page code starting from here
let slideIndex = 0;
const slides = document.querySelectorAll('#slideshow li');
function showSlide(index) {
 for (let i = 0; i < slides.length; i++) {
 slides[i].classList.remove('active');
 }
 slides[index].classList.add('active');
}
function changeSlide(n) {
 slideIndex += n;
 if (slideIndex < 0) {
 slideIndex = slides.length - 1;
 } else if (slideIndex >= slides.length) {
 slideIndex = 0;
 }
 showSlide(slideIndex);
}
setInterval(() => {
 changeSlide(1);
}, 5000);
// Search for the Books codes starting from here

document.addEventListener('DOMContentLoaded', function() {
 // Get the search form element and search input
 var searchForm = document.getElementById('search-form');
 var searchInput = document.getElementById('search-input');
 
 // Add event listener to the search form
 searchForm.addEventListener('submit', function(event) {
 event.preventDefault(); // Prevent form submission
 
 // Get the search query
 var searchQuery = searchInput.value.toLowerCase();
 
 // Filter the available books based on the search query
 var books = document.querySelectorAll('#books li');
 books.forEach(function(book) {
 var title = book.querySelector('h3').textContent.toLowerCase();
 var author = book.querySelector('p').textContent.toLowerCase();
 if (title.includes(searchQuery) || author.includes(searchQuery)) {
 book.style.display = 'block';
 } else {
 book.style.display = 'none';
 }
 });
 });
 });
//books details code 
//Function to get the book ID from the query parameter
function getBookIdFromURL() {
 const urlParams = new URLSearchParams(window.location.search);
 return urlParams.get('id');
}
// Function to fetch book details based on the book ID
function getBookDetails(bookId) {
 // Implement your logic here to retrieve book details based on the book ID
 // This can be from an API, a database, or a predefined data structure
 // Return the book details as an object
 if (bookId === '1') {
 return {
 title: 'The Doors Of Stone',
 author: 'Patrick Rothfuss',
 description: 'The Door Of Stone, By Patrick Rothfuss. the highly anticipated third and 
final book in Patrick Rothfusss The Kingkiller Chronicle series. It continues the story of 

Kvothe, a legendary musician and adventurer, as he seeks answers to the mysteries 
surrounding his past and battles powerful forces in a richly imagined world of magic and 
music. With intricate storytelling and vivid world-building, this epic fantasy concludes the 
captivating tale with revelations and a climactic showdown.',
 price: '₹499.12',
 isFree: false,
 amazonLink: 'https://www.amazon.com/your-product-link',
 };
 } else if (bookId === '2') {
 return {
 title: 'The Name Of The Wind',
 author: 'Patrick Rothfuss',
 description: '"The Name of the Wind" by Patrick Rothfuss s the first book in "The 
Kingkiller Chronicle" series by Patrick Rothfuss. It tells the story of Kvothe, a renowned 
musician, magician, and adventurer, as he recounts his extraordinary life and the events that 
led him to become a legend. Set in a world of magic and mystery, the book follows Kvothes 
journey through the University, encounters with mythical creatures, and his pursuit of 
knowledge and revenge. With its intricate storytelling, vivid world-building, and compelling 
characters, The Name of the Wind is a captivating fantasy novel that has garnered widespread 
acclaim..',
 price: '₹315.23',
 isFree: false,
 amazonLink:"https://www.amazon.in/Name-Wind-KingkillerChronicle/dp/0575081406/ref=sr_1_1?crid=23HFD8W8P3DJO&keywords=the+name+of+the
+wind&qid=1684919054&sprefix=the+name+of+the+%2Caps%2C653&sr=8-1"
 };
 } else if (bookId === '3') {
 return {
 title: 'The Wise Mans Fear',
 author: 'Patrick Rothfuss',
 description: 'The Wise Man Fear By Patrick Rothfuss is the second book in "The 
Kingkiller Chronicle" series by Patrick Rothfuss. It continues the story of Kvothe, a gifted 
musician, magician, and adventurer, as he narrates his journey through a world of magic, 
danger, and intrigue. In this epic fantasy novel, Kvothe faces new challenges, uncovers secrets 
of the arcane, and delves deeper into his own mysterious past. With rich world-building, 
intricate storytelling, and complex characters, "The Wise Mans Fear is a captivating 
continuation of the series that keeps readers eagerly turning the pages..',
 price: '₹419.05',
 isFree: false,
 amazonLink: "https://www.amazon.in/Wise-Mans-Fear-KingkillerChronicle/dp/0575081430/ref=sr_1_3?crid=1PFVPTPSPPJ6D&keywords=the+door+of+stone
+book+patrick+rothfuss&qid=1684832287&sprefix=the+door+of+stone+book+patrcik+rothfu
s%2Caps%2C1123&sr=8-3" 
 };

 } else if (bookId === '4') {
 return {
 title: "The Slow Regard Of Silent Things",
 author: 'Patrick Rothfuss',
 description: "The Slow Regard Of Silent Thing by Patrick Rothfuss. a novella written 
by Patrick Rothfuss. It is a companion story set in the same world as The Kingkiller Chronicle 
series. The book focuses on one of the side characters, Auri, and provides a deeper exploration 
of her solitary and mysterious life beneath the university. It is a quiet and introspective tale, 
beautifully written, offering insights into Auri's unique perspective and the hidden corners of 
the world Rothfuss has created..",
 price:'₹403.25',
 isFree: false,
 amazonLink: "https://www.amazon.in/Slow-Regard-Silent-ThingsKingkiller/dp/1473209331/ref=sr_1_5?crid=1PFVPTPSPPJ6D&keywords=the+door+of+ston
e+book+patrick+rothfuss&qid=1684832287&sprefix=the+door+of+stone+book+patrcik+rothf
us%2Caps%2C1123&sr=8-5",
 };
 } else if (bookId === '6') {
 return {
 title: 'TReader In Comedy',
 author: 'Magda Romanska',
 description: '"Reader in Comedy" by Magda Romanska is a comprehensive and 
thought-provoking exploration of the genre of comedy. Through a collection of diverse essays 
and critical analyses, Romanska delves into the theory, history, and cultural significance of 
comedic forms across various mediums. This book offers valuable insights into the mechanics 
of humor, its social and political implications, and the ways in which comedy reflects and 
challenges societal norms. Whether you are a scholar, performer, or comedy enthusiast, 
"Reader in Comedy" is an engaging and enlightening resource that celebrates the power of 
laughter..',
 price: '₹3,134',
 isFree: false
 };
 } else if (bookId === '7') {
 return {
 title: 'The COming Of The Celts',
 author: 'Caomihin De Barra',
 description: "The Coming of the Celts by Caomihin De Barra is a captivating historical 
exploration that traces the origins and migration of the Celtic peoples. De Barra delves into the 
rich tapestry of Celtic history, uncovering their ancient cultures, languages, and the enduring 
impact they had on the lands they inhabited. Through meticulous research and engaging 
storytelling, this book sheds light on the fascinating journey of the Celts, providing a deeper 
understanding of their traditions, folklore, and their profound influence on the shaping of 
Europe.",
 price: '₹854.00',
 isFree: false
 };
 }
