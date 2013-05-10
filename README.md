collectdata
===========

[![endorse](https://api.coderwall.com/ultimatedelman/endorsecount.png)](https://coderwall.com/ultimatedelman)

A small jQuery plugin that returns all the data from a set of inputs in a structured format.

[Demo](http://jsfiddle.net/edelman/2VKF9/)

In your HTML, set your `name` attribute to what you would like to call your input:

    <input type="email" name="userEmail">

Basic usage:

    var data = $('input').collectData();
    
Will yield this object:

    {"userEmail": "whateveremail@youtypedin.com"}
    
Optionally, you may provide a structure so that the function knows to push values into an array:

    var structure = {myVals: []}
        , data = $('input').collectData(structure)
    ;

In the code sample above, for each input with a `name` of `myVals`, your output would look like:

    {"myVals": ["value1", "value2", "etc"], "otherInput1": "value", "etc": "and etc" }
