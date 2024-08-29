import { useState } from "react";

/* 
    * Consume data from source as prop
    * Consume input from text input
    * On change, run the searchData() function.
        * Clear the searchResults array to remove previous results
        * Map through the data against the text input, detecting folders and mapping through those to find files. (Need to know filepaths in production version?)
        * Add matches to searchResults array
    * Display the searchResults array as a list beneath the search bar, or if it is empty display nothing in its place.
*/