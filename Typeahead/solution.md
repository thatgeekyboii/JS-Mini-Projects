we want to make a requesst after 500ms of user stopped typing we need to add the glossary into the suggestion list.
if the user selects a suggestion, it should reflect on the search bar.

As the user types into the input, we are going to set the text parameter for the same.

Steps:
1) get the input and listen the event on the input event and when it fires , we call a function. (onType)
    - We can also use changeEvent , change event fires when ever there is a change in theinput and loses the change when we click off it

2) onType():
    - Call the api after the user has stopped typing for 500ms.
    - we need to clearTimeout before every , when we type for first time it will be undefined. However if we call the timeout within the 500ms, it will reset the timeout.
    - Edgecase: if the user deleted, no need to make api call. (input.value.length === 0)
        - clearSuggestions();
        
3) clearSuggestions():
    - Clear timeout 
    - remove everything from the suggestions list.

4) fetchAndAppendSuggestions
    - get the key from the input.value
    - make a fetch request and take in the url object.
    