const { GoogleDrive } = require('google-drive');

const drive = new GoogleDrive({
    appName: 'My App',
});

const userId = 'your-user-id';
const folderId = 'https://drive.google.com/drive/u/1/folders/1gTdPKAVM8WsVXKkZQw90IiHoQGoZmxBd';

const formData = new FormData();
formData.append('fullName', document.getElementById('fullName').value);
formData.append('email', document.getElementById('email').value);
formData.append('phoneNumber', document.getElementById('phoneNumber').value);
formData.append('area', document.getElementById('area').value);
formData.append('address', document.getElementById('address').value);

drive.files.create({
    userId,
    folderId,
    title: 'Registration Data',
    mimeType: 'text/plain',
    content: formData,
}).then((file) => {
    console.log('File created:', file.id);
});