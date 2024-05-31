# ggan0175_9103_tut5
# Reflective Report

## Project Overview

This project displays a series of dynamic circles on a canvas, which move, rotate, and scale based on time. Each circle consists of multiple layers with smaller circles embedded within, creating a visually layered effect.

### Interaction Guide

- **Page Loading**: Upon loading the page, the animation will automatically start. No action is required by the viewers to see the dynamic behaviors of the circles.
- **Animation Duration**: The animation is continuous, with circles endlessly scrolling across the screen, accompanied by rotational and scaling transformations.

## Project Visual Inspirations

### Windmill Movement Inspiration

![Windmill](assets/windmill.jpg)
*This image of a windmill captures its continuous and graceful movements, which inspired the rotational aspects of the animations in our project.*

### Breathing Rhythm Visualization

![Breathing Rhythm](assets/breathing.jpg)
*A graphical representation of breathing rhythms that inspired the scaling animation, mimicking the natural expansion and contraction found in living organisms.*

### M.C. Escher's Artwork

![Escher's Infinite Staircase](assets/Escher's_Infinite_Staircase.jpeg)
*M.C. Escher's Infinite Staircase: Escher's exploration of infinite loops and complex symmetries influenced our approach to creating repetitive and engaging patterns in the animations.*

### Animation Method

- **Animation Drive**: The animation is time-based, using timers and events within the `p5.js` `draw()` function to achieve dynamic effects. This means every frame of the animation updates the position, angle, and size of the circles based on time.
- **Animated Properties**:
  - **Horizontal Scrolling**: Each circle scrolls horizontally across the screen from left to right, re-entering from the left once it passes off the screen.
  - **Rotation**: Each circle rotates around its center.
  - **Scaling**: Each circle periodically increases and decreases in size, simulating a breathing effect.

### Differences from Other Works

Compared to other group members' projects, my work has the following unique aspects in terms of animation effects:
- My project combines scrolling, rotating, and scaling effects, while other group members might focus on a single effect such as color change or displaying only parts of components.
- My animations enhance viewer engagement through continuous and smooth dynamic changes, rather than just simple visual modifications.

### Animation Inspiration

The design for the animations was inspired by natural phenomena such as windmills and breathing rhythms, where continuous movement and periodic changes in size provided the creative basis for this project. These natural phenomena demonstrate dynamic and harmonious aesthetics, which guided my choices in animation implementation.

### Technical Explanation

The animations are implemented using `p5.js`, primarily by adjusting the x-coordinate, rotation angle, and scale factor. Updates to each attribute depend on global time variables (like `millis()`), ensuring the smoothness and continuity of the animations.

### References and Acknowledgments

This project utilizes `p5.js`, a widely used JavaScript library for creative coding. Thanks to the rich resources and documentation provided by the `p5.js` community, such visual art projects can be successfully realized.
