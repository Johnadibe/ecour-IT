// Mobile Menu appears on clicking the hamburger menu and dissapers on clicking the close button

const btnNavigationElement = document.querySelector('.btn-mobile-nav');
const headerElement = document.querySelector('.header');

btnNavigationElement.addEventListener('click', () => {
    headerElement.classList.toggle('nav-open');
});

// Mobile Menu dissapear on clicking any of the mobile options

const navLinks = document.querySelectorAll('.main-nav-link');
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        headerElement.classList.remove('nav-open');
    });
});

// Featured Speaker Section

const speakerData = [{
        imageSrc: 'img/speaker_01.png',
        imageAlt: 'Yochai Benkler Photo',
        speakerName: 'Yochai Benkler',
        speakerTitle: 'Berkman Professor of Entrepreneurial Legal Studies at Havard Law School',
        speakerDescription: 'Benkler known for his published book, the wealth of Network.',
    },
    {
        imageSrc: 'img/speaker_03.png',
        imageAlt: 'SohYeong Noh Photo',
        speakerName: 'SohYeong Noh',
        speakerTitle: 'Director of Art Centre Nobi',
        speakerDescription: 'As the main venue for digital space, Noh promotes understanding among technology.'
    },
    {
        imageSrc: 'img/speaker_02.png',
        imageAlt: 'Kilnam Chon Photo',
        speakerName: 'Kilnam Chon',
        speakerTitle: '',
        speakerDescription: 'Kilnam Chon is an internet enthusiast who has been experienced in the IT industry for years.',
        display: 'hidden'
    },
    {
        imageSrc: 'img/speaker_04.png',
        imageAlt: 'Julia Leda Photo',
        speakerName: 'Julia Leda',
        speakerTitle: 'President of Young Pirates of Europe',
        speakerDescription: 'Leda who supports and encourages young youths in digital and tech field.',
        display: 'hidden'
    },
    {
        imageSrc: 'img/speaker_05.png',
        imageAlt: 'Lila Tretikov Photo',
        speakerName: 'Lila Tretikov',
        speakerTitle: 'Executive Director of the Wikimedia Foundation',
        speakerDescription: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation who aims at developing more people through out the world.',
        display: 'hidden'
    },
    {
        imageSrc: 'img/speaker_06.png',
        imageAlt: 'Ryan Merkley Photo',
        speakerName: 'Ryan Merkley',
        speakerTitle: 'CEO of creative commons, ex COO of the moxilla Foundation',
        speakerDescription: 'Ryan had been leading open-source projects at the Mozilla Foundation.',
        display: 'hidden'
    }
]

const mainProgram = document.querySelector('.main-program')
const featuredSpeakers = document.createElement('section');
featuredSpeakers.classList = 'wrap featured-speakers';
mainProgram.after(featuredSpeakers);

const featureHeading = document.createElement('h2');
featureHeading.classList = 'feature-heading';
featureHeading.innerText = 'Featured Speakers';
featuredSpeakers.appendChild(featureHeading);

const guideBar = document.createElement('hr');
guideBar.classList = 'guide-bar';
featuredSpeakers.appendChild(guideBar);

const featuredBox = document.createElement('div');
featuredBox.classList = 'featured-box';
featuredSpeakers.appendChild(featuredBox);

for (let i = 0; i < speakerData.length; i += 1) {
    const speakerList = document.createElement('div');
    speakerList.classList = `speaker-list ${speakerData[i].display}`;
    featuredBox.appendChild(speakerList);

    const image = document.createElement('img');
    image.classList = 'round';
    image.src = speakerData[i].imageSrc;
    image.alt = speakerData[i].imageAlt;
    speakerList.appendChild(image);

    const speakerDetails = document.createElement('div');
    speakerDetails.classList = 'speaker-details';
    speakerList.appendChild(speakerDetails);

    const speakerName = document.createElement('h3');
    speakerName.classList = 'speaker-name';
    speakerName.innerText = speakerData[i].speakerName;
    speakerDetails.appendChild(speakerName);

    const speakerTitle = document.createElement('p');
    speakerTitle.classList = 'speaker-title';
    speakerTitle.innerText = speakerData[i].speakerTitle;
    speakerDetails.appendChild(speakerTitle);

    const speakerGuideBar = document.createElement('hr');
    speakerGuideBar.classList = 'speaker-guide-bar';
    speakerDetails.appendChild(speakerGuideBar);

    const speakerDescription = document.createElement('p');
    speakerDescription.classList = 'speaker-description';
    speakerDescription.innerText = speakerData[i].speakerDescription;
    speakerDetails.appendChild(speakerDescription);
}

const speakerBtn = document.createElement('button');
speakerBtn.classList = 'speaker-btn';
speakerBtn.innerHTML = `MORE<span> V</span>`,
    featuredBox.appendChild(speakerBtn);

const btnMore = document.querySelector('.speaker-btn');
const hidden = document.querySelectorAll('.hidden')
btnMore.addEventListener('click', () => {
    hidden.forEach((e) => {
        e.style.display = 'flex';
        btnMore.style.display = 'none';
    });
})