
$("#mapdiv").append(googleMap);
/*model having all objects*/
let model = {
     bio: {
          name: 'Kavitha Acharya',
          role: 'Front End Web Developer',
          contacts: {
               mobile: '416-820-5783',
               email: 'acharyakavita12@gmail.com',
               github: 'https://github.com/acharyakavita',
               twitter: 'https://twitter.com/kavita_acharya',
               location: 'Toronto'
          },
          welcomeMessage: 'Hi,Kavitha Here',
          skills: ['Javscript', 'HTML', 'HTML5', 'Bootstrap', 'Css3'],
          biopic: 'images/fry.jpg'
     },

     education: {
          schools: [{
               name: 'SDMCET',
               location: 'Dharwad',
               degree: 'Bachelor of Engineering',
               majors: 'Computer Science',
               dates: '2008-2012',
               url: 'https://sdmcet.ac.in/'
          }],
          onlineCourses: [{
               title: 'Front End Nano degree',
               school: 'Udacity',
               dates: '2018/09-2019/01',
               url: 'https://www.udacity.com/'
          }]

     },
     work: {
          jobs: [{
               employer: 'Accenture',
               title: 'Senior Software Engineer',
               location: 'Bangalore',
               dates: '2012June-2018August',
               description: 'Mainframe Developer'
          }]

     },
     project: {
          projects: [
               {
                    title: 'First DAta',
                    dates: '2012June-2016May',
                    description: 'ODS',
                    images: ['images/197x148.gif']
               },
               {
                    title: 'QBE',
                    dates: '2016June-2018August',
                    description: 'WCP',
                    images: ['images/197x148.gif']
               }]
     }
}

/*controller object*/
let Controller={
     init:function(){
          displayBio.render();
          displayEducation.render();
          displayWork.render();
          displayProject.render();
     },

     getBio:function(){
          return model.bio;
     },
     getEducation:function(){
          return model.education;
     },
     getWork:function(){
          return model.work;
     },
     getProject:function(){
          return model.project.projects;
     }

}
/*display BIo data object*/
let displayBio={
     render:function(){
          this.bio=Controller.getBio();          
          $('#header').prepend(HTMLheaderRole.replace('%data%',this.bio.role));
          $('#header').prepend(HTMLheaderName.replace('%data%',this.bio.name));
          $('#topContacts').append(HTMLmobile.replace('%data%',this.bio.contacts.mobile));
          $('#topContacts').append(HTMLemail.replace('%data%',this.bio.contacts.email));
          $('#topContacts').append(HTMLtwitter.replace('%data%',this.bio.contacts.twitter));
          $('#topContacts').append(HTMLgithub.replace('%data%',this.bio.contacts.github));
          $('#topContacts').append(HTMLlocation.replace('%data%',this.bio.contacts.location));
          $('#header').append(HTMLbioPic.replace('%data%',this.bio.biopic));
          $('#header').append(HTMLwelcomeMsg.replace('%data%',this.bio.welcomeMessage));
          $('#header').append(HTMLskillsStart);

          for(let skill of this.bio.skills){
               $('#header').append(HTMLskills.replace('%data%',skill)); 
          }

          $('#footerContacts').append(HTMLmobile.replace('%data%',this.bio.contacts.mobile));
          $('#footerContacts').append(HTMLemail.replace('%data%',this.bio.contacts.email));
          $('#footerContacts').append(HTMLtwitter.replace('%data%',this.bio.contacts.twitter));
          $('#footerContacts').append(HTMLgithub.replace('%data%',this.bio.contacts.github));
          $('#footerContacts').append(HTMLlocation.replace('%data%',this.bio.contacts.location));
         
     }
}

/*display Education data object*/
let displayEducation={
     render:function(){
          this.education=Controller.getEducation();    
          
          for(let edu of this.education.schools){
               $('#education').append(HTMLschoolStart);
               $('.education-entry').append(HTMLschoolName.replace('%data%',edu.name));
               HTMLschoolName.replace('#',edu.url);
               $('.education-entry').append(HTMLschoolDegree.replace('%data%',edu.degree));
               $('.education-entry').append(HTMLschoolDates.replace('%data%',edu.dates));
               $('.education-entry').append(HTMLschoolLocation.replace('%data%',edu.location));
               $('.education-entry').append(HTMLschoolMajor.replace('%data%',edu.majors));
          }
          $('#education').append(HTMLonlineClasses);
          for(let edu of this.education.onlineCourses){
               $('#education').append(HTMLOnlineschoolStart);
               $('.online-education-entry').append(HTMLonlineTitle.replace('%data%',edu.title));
               HTMLonlineTitle.replace('#',edu.url);
               $('.online-education-entry').append(HTMLonlineSchool.replace('%data%',edu.school));
               $('.online-education-entry').append(HTMLonlineDates.replace('%data%',edu.dates));
               $('.online-education-entry').append(HTMLonlineURL.replace('%data%',edu.url));
          }
         
     }
}

/*Display work data object*/
let displayWork={
     render:function(){
          this.work=Controller.getWork();    

          for(let job of this.work.jobs){
               $('#workExperience').append(HTMLworkStart);
               $('.work-entry').append(HTMLworkEmployer.replace('%data%',job.employer));
               $('.work-entry').append(HTMLworkTitle.replace('%data%',job.title));
               $('.work-entry').append(HTMLworkDates.replace('%data%',job.dates));
               $('.work-entry').append(HTMLworkDescription.replace('%data%',job.description));
          }    
     }
}

/*Display Project data object*/
let displayProject={
     render:function(){
          this.prj=Controller.getProject(); 
          $('#projects').append(HTMLprojectStart);   
          for(let i=0;i<this.prj.length;i++){
               $('.project-entry').append(HTMLprojectTitle.replace('%data%',this.prj[i].title));
               $('.project-entry').append(HTMLprojectDates.replace('%data%',this.prj[i].dates));
               $('.project-entry').append(HTMLprojectDescription.replace('%data%',this.prj[i].description));
          }    
     }
}

Controller.init();