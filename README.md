![Pull Quest](https://github.com/srajankumar/pullquest/blob/main/assets/title.png)

Welcome, fellow developer, to an epic journey into the world of open source contributions! In this exhilarating quest, you will embark on your first pull request and leave your mark upon the codebase. Are you ready to unleash your coding prowess? Let's get started!

## Fork the Repository

To begin, you need to fork the mighty repository by following the steps below:

1. Visit the legendary realm of <a href="https://github.com/srajankumar/pullquest">srajankumar/pullquest</a>
2. Locate the fork icon proudly displayed in the top-right corner of the repository.
3. Click the fork icon to claim your own copy of the repository and make it your own.

<hr/>

![fork](https://github.com/srajankumar/pullquest/blob/main/assets/fork.jpg)
<hr/>

![fork](https://github.com/srajankumar/pullquest/blob/main/assets/create_fork.jpg)
<hr/>

## Set Up Locally

Once you have your forked repository, it's time to bring the power of code to your local machine. Follow these steps:

1. Click the green button labeled "Code" within your forked repository.
2. Copy the sacred URL that appears.
3. Open your Gitbash terminal and unleash the following command:

```bash
git clone https://github.com/YOUR_USERNAME/pullquest.git
```

Replace <b>'YOUR_USERNAME'</b> with your magnificent GitHub username.

4. Witness the repository materialize before you. Enter the enchanted folder by typing:

```bash
cd pullquest
```

<hr/>

![fork](https://github.com/srajankumar/pullquest/blob/main/assets/clone_fork.jpg)
<hr/>

## Create a New Branch

Now, let's ensure the balance of the main branch remains undisturbed. Create a new branch within your repository realm using the steps below:

1. Utter the ancient words:

```bash
git branch username-profile
```

Replace <b>'username'</b> with your legendary GitHub username.

2. Venture forth into this new realm with the command:

```bash
git checkout username-profile
```

Equip yourself with your profile sword, for it is time to add your unique profile details.

## Add Your Profile

To join the hallowed hall of fame, you shall add your own profile details to the repository. Follow these instructions:

1. Navigate to the <b>'src/components'</b> directory within your local repository.
2. Open the sacred <b>'data.json'</b> file and behold the profiles that have come before you.
3. Fear not, for you shall join their ranks! Using their wisdom as a guide, add your own profile in the following format:

```json
,{
  "username": "your_github_username",
  "name": "your_name",
  "email": "email_id",
  "quote": "sample_quote"
}
```


Replace the placeholder values (<b>'your_github_username'</b>, <b>'your_name'</b>, <b>'email_id'</b>, and <b>'sample_quote'</b>) with your own information.

<hr/>

![fork](https://github.com/srajankumar/pullquest/blob/main/assets/locate_file.jpg)
<hr/>

![fork](https://github.com/srajankumar/pullquest/blob/main/assets/add_data.jpg)
<hr/>

## Commit Your Changes

With each keystroke, you shape your destiny. Now, it's time to gather your changes and prepare them for the grand quest ahead. Follow these steps:

1. Invoke the sacred command:

```bash
git add .
```

This will stage all your changes, ready for greatness.

2. Commit your work with a powerful message that echoes through the ages:

```bash
git commit -m "Embark on an epic adventure: add my profile details"
```

## Push Your Changes

The time has come to push your changes to your forked repository and illuminate the path for all to see. Execute the following command:

```bash
git push origin username-profile
```

The forces of Git and GitHub shall carry your code to the distant reaches of the digital realm.

## Create a Pull Request

Brave warrior, open your web browser and gaze upon your forked copy in your GitHub dominion. A new chapter unfolds before you as you create a pull request, a gateway between realms. Follow these steps:

1. Select the `new branch` you have forged.
2. Aim it towards the realm of <b>'srajan'</b>'s profile branch.
3. With a mighty click, submit your pull request and await the moment when fate intervenes.
4. The repository owner shall review your valorous contribution and, upon successfully merging it, your profile shall take its rightful place among the honored ranks.
5. Behold, as your name shines brightly in the submissions tab, a beacon of your triumph! ⭐

<hr/>

![fork](https://github.com/srajankumar/pullquest/blob/main/assets/open_pr.jpg)
<hr/>

![fork](https://github.com/srajankumar/pullquest/blob/main/assets/create_pr.jpg)
<hr/>

## Congratulations!

Congratulations, brave developer, on conquering your first pull request and leaving your mark upon the codebase. Your journey has just begun, and may your future contributions be even more awe-inspiring as you continue your legendary quest!

Now, go forth and code with valor! 🚀

## Authors

- [@srajankumar](https://github.com/srajankumar)

## Contributing

Contributions are welcome! ;)
