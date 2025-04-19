
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("review-form");
  const list = document.getElementById("review-list");

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const rating = document.querySelector('input[name="rating"]:checked')?.value || "No rating";
      const review = document.getElementById("review").value;

      const reviewItem = document.createElement("li");
      reviewItem.textContent = `${name} (${rating}/5): ${review}`;
      list.appendChild(reviewItem);

      form.reset();
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("review-form");
  const list = document.getElementById("review-list");
  const averageDisplay = document.getElementById("average-rating");

  let ratings = [];

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const review = document.getElementById("review").value;
      const rating = parseFloat(document.querySelector('input[name="rating"]:checked')?.value || 0);

      // Store the rating for average calculation
      ratings.push(rating);

      // Calculate the average rating
      const sum = ratings.reduce((a, b) => a + b, 0);
      const average = (sum / ratings.length).toFixed(1);

      // Update average display
      averageDisplay.textContent = `Average rating: ${average} / 5`;

      // Reset the form
      form.reset();
    });
  }
});

