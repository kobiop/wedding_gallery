# Wedding Memories Web Application

## Introduction
The Wedding Memories Web Application is a responsive platform designed to manage, share, and cherish your wedding memories. The app provides a seamless user experience for uploading, viewing, and managing photos in a beautiful gallery interface. Built with modern web technologies, it ensures a fast and efficient experience on any device.

**🎥 Watch the Demo:** [Click here](https://www.youtube.com/watch?v=DaC3eU5YAO0)

## Features
- **Image Upload**: Effortlessly upload your wedding photos to the gallery.
- **Photo Gallery**: View photos in a responsive and visually appealing grid.
- **Photo Deletion**: Remove unwanted photos with ease.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Backend Scalability**: Powered by ASP.NET Core and MongoDB for robust performance.
- **Deployment**: Hosted on Azure for reliability and accessibility.

## Tech Stack
### Frontend
- React with Vite for fast development and bundling.
- Tailwind CSS for modern and responsive styling.
- Font Awesome for beautiful iconography.

### Backend
- ASP.NET Core for API development and business logic.
- MongoDB for efficient and scalable data storage.

### Deployment
- Azure Web App Services for hosting.

## Installation & Setup
### Prerequisites
- Node.js (v16 or later)
- .NET SDK (v6.0 or later)
- MongoDB server
- Azure account for deployment

### Steps to Run Locally
#### 1. Clone the Repository
```bash
git clone https://github.com/your-repo-name.git
cd your-repo-name
```

#### 2. Set Up the Frontend
```bash
cd client
npm install
npm run dev
```

#### 3. Set Up the Backend
- Navigate to the backend directory:
  ```bash
  cd server
  ```
- Install dependencies:
  ```bash
  dotnet restore
  ```
- Configure the `appsettings.json` file with your MongoDB connection string.
- Run the backend:
  ```bash
  dotnet run
  ```

#### 4. MongoDB Setup
Ensure your MongoDB server is running locally or configure a remote database connection.

#### 5. Access the Application
- The frontend will be available at `http://localhost:5173`.
- The backend API will be available at `http://localhost:5000`.

## Usage
1. Open the application in your browser.
2. Navigate to the gallery to view uploaded photos.
3. Use the "Upload" button to add new photos.
4. Hover over photos to delete them using the delete button.
5. Enjoy the seamless, responsive interface on any device.

## Deployment
### Steps to Deploy on Azure
1. Log in to your Azure account.
2. Create an Azure Web App for the backend:
   - Push your ASP.NET Core project to the Azure Web App.
3. Deploy the React frontend to Azure Static Web Apps:
   - Build the React project:
     ```bash
     npm run build
     ```
   - Upload the `dist` folder to Azure.
4. Configure environment variables in Azure for your MongoDB connection.
5. Set up HTTPS for secure communication.

The application will be accessible via the Azure-provided domain.

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

For any issues or contributions, please open a pull request or file an issue on GitHub.

