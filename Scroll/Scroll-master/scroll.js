const projects = [
            {
                title: 'Project 1',
                image: '../Scroll-master/logo.svg',
                description: 'A brief description of project 1 and its key features.'
            },
            {
                title: 'Project 2',
                image: '../Scroll-master/logo.svg',
                description: 'A brief description of project 2 and its key features.'
            },
            {
                title: 'Project 3',
                image: '../Scroll-master/logo.svg',
                description: 'A brief description of project 3 and its key features.'
            },
            {
                title: 'Project 4',
                image: '../Scroll-master/logo.svg',
                description: 'A brief description of project 4 and its key features.'
            }
        ];

        const skills = ['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'];

        // Populate projects
        const projectsGrid = document.querySelector('.projects-grid');
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectsGrid.appendChild(projectCard);
        });

        // Populate skills
        const skillsGrid = document.querySelector('.skills-grid');
        skills.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.textContent = skill;
            skillsGrid.appendChild(skillCard);
        });

        // Handle form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            console.log('Form submitted:', formData);
            // Add your form submission logic here
            contactForm.reset();
            alert('Message sent successfully!');
        });