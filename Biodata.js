// Navigation buttons
const personalNav = document.querySelector('.Personal-nav')
const educNav = document.querySelector('.Educ-nav')
const skillNav = document.querySelector('.Skill-nav')   

// Default hovering when the page loads
const hover1 = personalNav.classList.add('activehover')
const hover2 = educNav.classList.add('activehover')
const hover3 = skillNav.classList.add('activehover')

// getting the element button to add toggling effect for the default page (when the page loads)
const dayAndNight = document.body.querySelector('button') // <------------ This one will be remove later when we navigates

let forStable = 'DAY';

// For Day and Night button effect
const toggling = (event) => {
   const backgroundHeader = document.querySelector('header');
   const bodyColor = document.querySelector('body');
   const labeltext1 = document.querySelector('.labels-night1')
   const labeltext2 = document.querySelector('.labels-night2')
   const labeltext3 = document.querySelector('.labels-night3')
   const journey = document.querySelector('.school-journey')
   if(forStable === 'DAY') {
      // For Day
      forStable = 'NIGHT'
      event.target.classList.add('button-hover-night')
      event.target.classList.remove('button-hover-day')
      event.target.innerHTML = `${forStable}`
      backgroundHeader.classList.add('header-day')
      backgroundHeader.classList.remove('header-default')
      bodyColor.classList.add('body-day')
      bodyColor.classList.remove('body-night')
      bodyColor.classList.add('for-change-animation-day')
      bodyColor.classList.remove('for-change-animation-night')
      labeltext1.classList.add('labels-day')
      labeltext2.classList.add('labels-day')
      labeltext3.classList.add('labels-day')
      journey.classList.add('school-journey-day');
      journey.classList.remove('school-journey-night');
   } else if(forStable === 'NIGHT') {
      // For Night
      forStable = 'DAY'
      event.target.innerHTML = `${forStable}`
      event.target.classList.add('button-hover-day')
      event.target.classList.remove('button-hover-night')
      backgroundHeader.classList.add('header-default')
      backgroundHeader.classList.remove('header-day')
      bodyColor.classList.remove('body-day')
      bodyColor.classList.add('body-night')
      bodyColor.classList.add('for-change-animation-night')
      bodyColor.classList.remove('for-change-animation-day')
      labeltext1.classList.remove('labels-day')
      labeltext2.classList.remove('labels-day')
      labeltext3.classList.remove('labels-day')
      journey.classList.remove('school-journey-day')
   }
}

personalNav.classList.add('active')
const breadCrumbs = (event) => {
   event.preventDefault();
   if(event.target.classList.contains('Personal-nav')) {
      event.target.classList.add('active')
      educNav.classList.remove('active')
      skillNav.classList.remove('active')

      // DOM declaration
      document.body.querySelector('section.main-container').innerHTML = ` 
            <section class="container-for-img">
               <img src="Yass.jpg" alt="Yasser's image">
            </section>

            <!-- Personal Details -->
            <section class="container-for-details">
               <h2><span class="labels-night1">Name:  </span>Yasser Mirza Ahmed Hasan L. Dalal</h2>
               <h2><span class="labels-night2">Address:  </span> Flat 2, Bldg 110, Road 1204, Blk 412, Al Daih, Bahrain </h2>
               <h2><span class="labels-night3">Contact Number:    </span>33031351</h2>
            </section>
      `
      // Update label classes based on theme
      const labeltext1 = document.querySelector('.labels-night1');
      const labeltext2 = document.querySelector('.labels-night2');
      const labeltext3 = document.querySelector('.labels-night3');

      if (forStable === 'DAY') {
         labeltext1.classList.remove('labels-day');
         labeltext2.classList.remove('labels-day');
         labeltext3.classList.remove('labels-day');
      } else if (forStable === 'NIGHT') {
         labeltext1.classList.add('labels-day');
         labeltext2.classList.add('labels-day');
         labeltext3.classList.add('labels-day');
      }
   } else if(event.target.classList.contains('Educ-nav')) {
      event.target.classList.add('active')
      personalNav.classList.remove('active')
      skillNav.classList.remove('active')

      // DOM declaration
      document.body.querySelector('section.main-container').innerHTML = `  
            <section class="school-journey">
                  <section>
                     <img src="ama-logo.png" alt="logo of AMA University" style="width: 450px">
                     <h2><img src="" alt="">AMA Computer College (OED)</h2>
                     <h3>2024 - Present</h3>
                     <h3>Bachelor of Science in Computer Engineering</h3>
                  </section>

                  <section>
                     <img src="nu-logo.png" alt="logo of National University" style="width: 300px">
                     <h2><img src="" alt="">National University Fairview (NU)</h2>     
                     <h3>2023 - 2023</h3>   
                     <h3>Bachelor of Science in Computer Engineering</h3>    
                  </section>

                  <section>
                     <img src="St-Clare-Logo.png" alt="logo of St Clare College" style="width: 300px">
                     <h2><img src="" alt="">St. Clare College (SCC)</h2>     
                     <h3>2021 - 2023</h3>   
                     <h3>Grade 11 - Grade 12 (SHS)</h3>   
                  </section>

                  <section>
                     <img src="BCSCMC-logo.png" alt="logo of St Clare Lillesville">
                     <h2><img src="" alt="">Better Children Of St. Clare Montessori Center (BCSCMC)</h2>     
                     <h3>2010 - 2021</h3>   
                     <h3>Kindergarten 2 - Grade 10</h3>   
                  </section>

                  <section>
                     <img src="FM-logo.png" alt="logo of First Mile Christian School">
                     <h2><img src="" alt="">First Mile Christian School</h2>     
                     <h3>2008 - 2010</h3>   
                     <h3>Nursery - Kindergarten 1</h3>   
                  </section>
            </section>
      `
      // After adding new content, apply the event listener for Day and Night button
   } else if (event.target.classList.contains('Skill-nav')) {
      event.target.classList.add('active')
      personalNav.classList.remove('active')
      educNav.classList.remove('active')

      // DOM declaration
      document.body.querySelector('section.main-container').innerHTML = `  
            <section class="Tech-Skills">
               <div class="for-centering">
                  <img src="coding.png" alt="web development icon">
               </div>
               <div>
                   <h2>Web Development</h2>
                   <i class="fa-brands fa-html5 fa-2xl" style="color: #da0726;"></i>
                   <i class="fa-brands fa-css3-alt fa-2xl" style="color: #0162fe;"></i>
                   <i class="fa-brands fa-js fa-2xl" style="color:rgb(252, 199, 8);"></i>
                   <i class="fa-brands fa-python fa-2xl" style="color: #8fb8ff;"></i>
                </div>
               
                <div>
                  <h2>Other Extra Skill</h2>
                  <i class="fa-brands fa-github fa-2xl" style="color: #ffffff;"></i>
                  <i class="fa-brands fa-git-alt fa-2xl" style="color: #ff2e2e;"></i>
                  <i class="fa-solid fa-terminal fa-2xl"></i>
                </div>
            </section>
      `
   }

   // Redeclare the button again because when we navigate to this DOM element, 
   // the previous declaration of the button outside of this function doesn't exist here
   const dayAndNight = document.querySelector('button')
   dayAndNight.addEventListener('click', toggling)
}


// Firing the event of this navigation buttons
personalNav.addEventListener('click', breadCrumbs)
educNav.addEventListener('click', breadCrumbs)
skillNav.addEventListener('click', breadCrumbs)

// Firing the event of the button only works when the page loads but it will not work when we start navigating through the DOM
dayAndNight.addEventListener('click', toggling)