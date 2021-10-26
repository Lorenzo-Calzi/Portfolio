/* ACTIVE sections */
var sections = document.getElementsByTagName("section");
for (var i = 0; i < sections.length; i++) {
    sections[i].addEventListener("mouseover", function() {
        var current = document.getElementsByClassName("hover");
        current[0].className = current[0].className.replace("hover", "");
        if(!this.classList.contains("hover")) {
            this.className += "hover";
        }
        
        var header = document.getElementById("header_site");
        var nav_header = document.getElementById('home');

        var about_me = document.getElementById("about_me");
        var nav_about = document.getElementById('about');
        
        var projects = document.getElementById("projects");
        var nav_project = document.getElementById('project');

        var footer = document.getElementById("footer_site");
        var nav_footer = document.getElementById('contact');
        

        /* Nav Header */
        if(header.className == "hover" && !nav_header.classList.contains("active")) { 
            nav_about.classList.remove("active");
            nav_project.classList.remove("active");
            nav_footer.classList.remove("active");

            nav_header.className += " active";
        }
        
        /* Nav About */
        if(about_me.className == "hover" && !nav_about.classList.contains("active")) {
            nav_header.classList.remove("active");
            nav_project.classList.remove("active");
            nav_footer.classList.remove("active");

            nav_about.className += " active";
        }

        /* Nav Project */
        if(projects.className == "hover" && !nav_project.classList.contains("active")) {
            nav_header.classList.remove("active");
            nav_about.classList.remove("active");
            nav_footer.classList.remove("active");

            nav_project.className += " active";
        }

        /* Nav Footer */
        if(footer.className == "hover" && !nav_footer.classList.contains("active")) {
            nav_header.classList.remove("active");
            nav_about.classList.remove("active");
            nav_project.classList.remove("active");

            nav_footer.className += " active";
        }
    });
}


/* ACTIVE links */
var header = document.getElementById("links");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


/* TOGGLE function */
function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}