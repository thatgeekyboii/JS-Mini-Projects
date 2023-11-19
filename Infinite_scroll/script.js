const API_BASE_URL = 'https://api.frontendexpert.io/api/testimonials';
const PAGE_SIZE = 5;

let canFetchTestimonials = true; // first allow
let afterID = null;

const testimonialContainer = document.getElementById('testimonial-container')

testimonialContainer.addEventListener('scroll',handleScroll);

fetchAndAppendTestimonials();

function handleScroll(){
    if(!canFetchTestimonials) return;
    const bottomSpaceLeftToScroll = this.scrollHeight - this.scrollTop - this.clientHeight;

    if(bottomSpaceLeftToScroll > 0) return;
    fetchAndAppendTestimonials();
}

function fetchAndAppendTestimonials(){

    canFetchTestimonials = false;

    // Creating URL object
    const url = createTestimonialsUrl();
    fetch(url)
    .then(res => res.json())
    .then(({hasNext,testimonials}) => {
        const fragment = document.createDocumentFragment();
        testimonials.forEach(({message}) => {
            fragment.appendChild(createTestimonialElement(message));
        });
        testimonialContainer.appendChild(fragment);

        // check if more testimonials 
        if(hasNext){
            afterID = testimonials[testimonials.length -1].id;
        }else{
            // no testimonials
            testimonialContainer.removeEventListener('scroll',handleScroll);
        }

        canFetchTestimonials = true;
    });

}

function createTestimonialElement(message){
    // create a paragraph 
    const testimonialElement = document.createElement('p');
    testimonialElement.classList.add('testimonial');
    testimonialElement.textContent = message;
    return testimonialElement;
}

// URL Object Function
function createTestimonialsUrl(){
    const url = new URL(API_BASE_URL);
    url.searchParams.set('limit',PAGE_SIZE);

    if(afterID != null){
        url.searchParams.set('after',afterID);
    }
    return url;
}
