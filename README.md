# feedback-buttons README

This is the README for "feedback-buttons". Use this extension to add the buttons into your markdown file.  


## Features

After you install, **Ctrl-Shift-P > Add Feedback Buttons**.  Then type in the name you want to use for the bookmark of your current section.  

You'll get the code to add to the top and bottom of the section.  Finish up by adding the url to your survey (`<surveyurl>`), and the bookmark for the next section (`<next-section-id>`).  
  
 For example, if you input "current" as the bookmark for your section, your code will look like this.

```
<! --- Put the next line above the h2 for your section --->
<a name='current'></a>

<! --- Put the next 2 lines to the end of your section.  Change the values for <next-section-id> and <surveyurl> --->
> [!div class='nextstepaction']
>[I created the control script](?success=current#<next-section-id>) [I ran into an issue](<surveyurl>?issue=current)

```


## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.


## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of Add Feedback Buttons

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

-----------------------------------------------------------------------------------------------------------



### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
