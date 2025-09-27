document.addEventListener("DOMContentLoaded", () => {
    loadContent("id"); // Default language
    setupDropdown();
});

function setupDropdown() {
    const dropdown = document.querySelector(".language-dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        dropdownMenu.classList.toggle("show");
    });

    document.addEventListener("click", (event) => {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });

    document.querySelectorAll(".dropdown-menu li").forEach(item => {
        item.addEventListener("click", (event) => {
            event.stopPropagation();
            const lang = event.currentTarget.getAttribute("data-lang");
            setLanguage(lang);
            dropdownMenu.classList.remove("show");
        });
    });
}

function loadContent(lang) {
    fetchLanguageFile(lang)
        .then(data => {
            updateTextContent(data);
            updateServices(data.SERVICES);
            // updateCounters(data.COUNTERS);
            // updatePortfolio(data.PORTFOLIO);
            updateCommunicateSection(data.COMMUNICATE);
            updateFAQ(data.FAQ)
        })
        .catch(error => console.error("Error loading content:", error));
    updateSelectedLanguage(lang);
}

function fetchLanguageFile(lang) {
    const file = lang === "id" ? "lang/id.json" : "lang/en.json";
    return fetch(file).then(response => response.json());
}

function updateTextContent(data) {
    document.getElementById("heading").innerText = data.HEADING;
    document.getElementById("subheading").innerText = data.SUBHEADING;
    document.getElementById("about-heading").innerText = data.ABOUT.HEADING;
    document.getElementById("about-title").innerText = data.ABOUT.TITLE;
    document.getElementById("about-description").innerHTML = data.ABOUT.DESCRIPTION;
    document.getElementById("service-heading").innerText = data.SERVICES.HEADING;
    document.getElementById("service-description").innerText = data.SERVICES.DESCRIPTION;
}

function updateServices(services) {
    const serviceList = document.getElementById("service-list");
    serviceList.innerHTML = "";
    
    services.SERVICES.forEach(service => {
        const serviceItem = document.createElement("div");
        serviceItem.classList.add("col-lg-5", "col-sm-6");
        serviceItem.innerHTML = `
            <div class="item">
                <span class="icon ${service.CLASS}"><i class="${service.ICON}"></i></span>
                <h6>${service.TITLE}</h6>
                <ul style="font-size: 15px; text-align: left; padding-left: 20px;">
                    ${service.DETAILS.map(detail => `<li>${detail}</li>`).join("")}
                </ul>
            </div>
        `;
        serviceList.appendChild(serviceItem);
    });
}

function updateCounters(counters) {
    const countersContainer = document.querySelector(".counters .container");
    countersContainer.innerHTML = "";
    
    counters.forEach(counter => {
        const counterDiv = document.createElement("div");
        counterDiv.innerHTML = `
            <i class="${counter.ICON} fa-4x"></i>
            <div class="counter" data-target="${counter.TARGET}">0</div>
            <h3>${counter.TEXT}</h3>
        `;
        countersContainer.appendChild(counterDiv);
    });
    startCounters();
}

function updatePortfolio(portfolio) {
    const portfolioContainer = document.querySelector(".row-portofolio");
    portfolioContainer.innerHTML = "";
    
    const sectionHeader = document.createElement("div");
    sectionHeader.classList.add("section-head-1", "col-sm-12");
    sectionHeader.style.textAlign = "center";

    const headerTitle = document.createElement("h4");
    headerTitle.style.marginTop = "-5rem";
    headerTitle.id = "portfolio";
    headerTitle.innerHTML = portfolio.TITLE;
    
    const headerDescription = document.createElement("p");
    headerDescription.innerHTML = portfolio.DESCRIPTION;
    
    sectionHeader.appendChild(headerTitle);
    sectionHeader.appendChild(headerDescription);
    portfolioContainer.appendChild(sectionHeader);
    
    portfolio.PROJECTS.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("col-lg-4", "col-sm-6");
        projectDiv.innerHTML = `
            <div class="item">
                <span class="icon ${project.CLASS}">
                    <i class="${project.ICON}"></i>
                </span>
                <h6>${project.TITLE}</h6>
                <p>${project.DESCRIPTION}<br><br><br></p>
            </div>
        `;
        portfolioContainer.appendChild(projectDiv);
    });
}

function updateSelectedLanguage(lang) {
    const selectedLang = document.getElementById("selected-language");
    selectedLang.innerHTML = lang === "id" 
        ? `<img src="./images/id.svg" alt="Indonesia Flag" class="flag-icon"> Bahasa ▼`
        : `<img src="./images/uk.svg" alt="UK Flag" class="flag-icon"> English ▼`;
}

function setLanguage(lang) {
    loadContent(lang);
}

function startCounters() {
    document.querySelectorAll(".counter").forEach(counter => {
        counter.innerText = "0";
        const target = +counter.getAttribute("data-target");
        const increment = target / 100;

        const updateCounter = () => {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

function updateCommunicateSection(data) {
    const communicateSection = document.getElementById("communicate-section");
    communicateSection.innerHTML = `
        <h3>${data.TITLE}</h3>
        <p>${data.DESCRIPTION}</p>
        <a href="#contact" title="Hubungi Kami" aria-label="Hubungi Kami"><button class="btn">${data.BUTTON}</button></a>
    `;
}

function loadFAQ(lang) {
    fetch(`${lang}.json`)
        .then(response => response.json())
        .then(data => updateFAQ(data.FAQ))
        .catch(error => console.error("Error loading FAQ:", error));
}


let activeAccordion = null

function toggleAccordion(element) {
    const body = element.nextElementSibling;
    if (activeAccordion && activeAccordion !== body) {
        activeAccordion.style.display = "none";
    }
    body.style.display = (body.style.display === "block") ? "none" : "block";
    activeAccordion = (body.style.display === "block") ? body : null;
}

function updateFAQ(faqData) {
    document.getElementById("faq").innerText = faqData.TITLE;
    const faqContainer = document.querySelector(".accordion-container");
    faqContainer.innerHTML = "";

    faqData.QUESTIONS.forEach(item => {
        const faqItem = document.createElement("div");
        faqItem.classList.add("accordion");

        const header = document.createElement("div");
        header.classList.add("accordion-header");
        header.innerHTML = `<span>+</span><h3>${item.QUESTION}</h3>`;
        header.addEventListener("click", function () {
            toggleAccordion(this);
        });

        const body = document.createElement("div");
        body.classList.add("accordion-body");
        body.style.display = "none"; // Ensure it's hidden initially
        body.innerHTML = `<p>${item.ANSWER}</p>`;

        faqItem.appendChild(header);
        faqItem.appendChild(body);
        faqContainer.appendChild(faqItem);
    });
}
