// Import the Google Drive API library.
const {google} = require('googleapis');

// Create a new Google Drive API client.
const drive = google.drive({
  version: 'v3',
  auth: () => {
    // Get the user's OAuth 2.0 credentials from the browser.
    const credentials = await google.auth.getCredentials();
    return credentials;
  }
});

// Define the function to save the data to a text file.
async function saveData(data) {
  // Create a new file in the specified folder.
  const file = await drive.files.create({
    resource: {
      name: 'data.txt',
      parents: ['https://drive.google.com/drive/folders/1gTdPKAVM8WsVXKkZQw90IiHoQGoZmxBd']
    }
  });

  // Write the data to the file.
  await drive.files.setContent({
    fileId: file.id,
    content: data
  });
}

// When the user clicks on the "Register" button, save the data to a text file.
document.getElementById('submit').addEventListener('click', async () => {
  // Get the data from the form.
  const data = {
    fullName: document.getElementById('fullName').value,
    email: document.getElementById('email').value,
    phoneNumber: document.getElementById('phoneNumber').value,
    area: document.getElementById('area').value,
    address: document.getElementById('address').value
  };

  // Save the data to a text file.
  await saveData(data);
});
