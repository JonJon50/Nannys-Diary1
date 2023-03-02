// var submit = document.querySelector(".submitChild") 
// submit.addEventListener("click", function(event){event.preventDefault()
//     var childName = document.querySelector("#child-name").value
//     console.log(childName);
// })

const newFormHandler = async (event) => {
    event.preventDefault();

    const child_name = document.querySelector('#child-name').value.trim();
    const diet_restrictions = document.querySelector('#child-restrictions').value.trim();
    const medications = document.querySelector('#child-medication').value.trim();
    const other = document.querySelector('#child-other').value.trim();

if (child_name && diet_restrictions && medications && other) {
    const response = await fetch(`/api/childrens`, {
      method: 'POST',
      body: JSON.stringify({ child_name, diet_restrictions, medications, other }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/childrens/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete child');
      }
    }
  };

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);

  document
  .querySelector('.child-list')
  .addEventListener('click', delButtonHandler);