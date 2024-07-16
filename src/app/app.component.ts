import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pure JavaScript Accordion</title>
<style>
  .accordion {
    background-color: #f9f9f9;
    color: #333;
    cursor: pointer;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-bottom: none;
    outline: none;
    transition: background-color 0.3s ease;
  }
  .panel {
    padding: 0 20px;
    display: none;
    background-color: white;
    border: 1px solid #ccc;
    border-top: none;
  }
</style>
</head>
<body>

<div id="accordionContainer"></div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    // Data for the accordion sections
    const accordionData = [
        { title: "Section 1", content: "Content of section 1..." },
        { title: "Section 2", content: "Content of section 2..." },
        { title: "Section 3", content: "Content of section 3..." }
    ];

    // Container to hold the accordion
    const accordionContainer = document.getElementById("accordionContainer");

    // Create accordion sections dynamically
    accordionData.forEach((section, index) => {
        // Create accordion header
        const accordionHeader = document.createElement("div");
        accordionHeader.classList.add("accordion");
        accordionHeader.textContent = section.title;

        // Create accordion panel
        const accordionPanel = document.createElement("div");
        accordionPanel.classList.add("panel");
        accordionPanel.innerHTML = `<p>${section.content}</p>`;

        // Append header and panel to accordion container
        accordionContainer.appendChild(accordionHeader);
        accordionContainer.appendChild(accordionPanel);

        // Add click event listener to toggle accordion
        accordionHeader.addEventListener("click", function() {
            // Toggle active class to highlight clicked accordion
            this.classList.toggle("active");

            // Toggle panel visibility
            if (accordionPanel.style.display === "block") {
                accordionPanel.style.display = "none";
            } else {
                accordionPanel.style.display = "block";
            }
        });
    });
});
</script>

</body>
</html>

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
