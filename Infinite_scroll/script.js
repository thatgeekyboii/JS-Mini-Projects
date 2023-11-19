const API_BASE_URL = 'https://api.frontendexpert.io/api/testimonials';
const PAGE_SIZE = 5;

const testimonialContainer = document.getElementById('testimonial-container')

testimonialContainer.addEventListener('scroll',handleScroll);

fetchAndAppendTestimonials();

function handleScroll(){
    const bottomSpaceLeftToScroll = (
        this.scrollHeight - // total height of the container including the height 
        this.scrollTop -
        this.clientHeight
    )
}

function fetchAndAppendTestimonials(){
    // Creating URL object
    const url = createTestimonialsUrl();
    fetch(url)
    .then(response => response.json)
    .then(({hasNext,testimonials}) => {
        const fragment = document.createDocumentFragment();
        testimonials.forEach(({message}) => {
            fragment.appendChild(createTestimonialElement(message));
        });
        testimonialContainer.appendChild(fragment);
    });

}

function createTestimonialElement(message){
    // create a paragraph 
    const testimonialElement = document.createElement('p');
    testimonialElement.classList.add('testimonial');
    testimonialElement.text = message;
    return testimonialElement;
}

// URL Object Function
function createTestimonialsUrl(){
    const url = new URL(API_BASE_URL);
    url.searchParams.set('limit',PAGE_SIZE);
    return url;
}
