Walkthrough:

We need to append the first 5 testimonials. Once on the first load and also whenever the user scrolls to the bottom

    -fetchAppendTestimonials();
        - Make a request to the url. (createTestimonialsUrl())
        - Resolve the fetch promise. 
        - Get the json from the response.
        - Append the testimonial to the page. (testimonials, hasNext)
            - No need to append in a for loop as it will update every single time.
                - Create a Fragment (extra DOM Tree).
                - Append the Fragment to the Testimonial Container.
                



    - createTestimonialsUrl()
        - Create URL object to get the limit defined in the search parameters.
        - Set a page size.
        - return the url.

    -createTestimonialElement()
        -  Function Creates Testimonial Element.
        