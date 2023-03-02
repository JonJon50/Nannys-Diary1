const adminFormHandler = async (event) => {
    event.preventDefault();
  
    const meals = document.querySelector('#meals').value.trim();
    const activities = document.querySelector('#activities').value.trim();
    const nap = document.querySelector('#nap_schedule').value.trim();
    const mood = document.querySelector('#child_mood').value.trim();
    const other = document.querySelector('#other').value.trim();
  
  console.log(meals, activities, nap, mood, other)
  
  if (meals && activities && nap && mood && other) {
      const response = await fetch('/api/admin', {
        method: 'POST',
        body: JSON.stringify({ meals, activities, nap, mood, other }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/adminpost');
      } else {
        alert(response.statusText);
      }
    }
};
  document
    .querySelector('#admin-form')
    .addEventListener('submit', adminFormHandler);