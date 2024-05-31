# Reflective Report on Dynamic Animated Circles Project

## Introduction

This project, developed using p5.js, showcases a series of dynamic animated circles on a digital canvas. The animations are driven by principles observed in natural phenomena and refined through artistic expression, making coding accessible and engaging for artists, designers, educators, and beginners alike.

## Project Overview

This interactive artwork features a series of dynamic circles that move, rotate, and scale based on time. Each circle consists of multiple layers, with smaller circles embedded within, creating a visually rich, layered effect.

## Interactive Dynamic Circle Art Project

## Interactive Guide

- **Page Load**: Animation will start automatically when the page is loaded. All animations are designed to be viewed without user input.
- **Animation Timing**: The main animation effects, such as scrolling and zooming of the circles, will continue with no fixed end time. The motion period of each circle is set to complete the scrolling within the screen width and then restart from the starting point.

## Animation methods in detail

### Animation driver

I've chosen to use a time-based method to drive the animation, which involves using timers and events in the `draw()` function of `p5.js`. This method allows the animation to update the position, angle and size of the circle at each frame based on elapsed time.

### Animation properties

The following are the image properties that will be animated and how they will be animated:

- **Horizontal Scroll**: The circle will scroll horizontally across the screen, and re-enter from the other side after going beyond the screen.
- **Rotation**: Each circle will rotate around its center.
- **Scaling**: The circles will increase and decrease in size according to a periodic pattern, mimicking the effect of breathing.

## Interaction and Time-Based Animation Details

### Mouse Interactions

Our project incorporates interactive elements that respond to mouse movements, enhancing the user engagement and visual dynamics of the artwork. Here's how we handle mouse interactions:

- **Mouse Movement Detection**:
  We detect the mouse movement across the canvas and adjust the properties of the circles based on the proximity to the mouse cursor. This interaction allows the circles to expand when the mouse hovers over them, creating an interactive experience.

  ```javascript
  function mouseMoved() {
    circles.forEach(circle => {
      let distance = dist(mouseX, mouseY, circle.x, circle.y);
      if (distance < circle.diameter / 2) {
        circle.diameter = min(circle.diameter + 10, 300);  // Expand circle but limit maximum diameter
      } else {
        circle.diameter = max(circle.diameter - 1, 100);  // Shrink circle but maintain minimum diameter
      }
    });
  }

In this way, detailed explanations of how to dynamically update animations using mouse interactions and the passage of time are provided, with code examples and explanations that make the technical implementation more transparent and easier to understand.

## Time-Based Animation

The animation's progression is primarily controlled through time-based calculations, which allow for smooth and continuous animations that evolve as time progresses. Here's how we achieve this:

### Time-Based Property:
Each frame updates the position, rotation, and scale of the circles using time as a factor, ensuring smooth transitions and consistent animations regardless of frame rate.


## Project Visual Inspirations

Our project draws inspiration from a variety of sources, reflecting the intersection of natural dynamics and artistic innovation.

## Animation Inspiration

![Wheels of fortune](assets/Pacita%20Abad%20Wheels%20of%20fortune.jpg)
*The main reference for my work is Pachita Abad's ‘Wheel of Fortune’. The reproduction of this painting gives it life and visual richness.*

### Windmill Movement Inspiration

![Windmill](assets/windmill.jpg)
*The graceful and continuous movements of windmills inspired the rotational aspects of our animations, reflecting the synergy between mechanical motion and natural wind flows.*

### Breathing Rhythm Visualization

![Breathing Rhythm](assets/breathing.jpg)
*The natural expansion and contraction found in breathing rhythms are mimicked in our scaling animations, providing a visual representation of life's essential rhythm.*

### M.C. Escher's Artwork

![Escher's Infinite Staircase](assets/Escher's_Infinite_Staircase.jpeg)
*Escher's exploration of infinite loops and complex symmetries has deeply influenced our approach to creating repetitive and engaging patterns.*

### Interactive Art Installation

![Interactive Art by Rafael Lozano-Hemmer](assets/Interactive_Art_by_Rafael_Lozano-Hemmer.jpg)
*This installation by Rafael Lozano-Hemmer, where audience movements dynamically influence the art display, parallels our project's interactivity features.*

## Animation Method

### Animation Drive

The animations are time-based, utilizing timers and events within the `p5.js` `draw()` function to dynamically update the properties of each circle.

### Animated Properties

- **Horizontal Scrolling**: Circles scroll horizontally across the screen, seamlessly re-entering from the left as they exit on the right.
- **Rotation**: Each circle rotates around its center, adding a layer of complexity to the visual display.
- **Scaling**: The circles periodically increase and decrease in size, simulating the natural rhythm of breathing which enhances the visual engagement.

## Differences from Other Works

Unlike projects from other group members that might focus on single effects such as color changes or partial display of elements, this project integrates multiple dynamic effects:
- Combining scrolling, rotation, and scaling to create a more complex and engaging viewer experience.
- Continuous and smooth dynamic changes enhance viewer engagement more effectively than simpler visual modifications.

## Animation Inspiration

The design and implementation of the animations are inspired by the continuous movement and rhythmic patterns observed in windmills and breathing, respectively. These natural phenomena exemplify dynamic and harmonious aesthetics, guiding our animation strategies and choices.

## Technical Explanation

The technical implementation involves using `p5.js` to adjust the x-coordinate, rotation angle, and scale factor of each circle based on time calculations from `millis()`. This approach ensures smooth and continuous animations that are visually appealing and dynamically responsive.

## References and Acknowledgments

We extend our gratitude to the `p5.js` community, whose extensive resources and documentation have been invaluable. This JavaScript library is instrumental in enabling artists and programmers to explore creative coding, making it possible to realize such visually intricate projects.

