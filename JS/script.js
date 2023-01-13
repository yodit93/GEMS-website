const humberger = document.querySelector('.menu-link');
const clickEvent = document.querySelector('.click-event');
const logoLink = document.querySelector('.logo-link');
const closeButton = document.querySelector('.close-btn');
const menuList = document.querySelectorAll('.nav2 li a');
console.log(humberger);

humberger.addEventListener('click', () => {
  clickEvent.classList.add('active');
  logoLink.style.display = 'none';
  closeButton.style.display = 'block';

});

closeButton.addEventListener('click', () => {
  clickEvent.classList.remove('active');
  logoLink.style.display = 'block';
});

menuList.forEach((list) => {
  list.addEventListener('click', () => {
    clickEvent.classList.remove('active');
  });
});

// dynamic page

const speakerCont = document.querySelector('.speakers');

const speakers = [
  {
    photo: './images/sine.jfif',
    name: 'Sinework Taye',
    profile: 'Public relation Manager at GOU UDAY VEDIC',
    about:
      'Sinework is a certified Professional Life Coach. He is a Content Creator at Inspire Ethiopia.'
  },
  {
    photo: './images/dr, mihiret.jfif',
    name: 'Dr. Mihret Debebe',
    profile: 'Psychiatrist and founder of mindset.',
    about:
      `Dr. Mihret received his Medical Degree from Addis Ababa University and 
      studied psychiatry in Saint Louis University.`
  },
  {
    photo: './images/mane.jfif',
    name: 'Manyazewal Eshetu',
    profile: 'Founder and CEO at Man Marketing.',
    about:
      'Personal development speaker and peak performance coach.'
  },
  {
    photo: './images/Dawit.jfif',
    name: 'Dawit Dreams',
    profile: 'Life Success Coach and founder of Dawit Dreams.',
    about:
      `Dawit is a Life Success Coach and Author of the Amazing Book "ትልቅ ሕልም አለኝ" 
      (I have a great dream).`
  }
 
];

speakers.forEach(function(speaker) {
  const motivator = document.createElement('div');
  motivator.className = 'speaker';
  
  const imgCont = document.createElement('div');
  imgCont.className = 'image-cont'

  const bgImg = document.createElement('img');
  bgImg.src = './images/bg-img.png';
  bgImg.className = 'bg-img';
  imgCont.appendChild(bgImg);

  const speakerImg = document.createElement('img');
  speakerImg.src = speaker.photo;
  speakerImg.className = 'speaker-img';
  imgCont.appendChild(speakerImg);

  motivator.appendChild(imgCont);

  const speInfo = document.createElement('div');
  speInfo.className = 'speaker-info';

  const speName = document.createElement('p');
  speName.className = 'name';
  speName.innerText = speaker.name;
  speInfo.appendChild(speName);

  const speStatus = document.createElement('p');
  speStatus.className = 'status';
  speStatus.innerText = speaker.profile;
  speInfo.appendChild(speStatus);

  const lineStatus = document.createElement('div');
  lineStatus.className = 'line-status';
  speInfo.appendChild(lineStatus);

  const speDesc = document.createElement('p');
  speDesc.className = 'speaker-desc';
  speDesc.innerText = speaker.about;
  speInfo.appendChild(speDesc);

  motivator.appendChild(speInfo);

  speakerCont.appendChild(motivator);

});

btnMore = document.createElement('button');
btnMore.className = 'more';
btnMore.innerHTML = 'More<span class="more-icon"><img src="./images/down-arrow.svg" alt=""></span>';
speakerCont.appendChild(btnMore);



