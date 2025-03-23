# Carbon Crunch - Task

## Objective

This project aims to evaluate the ability to translate a Figma design into a responsive, functional web page while implementing a smooth slider animation. The task involves pixel-perfect design recreation, responsive layout adjustments, and adding subtle micro-interactions.

### Improved Version
[Carbon Crunch Task Redesign](https://github.com/SadhuG/carbon-crunch-redesign). Another submission for the task with improvements across the board with perfomance, styling, tech-stacks and design systems.
Build keeping the future optimizations below in mind.

## Task Details

### 1. Recreate the Figma Design

- **Design File:** [Figma Task File](https://www.figma.com/design/mvr8LtX9LWOdTtX1Kco6pN/Task-File---4?node-id=0-1&t=WZ9qJ6dgNBSKNSXw-1)
- **Requirements:**
  - Achieve pixel-perfect accuracy.
  - Ensure the page is fully responsive across multiple devices.

### 2. Implement the Animation

- **Reference Video:** [3D Animation Inspiration](https://www.youtube.com/watch?v=m8Kd35nyuzw)
- **Requirements:**
  - Create a simple 3D animation featuring an item moving across the screen with smooth interactions.
  - Incorporate smooth transitions and interactive elements (e.g., hover effects, scroll-triggered animations).

## Live Preview

A live version of the project is hosted on [GitHub Pages](https://sadhug.github.io/carbon-crunch-task/).

## Additional Assets & Credits

- **Images/Icons/Fonts:**  
  All external assets used in this project have been uploaded to the repository. These assets are downloaded from [Unsplash](https://unsplash.com/) file. Font DM Sans from [Google Fonts](https://fonts.google.com/specimen/DM+Sans)

## Approach

1. **Design Translation:**  
   I carefully analyzed the Figma design and implemented the layout to match the pixel-perfect design while ensuring responsiveness.
   **Changes:**

   - Slight modifications to spacing ensuring symmetry.
   - Removed the `Home` link from the navbar as logo acts as the home navigation link.
   - Only used `DM Sans` font (in heading also) as I was not able to find webfont version of Aeonik.

2. **Slider Animation:**  
   The carousel animation was built by using [shadcn/ui](https://ui.shadcn.com/) with card design from [uiverse.io](https://uiverse.io/Javierrocadev/brown-kangaroo-82). As it Carbon Crunch looks like a B2B service I kept it light, simple and accessible for users keeping navigation easy. A light-weight site is also easier to load on a variety of systems quickly.

3. **Tech Stack & Tools:**  
   The project is built with React + Tailwind CSS + Typescript. Tailwind CSS was used for styling, ensuring quick iterations and responsiveness. Typescript for type safety in components and props. Vite as the bundler. The code was structured for clarity and reusability.

4. **Optimization:**  
   Extra attention was given to performance optimization (e.g., lazy loading of images) and enhancing user interactions with micro-interactions.

5. **Future-Optimization:**  
   While being a good starter design this website's performance and experience can be improved by:
   - Improved design system with clear typographical hierarchy.
   - More contrast between text and background (as the greens were not as contrasting).
   - Better and simpler background images
   - Building the site using Next.js and SSG for improved SEO, loading time speed and experience.

---

**Best Regards,**  
Sudhansh
