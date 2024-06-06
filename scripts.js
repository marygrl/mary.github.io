document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Infragistics Data Analytics',
            description: 'Collaborated with a team of 4 fellow "externs" to find the best market fit for Infragistics software application Slingshot. As a data engineer, I used Python and R, as well as platforms like Tableau, to engineer, clean, prepare, and visualize data.'
        },
        {
            title: 'Wordle Clone with React.js',
            description: 'Collaborated with a team of 3 total fellows to create an infinite clone of the New York Times game Wordle. Used HTML/CSS, React.js, and JavaScript.'
        },
        {
            title: 'Projects via CS 112: Data Structures',
            description: 'I completed 5 total independent projects as a part of Rutgers University Data Structures course using Java, which includes: Music Playlist (linked lists), Prerequisite Checker (hash tables, graphs), Hunger Games (binary search trees), and more. These projects are located in my Github repository.'
        }
    ];

    const projectSection = document.getElementById('projects');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        projectDiv.appendChild(projectTitle);
        
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectDiv.appendChild(projectDescription);
        
        projectSection.appendChild(projectDiv);
    });
}); 