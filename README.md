![Pull Quest](https://github.com/srajankumar/pullquest/blob/main/assets/banner.png)

Welcome, fellow developer, to an epic journey into the world of open source contributions! In this exhilarating quest, you will embark on your first pull request and leave your mark upon the codebase. Are you ready to unleash your coding prowess? Let's get started!

## Fork the Repository

1. Head out to <a href="https://github.com/srajankumar/pullquest">srajankumar/pullquest</a>
2. Look for the "Fork" button, which you'll find in the top-right corner of the repository's page.
3. Click the "Fork" button. This will create a copy of the repository under your GitHub account.

## Set Up Locally

1. Go to your forked repository on GitHub.
2. Click the green "Code" button, and then copy the URL that appears.
3. Open your Git Bash terminal or command line.
4. Use the `git clone` command to download the repository to your local machine.

```bash
git clone https://github.com/YOUR_USERNAME/pullquest.git
```

Replace `YOUR_USERNAME` with your actual GitHub username in the URL.

4. In your terminal or command prompt, use the `cd` command to navigate to the newly created repository folder.

```bash
cd pullquest
```

## Create a New Branch

1. Open your terminal or command prompt.
2. Use the `git branch` command to create a new branch, giving it a meaningful name.

```bash
git branch username-profile
```

Replace `username` with your GitHub username.

2. Switch to this newly created branch and begin working on it, use the `git checkout` command.

```bash
git checkout username-profile
```

Now, you are in the newly created branch and ready to add your unique profile details to the repository.

## Add Your Profile

1. Navigate to the `src/components` directory within your local repository.
2. Locate and open the `data.json` file. This file contains the profiles of others who have contributed to the project.
3. Follow the template below and add your own profile details to the `data.json` file.

```json
{
  "username": "your_github_username",
  "name": "Your Full Name",
  "email": "your_email@example.com",
  "quote": "Your Inspirational Quote or Message"
}
```

Replace the placeholder values (`your_github_username`, `Your Full Name`, `your_email@example.com`, and `Your Inspirational Quote or Message`) with your actual information.

4. Save the `data.json` file.

## Commit Your Changes

1. Stage all your changes by using the following command:

```bash
git add .
```

This prepares all your modified files for the upcoming commit.

2. Commit your work with a descriptive message that summarizes your changes:

```bash
git commit -m "Embark on an epic adventure: add my profile details"
```

## Push Your Changes

Now, it's time to push your committed changes to your forked repository on GitHub:

```bash
git push origin username-profile
```

Replace `your-username-profile` with the name of the branch where you added your profile details (e.g., `your-github-username-profile`).

## Create a Pull Request

1. Open your web browser and go to your forked repository on GitHub.
2. Ensure you have selected the branch where you made your changes (e.g., `your-username-profile`) from the branch dropdown.
3. Navigate to the main repository, in this case, `srajankumar/pullquest.`
4. Click on the **"Pull Requests"** tab at the top of the repository.
5. Click the **"New Pull Request"** button.
6. GitHub will automatically detect the changes you made in your branch compared to the main repository's branch. Ensure that the base branch is set to 'srajan/pullquest' or whichever base branch is appropriate.
7. Give your Pull Request a meaningful title and description, explaining the purpose of your changes.
8. Finally, click the **"Create Pull Request"** button to submit your Pull Request.

## Congratulations!

Congratulations you have successfully contributed to this repository!

## Contributors

<a href="https://github.com/srajankumar/pullquest/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=srajankumar/pullquest" />
</a>

### More contributions are always welcome! ;)
