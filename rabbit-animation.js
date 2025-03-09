/**
 * RabbitHole Animation Module
 * Contains the animated bunny portal visualization
 */

/**
 * Shows an animated bunny with a portal effect when navigating
 * @param {string} destination - The page being navigated to
 */
function showBunnyAnimation(destination = '') {
  console.log("Showing bunny animation for navigation to:", destination);
  
  // Create the tracker element
  const tracker = document.createElement('div');
  tracker.className = 'rabbithole-bunny-tracker';
  
  // Position it in the center bottom of the viewport
  tracker.style.position = 'fixed';
  tracker.style.bottom = '20px';
  tracker.style.left = '50%';
  tracker.style.transform = 'translateX(-50%)';
  tracker.style.zIndex = '100000';
  tracker.style.pointerEvents = 'none'; // Don't interfere with user interaction
  
  // Add the animated SVG
  tracker.innerHTML = `
    <svg id="bunny-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.76 70.85" width="80" height="92">
      <defs>
        <style>
          .cls-1 {
            fill: #fff;
          }
          
          /* Animation for oval portal */
          @keyframes portalOpen {
            0% {
              transform: scaleX(0);
              opacity: 0;
            }
            100% {
              transform: scaleX(1);
              opacity: 1;
            }
          }
          
          /* Animation for bunny stretching up */
          @keyframes bunnyStretch {
            0% {
              transform: scaleY(0) translateY(50%);
              transform-origin: bottom center;
            }
            100% {
              transform: scaleY(1) translateY(0);
              transform-origin: bottom center;
            }
          }
          
          /* Animation for fade-out */
          @keyframes bunnyFadeOut {
            0% {
              opacity: 1;
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(-20px);
            }
          }
          
          #oval-portal {
            animation: portalOpen 0.6s ease-out forwards;
            transform-origin: center;
          }
          
          #bunny-group {
            animation: bunnyStretch 0.8s ease-out 0.2s forwards;
            transform-origin: bottom center;
            transform: scaleY(0) translateY(50%);
          }
          
          #bunny-svg.fade-out {
            animation: bunnyFadeOut 0.5s ease-in-out forwards;
          }
        </style>
      </defs>
      <ellipse id="oval-portal" cx="30.88" cy="62.82" rx="30.88" ry="8.03"/>
      <g id="bunny-group">
        <path d="M53.11,54.76c1.59,4.17.37,12.32-9.85,13.76-12.35,1.74-22.07,1.6-31.76-1.83-5.58-1.98-3.21-7.77-2.83-11.94l3.33-8.18C2.7,35.35-2.13,20,3.05,5.98,3.8,3.98,5.12-.27,7.77.07c4.72.6,9.58,9.87,11.38,13.75,3.46,7.49,5.91,16.05,7.02,24.2l9.42.02c.89-7.48,3.17-15.12,6.11-22.07,1.76-4.15,6.98-14.99,11.88-15.9,2.73-.52,3.33,1.84,4.22,3.74,6.7,14.19,1.64,31.13-8.03,42.77l3.33,8.18Z"/>
        <path class="cls-1" d="M47,43.35c8.26-11.04,13.35-25.6,6.7-38.61-.39-.29-1.27.85-1.56,1.16-5.06,5.36-9.43,17.87-11.15,24.97-.52,2.16-1.45,9.6-2.21,10.79-1.12,1.74-3.94.29-5.73.18-1.1-.07-2.45-.08-3.55-.02-2.31.11-5.73,1.81-6.76-.65-1.8-10.77-4.72-23.15-10.96-32.38-.38-.56-3.1-4.48-3.71-4.03-6.68,13.06-1.56,27.55,6.7,38.61.24.16,2.21-2.35,4.32-1.33,2.7,1.3-2.1,5.14-3.08,6.53-.9,1.27-1.94,3.03-2.44,4.48-.62,1.82-1.8,7.77-.39,9.15,1.94,1.91,12.67,3.02,15.7,3.21-.24-1.51-2.79-2.61-2.62-4.3.33-3.39,8.16-3.88,9.2-.26.53,1.84-1.96,3.32-2.22,4.86,2.56.08,14.87-1.88,15.68-3.97,1.3-3.4-.61-9.23-2.51-12.26-.9-1.43-4.52-4.91-4.53-5.92-.02-2.85,3.82-1.61,5.14-.19Z"/>
        <path d="M39.42,51.77c3.72-1.01,4.31,6.75.65,7.09-2.95.28-3.27-6.38-.65-7.09Z"/>
        <path d="M21.34,51.78c3.62-.67,3.64,7.26.29,7.16-2.7-.08-3.47-6.57-.29-7.16Z"/>
      </g>
    </svg>
  `;
  
  // Add a label for the destination if provided
  if (destination) {
    const label = document.createElement('div');
    label.textContent = `Jumping to: ${destination}`;
    label.style.textAlign = 'center';
    label.style.fontSize = '12px';
    label.style.marginTop = '5px';
    label.style.color = '#333';
    label.style.fontWeight = 'bold';
    tracker.appendChild(label);
  }
  
  // Add to the document
  document.body.appendChild(tracker);
  
  // Set up fade-out after animation completes
  setTimeout(() => {
    const bunnySvg = tracker.querySelector('#bunny-svg');
    if (bunnySvg) {
      bunnySvg.classList.add('fade-out');
    }
    
    // Remove the element after the fadeout animation
    setTimeout(() => {
      if (tracker && tracker.parentNode) {
        tracker.remove();
      }
    }, 500);
  }, 2000);
}

// Export the function
window.showBunnyAnimation = showBunnyAnimation; 