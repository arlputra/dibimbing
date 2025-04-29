
     const modeToggle = document.getElementById('modeToggle');
     const body = document.body;
     
     modeToggle.addEventListener('click', () => {
         body.classList.toggle('dark-mode');

         if (body.classList.contains('dark-mode')) {
             localStorage.setItem('darkMode', 'enabled');
         } else {
             localStorage.setItem('darkMode', 'disabled');
         }
     });

     if (localStorage.getItem('darkMode') === 'enabled') {
         body.classList.add('dark-mode');
     }

     const today = new Date();
     const currentDay = today.getDate();
     const calendarDays = document.querySelectorAll('.calendar-day');
     
     calendarDays.forEach(day => {
         const dayNumber = day.querySelector('.day-number');
         if (dayNumber && parseInt(dayNumber.textContent) === currentDay) {
             day.classList.add('current-day');
         }
     });

     const galleryTabs = document.querySelectorAll('.gallery-tab');
     galleryTabs.forEach(tab => {
         tab.addEventListener('click', () => {
             galleryTabs.forEach(t => t.classList.remove('active'));
             tab.classList.add('active');
         });
     });
     
     const studentSearch = document.querySelector('.student-search input');
     const studentRows = document.querySelectorAll('.student-table tbody tr');
     
     studentSearch.addEventListener('input', () => {
         const searchTerm = studentSearch.value.toLowerCase();
         
         studentRows.forEach(row => {
             const nimCell = row.querySelector('td:first-child');
             const nameCell = row.querySelector('td:nth-child(2)');
             
             if (nimCell && nameCell) {
                 const nim = nimCell.textContent.toLowerCase();
                 const name = nameCell.textContent.toLowerCase();
                 
                 if (nim.includes(searchTerm) || name.includes(searchTerm)) {
                     row.style.display = '';
                 } else {
                     row.style.display = 'none';
                 }
             }
         });
     });
     
     const pageLinks = document.querySelectorAll('.page-link');
     pageLinks.forEach(link => {
         link.addEventListener('click', () => {
             pageLinks.forEach(l => l.classList.remove('active'));
             link.classList.add('active');
         });
     });